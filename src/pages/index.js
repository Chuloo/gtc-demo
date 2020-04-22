import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const IndexPage = () => {
    // fetch images
    const data = useStaticQuery(graphql`
    query BannerImage {
      listImages: allCloudinaryAsset(limit: 10) {
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
          fluid(transformations:["e_grayscale"]) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
`);

    const bannerImage = data.bannerImage.cloudinary.fluid;
    const galleryImages = data.listImages.images;
    console.log(data.listImages.images);

    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <h2>Banner Image</h2>
                <Image fluid={bannerImage}/>
            </div>

            <div>
                <h2>Gallery Images</h2>
                {galleryImages.map((val, index) => (
                    <Image fixed={val.node.fixed} key={index}/>
                ))}
            </div>
            <Link to="/single">Second Page</Link>
        </Layout>
    )
};

export default IndexPage
