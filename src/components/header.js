import {Link as GatsbyLink} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/core/dist";

const Header = ({siteTitle}) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            px={["0.5em", "0.5em", "1.5em"]}
            py={["1em", "1em", "1.5em"]}
            bg="blue.900"
            color="white"
        >
            <Flex align="flex-start">
                <Heading as="h1">
                    <GatsbyLink to="/">
                        <Box color={'white.800'}>
                            <Text fontSize={["md", "md", "lg"]}>{siteTitle}</Text>
                        </Box>
                    </GatsbyLink>
                </Heading>
            </Flex>
            <Flex align="flex-end">
                <Button variantColor={'blue'} mr={2} size={"xs"}>
                    <GatsbyLink to="/">Home</GatsbyLink>
                </Button>
            </Flex>
        </Flex>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
