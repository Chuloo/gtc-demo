import {Link as GatsbyLink} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/core/dist";
import {useColorMode} from "@chakra-ui/core";

const Header = ({siteTitle}) => {
    const {colorMode, toggleColorMode} = useColorMode();
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
                <Button size={"xs"} onClick={toggleColorMode} color={colorMode === "light" ? "black" : "white"}>
                    {colorMode === 'light' ? 'Dark Mode 🌑' : 'Light Mode ☀️'}
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
