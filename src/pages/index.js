import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { SimpleGrid, Box, Button, Heading } from "@chakra-ui/core";
import {Text} from "@chakra-ui/core/dist";

const IndexPage = () => {
    // fetch images
    const data = useStaticQuery(graphql`
    query BannerImage {
      listImages: allCloudinaryAsset(limit: 9) {
        images: edges {
          node {
            fixed(width: 300) {
              ...CloudinaryAssetFixed
            }
          }
        }
      }
      bannerImage: file(name: { eq: "7" }) {
        cloudinary: childCloudinaryAsset {
          fluid(transformations:["e_grayscale"] maxWidth: 1500) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
`);

    const bannerImage = data.bannerImage.cloudinary.fluid;
    const galleryImages = data.listImages.images;

    return (
        <Layout>
            <SEO title="Home" />
            <Box className={'banner'} style={{marginBottom: "100px"}}>
                <Heading as={'h1'} size={'xl'} m={3} style={{textAlign: "center"}}>Responsive Banner Image</Heading>
                <Box>
                    <Image fluid={bannerImage}/>
                </Box>
            </Box>
            <Text my={5}>Click the button below to navigate to the second page with a single sourced image from Cloudinary</Text>
            <Button variantColor={'teal'}>
                <Link  to="/single"> Second Page</Link>
            </Button>

            <Box mx={'auto'} my={20}>
                <Heading style={{textAlign: "center", fontSize: "1.5em"}}>Optimized Gallery Images</Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={1}>
                    {galleryImages.map((val, index) => (
                        <Box p={5} m={2} shadow="md" borderWidth="1px" rounded={'lg'} d="flex" alignItems="center">
                            <Image fixed={val.node.fixed} key={index}/>
                        </Box>
                    ))}
                </SimpleGrid>

            </Box>
        </Layout>
    )
};

export default IndexPage
