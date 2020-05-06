import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import Header from "./header"
import "./layout.css"
import {Box, Text} from "@chakra-ui/core/dist";

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
                <Text>For this demo, the amazing images here by great artists were all sourced from Unsplash</Text>
            </Box>
        </Box>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
