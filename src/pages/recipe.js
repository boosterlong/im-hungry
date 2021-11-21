import React, { useEffect, useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



import Layout from "../components/layout"
import Seo from "../components/seo"
import * as qs from 'query-string';
import { fontSize } from "@mui/system";

var loaded = true


//This is to stop the server side rendering from trying to populate the meal list and erroring

const isBrowser = typeof window !== "undefined"
if (isBrowser) {
    loaded = false
}

export default function RecipePage() {

    function newLineText(props) {
        const newText = props.split('\n').map(str => {
            if (str.length > 1) {
            return <li>{str}</li>
            }
        })
        return newText;
      }

    const [recipe, setRecipe] = useState([]);

    let recipeData = null

    let loadedRecipe = null

    const ingredients = []

    async function populateRecipe() {
        if (loaded == false) {
            //Grabs query string from URL
            const parsed = qs.parse(window.location.search);
            //Stops unwanted rerendering
            loaded = true
            //Fetch data from API
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parsed.index}`);
            const items = await response.json();
            //Makes the data a bit more readable
            recipeData = items.meals[0]

            for (let i = 1; i <= 20; i++) {
              const nameKey = 'strIngredient' + i
              const measureKey = 'strMeasure' + i
              const name = recipeData[nameKey]
              if (name && name.length) {
                ingredients.push(<TableRow hover="true" className="ingredient"><td>{name}</td><td>{recipeData[measureKey]}</td></TableRow>)
              }
            }

            loadedRecipe = (
                <div>
                    <h1 className="capitalize">{recipeData.strMeal}</h1>
                    <a href={recipeData.strSource} className="source">{recipeData.strSource}</a>
                    <div class="ingredient-list">
                        <Paper sx={{ maxWidth: '800px'}}>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <th>Ingredient</th>
                                            <th>Measure</th>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {ingredients}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <br />
                    <ul>{newLineText(recipeData.strInstructions)}</ul>
                </div>
            
            )
            setRecipe(loadedRecipe)
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




