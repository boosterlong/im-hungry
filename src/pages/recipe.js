import React, { useEffect, useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from "@mui/system";



import Layout from "../components/layout"
import Seo from "../components/seo"
import * as qs from 'query-string';
import { fontSize } from "@mui/system";
import { List } from "@mui/material";

var loaded = true

//This is to stop the server side rendering from trying to populate the meal list and erroring

const isBrowser = typeof window !== "undefined"
if (isBrowser) {
    loaded = false
}

export default function RecipePage() {


    //Parses the weird line breaks in the DB
    function newLineText(props) {
        const newText = props.split('\n').map(str => {
            if (str.length > 3) {
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
            //Makes the data easier to access
            recipeData = items.meals[0]


            //Turns the data into Table Cells
            for (let i = 1; i <= 20; i++) {
              const nameKey = 'strIngredient' + i
              const measureKey = 'strMeasure' + i
              const name = recipeData[nameKey]
              if (name && name.length) {
                ingredients.push(
                <TableRow hover="true" className="ingredient">
                    <TableCell>
                        {name}
                    </TableCell>
                    <TableCell>
                        {recipeData[measureKey]}
                    </TableCell>
                </TableRow>)
              }
            }

            //Assigned loadedRecipe to the html/react elements to display
            loadedRecipe = (
                <div style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                }}>
                    <h1 className="capitalize white">{recipeData.strMeal}</h1>
                    <a href={recipeData.strSource} className="source">Original Recipe</a>
                    <br />
                    <Box sx={{
                        display: `inline-flex`,
                        flexWrap: `wrap`,
                    }}
                        >
                        <TableContainer style={{paddingLeft: `1rem`, paddingRight: `1rem`}} component={Paper}>
                            <Table sx="small" aria-label="ingredient table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">
                                            Ingredient
                                        </TableCell>
                                        <TableCell align="left">
                                            Measure
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ingredients}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                        <Paper variant="outlined" style={{
                            marginTop: `1rem`,
                        }}>
                            <List>
                                <ul className="instructions">
                                    {newLineText(recipeData.strInstructions)}
                                </ul>
                            </List>
                        </Paper>
                    </Box>
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
        <Seo title="Recipe" />
        {recipe}
    </Layout>
    )
}




