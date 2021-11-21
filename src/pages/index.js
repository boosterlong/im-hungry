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
          for (let i = 0; i < items.categories.length; i++) {
            categoryList.push([items.categories[i].strCategory, items.categories[i].strCategoryThumb])
          }
          setCategories(categoryList)
      } catch {
        alert('Sorry, we couldn\'t load any recipes for that category.')
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
        <h2 style={{ textAlign:"center"}}>For?</h2>
        <div className="main-list">
        {categories.map(item => (
          <Card className="recipe-card" sx={{ margin: 0.5 }}>
            <CardMedia
              component="img"
              height="140"
              image={item[1]}
              alt={item[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {item[0]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={`/meals?category=${item[0]}`} size="small" variant="outlined">See Category</Button>
            </CardActions>
          </Card>
        ))}
        </div>
      </Layout>
    )
  }
