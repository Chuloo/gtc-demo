import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {Box, Button, Heading, SimpleGrid} from "@chakra-ui/core/dist";
import {graphql, Link, useStaticQuery} from "gatsby";


const SinglePage = () => {
    const data = useStaticQuery(graphql`
    query GalleryImages{
      listImages: allCloudinaryAsset(limit: 9) {
        images: edges {
          node {
            fluid {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    }
`);

    const galleryImages = data.listImages.images;

    return (
        <Layout>
            <SEO title={"single"}/>
            <Box mx={'auto'} my={10}>
                <Heading textAlign={"center"} size={"xl"} mb={10}>Optimized Gallery Images</Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={2}>
                    {galleryImages.map((val, index) => (
                        <Box key={index} p={3} m={2} my={"auto"} shadow="md" borderWidth="1px" rounded={'lg'}>
                            <Image fluid={val.node.fluid}/>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Layout>
    )
};

export default SinglePage
