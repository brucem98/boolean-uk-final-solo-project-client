import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./css_pages/recipe.css"


function Recipe ({ recipes }) {
console.log("Inside Recipe: ", recipes)

const { id } = useParams();
console.log(id)
const [recipe, setRecipe] = useState(null);
console.log("recipe state object: ", recipe);

const location = useLocation()

useEffect(() => {
    if(location.state){
        console.log({location})
        setRecipe(location.state.recipe)
    }
    // const url = `${process.env.REACT_APP_FETCH_URL}/recipes/${id}`;
    // console.log("url: ", url)
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log("data: ", data);
    //         setRecipe(data)
    //     })
}, [id])
if(!recipe)return<div>loading...</div>


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

                </li>
            )
        })}
    </ul>
    </section>
    <section>
    <h2>Method</h2>
    

    </section>
    </main>

 </>    

)   
}

export default  Recipe;