import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {getFluidImageObject} from "gatsby-transformer-cloudinary"
import Image from "gatsby-image"



const SinglePage = () => {
    const [fluid, setFluid] = useState(false);

    useEffect( () => {
        async function getData (){
            const res = await getFluidImageObject({
                public_id: "gatsby-source-cloudinary/penguin",
                cloudName: 'chuloo',
                originalHeight: 400,
                originalWidth: 500,
                // transformations: [],
            });
            console.log(res)
            setFluid(res);
        }
        getData();


    }, []);
    return (
        <Layout>
            <SEO title={"single"}/>
            <div style={{width: "500px"}}>
                <h1>Single Image Page</h1>
                {fluid ? <Image fluid={fluid}/> : "loading..."}
            </div>
        </Layout>
    )
};

export default SinglePage
