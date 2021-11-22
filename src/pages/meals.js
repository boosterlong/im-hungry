import React, { useEffect, useState } from "react";
import { Link } from "gatsby"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as qs from 'query-string';

import arrow from '../images/up-arrow.svg'

import Layout from "../components/layout"
import Seo from "../components/seo"

var loaded = true

//This is to stop the server side rendering from trying to populate the meal list and erroring
const isBrowser = typeof window !== "undefined"
if (isBrowser) {
    loaded = false
}

export default function MealsPage() {

  const [listOutput, setListOutput] = useState([]);

  var mealList = []

  async function getMealList() {
    if (loaded == false) {
      try {
          //Grabs query string from URL
          const parsed = qs.parse(window.location.search);
          //Stops unwanted rerendering
          loaded = true
          //Fetch data from API
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${parsed.category}`);
          const items = await response.json();
          for (let i = 0; i < items.meals.length; i++) {
            mealList.push([items.meals[i].strMeal, items.meals[i].idMeal, items.meals[i].strMealThumb])
          }
          setListOutput(mealList)
      } catch {
        alert('Sorry, we couldn\'t load any recipes for that category.')
        return
      }
    } else {
      return
    }
  }

  getMealList()

  return(
  <Layout>
    <Seo title="Recipe List" />
    <div class="main-list">
    {listOutput.map(item => (
      <a className="no-decoration" href={`/recipe?index=${item[1]}`}>
        <Card className="recipe-card" sx={{ margin: 0.5 }}>
          <CardMedia
            component="img"
            height="140"
            image={item[2]}
            alt={item[0]}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              <p class="capitalize">
                {item[0]}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </a>
    ))}
    </div>
    <Link className="mobile-only to-top" to="#">
      <img src={arrow}></img>
    </Link>
  </Layout>
    )
}