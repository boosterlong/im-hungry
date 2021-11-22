import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/isolated-monochrome-white.svg"
import { Typography } from "@mui/material"

export default function Footer () {
    return (
        <footer
        style={{
          marginTop: `2rem`,
          backgroundColor: `#54553C`,
        }}
      >
        © {new Date().getFullYear()} Blake Chartrand
      </footer>
    )
}