import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {getFluidImageObject} from "gatsby-transformer-cloudinary"
import Image from "gatsby-image"
import {Box, Heading, Text} from "@chakra-ui/core/dist";


const SinglePage = () => {
    const [fluid, setFluid] = useState(false);

    useEffect(() => {
        async function getData() {
            const res = await getFluidImageObject({
                public_id: "gatsby-source-cloudinary/penguin",
                cloudName: 'chuloo',
                originalHeight: 400,
                originalWidth: 500,
                transformations: ["e_replace_color:purple", "a_hflip"],
            });
            setFluid(res);
        }

        getData();

    }, []);
    return (
        <Layout>
            <SEO title={"single"}/>
            <Box>
                <Heading as={'h1'} size={'lg'} m={5} textAlign={'center'}>Single Fluid Image</Heading>
                <Box maxWidth={[350, 400, 500]} mx={"auto"} shadow="md" borderWidth="1px" rounded={'lg'} p={3}>
                    {fluid ? <Image fluid={fluid}/> : "loading..."}
                </Box>
                <Box my={30}>
                    <Text>This is a single image sourced directly from Cloudinary. This image can be any image in your
                        Cloudinary account, the public ID of the image is required to source this images for use in
                        gatsby-image </Text>
                </Box>

            </Box>
        </Layout>
    )
};

export default SinglePage
