import React, { useEffect, useState } from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as qs from 'query-string';

var loaded = true

const isBrowser = typeof window !== "undefined"
if (isBrowser) {
    loaded = false
}

export default function RecipePage() {

    const [recipe, setRecipe] = useState([]);

    async function populateRecipe() {
        if (loaded == false) {
            const parsed = qs.parse(window.location.search);
            loaded = true
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parsed.index}`);
            const items = await response.json();
            setRecipe(items.meals[0].strInstructions)
            console.log(items.meals[0].strMeal)    
        } else {
        return
        }
  }

  populateRecipe()


  return(
  <Layout>
    <Seo title="Page two" />

    {recipe}

  </Layout>
    )
}


// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parsed.index}