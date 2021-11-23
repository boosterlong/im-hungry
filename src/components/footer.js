import * as React from "react"
import logo from "../images/default-monochrome.svg"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorageIcon from '@mui/icons-material/Storage';
import { Container } from "@mui/material";




export default function Footer () {
    return (
    <div className="darkback centered">
      <Container maxWidth="sm">

      <img src={logo} width="90%" style={{paddingTop: '1rem'}} />

      <div>
        <a className="socials-list" onClick={() => {alert('Sorry, this is just a portfolio piece and does not have active social media accounts.')}}>
          <FacebookIcon sx={{ color: 'white'}} fontSize="large" />
          <InstagramIcon sx={{ color: 'white'}} fontSize="large" />
          <TwitterIcon sx={{ color: 'white'}} fontSize="large" />
          <MailOutlineIcon sx={{ color: 'white'}} fontSize="large" />
          <StorageIcon sx={{ color: 'white'}} fontSize="large" />
        </a>
      </div>

      <div>

      
      </div>
      </Container>
      <footer
        style={{
          marginTop: `2rem`,
          backgroundColor: `#54553C`,
          color: 'white',
          fontSize: `small`,
          fontFamily: `sans-serif`
        }}
      >
        © {new Date().getFullYear()} Blake Chartrand
      </footer>
    </div>
    )
}