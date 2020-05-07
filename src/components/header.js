import {Link as GatsbyLink} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Box, Flex, Heading, Button} from "@chakra-ui/core/dist";
import {useColorMode} from "@chakra-ui/core";

const Header = ({siteTitle}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="blue.900"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg">
                    <GatsbyLink to="/">
                        <Box color={'white.800'}>{siteTitle}</Box>
                    </GatsbyLink>
                </Heading>
            </Flex>
            <Button onClick={toggleColorMode} color={colorMode === "light" ? "black" : "white"}>
                {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
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
