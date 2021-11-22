import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/isolated-monochrome-white.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#54553C`,
      marginBottom: `1rem`,
      position: `sticky`,
      top: `0`,
      height: `10vh`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `center`,
        maxWidth: 960,
        paddingTop: `1rem`,
        paddingBottom: `0`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/categories"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} height="70vh" className="header-logo"/>
        </Link>
      </h1>
    </div>
  </header> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `imhungry.app`,
}

export default Header
