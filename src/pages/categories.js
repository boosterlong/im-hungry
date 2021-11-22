import React, { useEffect, useState } from "react";
import { Link } from "gatsby"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Layout from "../components/layout"
import Seo from "../components/seo"
import { textAlign } from "@mui/system";

var loaded = false

export default function IndexPage () {

  const [categories, setCategories] = useState([]);
  var categoryList = []


  async function getCategories() {
    if (loaded == false) {
      try {
          loaded = true
          //Fetch data from API
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
          const items = await response.json();

          //Add all categories to a list
          for (let i = 0; i < items.categories.length; i++) {
            categoryList.push([items.categories[i].strCategory, items.categories[i].strCategoryThumb])
          }
          setCategories(categoryList)

      } catch {
        alert('Sorry, a problem occured loading the page.')
        return
      }
    } else {
      return
    }
  }
  
  getCategories()

  return(
    <Layout>
      <Seo title="Home" />
      <div className="main-list">
      {categories.map(item => (
        <a href={`/meals?category=${item[0]}`}>
          <Card className="recipe-card" sx={{ margin: 0.5 }}>
                  <CardMedia
                      classes="category-card"
                      component="img"
                      height="230"
                      image={item[1]}
                      alt={item[0]}
                      />
                    <Typography variant="h5" style={{ textAlign: `center`}}>
                      {item[0]}
                    </Typography>
          </Card>
        </a>
      ))}
      </div>
    </Layout>
  )
}
