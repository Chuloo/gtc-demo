import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {useColorMode, Text} from "@chakra-ui/core"

const Header = ({ siteTitle }) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return(
    <div>
      <h1>
        <GatsbyLink to="/">
            <Text color={'gray.800'}>{siteTitle}</Text>
        </GatsbyLink>
      </h1>
          {/*<Button onClick={toggleColorMode}>*/}
          {/*    Toggle {colorMode === 'Light' ? 'Dark' : 'Light'}*/}
          {/*</Button>*/}
    </div>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
