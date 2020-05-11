import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {Box, Button, Heading, Text} from "@chakra-ui/core/dist";

const IndexPage = () => {
    // fetch images
    const data = useStaticQuery(graphql`
    query BannerImage {
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

    return (
        <Layout>
            <SEO title="Home"/>
            <Box mb={[10, 20, 100]}>
                <Heading size={'xl'} m={3} textAlign={"center"}>Responsive Banner Image</Heading>
                <Box>
                    <Image fluid={bannerImage}/>
                </Box>
            </Box>
            <Text my={5}>Click any of the buttons below to see the gallery or single Image with
                the <i>getFluidImageObject</i> API</Text>

            <Box>
                <Button variantColor={'teal'} mr={10} mb={[2, 0, 0]}>
                    <Link to="/gallery"> Gallery Images</Link>
                </Button>

                {/*Button to single page with getFluidImageAPI*/}
                <Button variantColor={'green'} mb={[2, 0, 0]}>
                    <Link to="/single">API Image</Link>
                </Button>
            </Box>
        </Layout>
    )
};

export default IndexPage
