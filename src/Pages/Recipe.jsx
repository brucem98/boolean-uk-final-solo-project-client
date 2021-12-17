import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./css_pages/recipe.css"


function Recipe ({ recipes }) {
console.log("Inside Recipe: ", recipes)

const { id } = useParams();
console.log(id)
const [recipe, setRecipe] = useState(null);
const [ingredientPrices, setIngredientPrices] = useState([]);
console.log("recipe state object: ", recipe);
console.log("prices state object: ", ingredientPrices)


const location = useLocation()

useEffect(() => {
    if(location.state){
        console.log({location})
        setRecipe(location.state.recipe)
    }
}, [id])
if(!recipe)return<div>loading...</div>

function handleGetPrice(targetIngredient) {
    fetch(`${process.env.REACT_APP_FETCH_URL}/prices?ingredient=${targetIngredient.name}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("prices data: ", data)
            const updatedIngredients = recipe.ingredients.map((ingredient) => {
                if(ingredient.id === targetIngredient.id){
                    return {
                        ...ingredient,
                        prices: data
                    }
                }
                return ingredient
            }) 
            setRecipe({
                ...recipe,
                ingredients: updatedIngredients
            })
        })  
        console.log("button clicked")
}


return (
 <>
    <header>
        <img src={recipe.img} alt="recipe"/>
        <h1>{recipe.name}</h1>
        <ul>
            <li>Total Time: {recipe.totalTime} min</li>
            <li>Serves: {recipe.serving}</li>
            <li>{recipe.dishType}</li>
        </ul>
    </header>
    <main>
    <section className="ingredients">
    <h2>Ingredients</h2>
    <ul>
        {recipe.ingredients.map((ingredient, index) => {
            return(
                <li key={index}>
                    <h3>{ingredient.name}</h3>
                    <img src = {ingredient.img} alt = "ingredient" />
                    <button onClick={() => handleGetPrice(ingredient)}>Check Price</button>
                    {ingredient.prices && <h4>Price: £{ingredient.prices[0].price}</h4>}
                </li>
            )
        })}
      
    </ul>
    </section>
    <section>

    </section>
    <section>
    <h2>Method</h2>

    </section>
    </main>

 </>    

)   
}

export default  Recipe;