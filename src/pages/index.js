import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from '@mui/material/Button';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2 style={{ textAlign:"center"}}>For?</h2>
    <div className="category-selections">
      <Button href={`/meals?category=beef`} variant="outlined" size="large">Beef</Button>
      <Button href={`/meals?category=chicken`} variant="outlined" ize="large">Chicken</Button>
      <Button href={`/meals?category=pasta`} variant="outlined" size="large">Pasta</Button>
      <Button href={`/meals?category=pork`} variant="outlined" size="large">Pork</Button>
    </div>
  </Layout>
)

export default IndexPage
