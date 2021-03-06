import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import Header from "./header"
import {Box, Text, Link} from "@chakra-ui/core/dist";

const Layout = ({children}) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <Box>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Box width={['90%', '90%', '80%']} mx={'auto'}>
                <main>{children}</main>
                <Text mt={10}>For this demo, the amazing images here by great artists were all sourced from <Link href={"https://unsplash.com/"} target={"_blank"} color="teal.500">Unsplash</Link></Text>
            </Box>
        </Box>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
