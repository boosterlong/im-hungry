import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/isolated-monochrome-white.svg"

const Header = ({ siteTitle }) => (
  <Link
    to="/categories"
  >
    <header
      style={{
        background: `#54553C`,
        marginBottom: `1rem`,
        position: `sticky`,
        top: `0`,
        height: `10vh`,
        borderBottom: `1px solid #9BD92B`,
        boxShadow: `0px 5px 5px black`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          textAlign: `center`,
          maxWidth: 960,
          paddingTop: `0.25rem`,
          paddingBottom: `0`,
        }}
      >
            <img src={logo} height="70vh" className="header-logo"/>
      </div>
    </header>
  </Link> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `imhungry.app`,
}

export default Header
