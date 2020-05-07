import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {Box, Button, Heading, SimpleGrid, Text} from "@chakra-ui/core/dist";

const IndexPage = () => {
    // fetch images
    const data = useStaticQuery(graphql`
    query BannerImage {
      listImages: allCloudinaryAsset(limit: 9) {
        images: edges {
          node {
            fluid {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
      bannerImage: file(name: { eq: "7" }) {
        cloudinary: childCloudinaryAsset {
          fluid(transformations:["e_grayscale"] maxWidth: 2000) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
`);

    const bannerImage = data.bannerImage.cloudinary.fluid;
    const galleryImages = data.listImages.images;
    console.log(galleryImages)
    console.log(bannerImage)

    return (
        <Layout>
            <SEO title="Home"/>
            <Box mb={[10, 20, 100]}>
                <Heading size={'xl'} m={3} textAlign={"center"}>Responsive Banner Image</Heading>
                <Box>
                    <Image fluid={bannerImage}/>
                </Box>
            </Box>
            <Text my={5}>Click the button below to navigate to the second page with a single sourced image from
                Cloudinary</Text>
            <Button variantColor={'teal'}>
                <Link to="/single"> Second Page</Link>
            </Button>

            <Box mx={'auto'} my={20}>
                <Heading textAlign={"center"} size={"xl"} mb={5}>Optimized Gallery Images</Heading>
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

export default IndexPage
