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
  <div className="four-column-grid"> 
    <div></div>
    <section>
        <img src={recipe.img} alt="recipe" className="specific-recipe-img"/>
    </section>
    <section>
        <h1 className="specific-recipe-title">{recipe.name}</h1>
        <hr />
        <ul className="list-inline">
            <li>Total Time: {recipe.totalTime} min</li>
            <li>Serves: {recipe.serving}</li>
            <li>{recipe.dishType}</li>
        </ul>
        <hr />
        <h4 className="nutrition-info-title">NUTRITION PER SERVING</h4>
        <ul className="list-inline">
            <li>Calories | {recipe.calories}</li>
            <li>Fat | {recipe.fat}</li>
            <li>Protein | {recipe.protein}</li>
            <li>Carbs | {recipe.carbs}</li>
        </ul>
        <hr className="hr-fix" />
    </section>
    <div></div>
 </div> 
    <main>
    <section className="ingredients three-column-grid-ingredients">
    <div></div>
    <section>
    <h2>Ingredients</h2>
    <hr/>
    <ul className="four-column-grid-ingredient-list">
        {recipe.ingredients.map((ingredient, index) => {
            return(
                <li key={index}>
                    <h3>{ingredient.name}</h3>
                    <img src = {ingredient.img} alt = "ingredient" />
                    <br/>
                    {/* <button onClick={() => handleGetPrice(ingredient)}>Check Price</button> */}
                    <a href={`https://www.tesco.com/groceries/en-GB/search?query=${ingredient.name}`} target="_blank" rel="noopener noreferrer">
                        <button className="tesco-button">
                            Tesco Info 
                        </button>
                    </a>
                    {ingredient.prices && <a href={ingredient.prices[0].link}><h4 class="price-link">Price: £{ingredient.prices[0].price}</h4></a>}
                </li>
            )
        })}
    </ul>
    <hr />  
    </section>
    <div></div>
    </section>
   
    <section className="three-column-grid-ingredients">
    <div></div>
        <section>
        <h2 className="method-title">Method</h2>
        <p>{recipe.instruction}</p>
        </section>
    <div></div>
    </section>
    </main>
    <footer></footer>
 </>    

)   
}

export default  Recipe;

