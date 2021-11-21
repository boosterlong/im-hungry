import * as React from "react"
import heroImage from '../images/default-monochrome.svg'
import arrow from '../images/right-arrow-button.svg'

import Seo from "../components/seo"


const WelcomeSplash= () => (
  <div className="splashpage">
    <Seo title="imhungry.app" />
    <img src={heroImage} className="hero-splash"/>
    <h1 className="splash-button">
        What're we making tonight?
    </h1>
    <a href="./categories">
        <img src={arrow} className="splash-arrow"/>
    </a>
  </div>
)

export default WelcomeSplash