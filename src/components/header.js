import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/isolated-monochrome-black.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
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
  siteTitle: ``,
}

export default Header
