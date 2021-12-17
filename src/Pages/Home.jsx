import { Link } from "react-router-dom";
import timer from "../Resources/Img/timer.svg";
import "./css_pages/home.css"

function Home(props) {

console.log("Inside Home: ", props)

return(
    <>
        <header>
            <h1>Main Page</h1>
        </header>
        <main className="three-column-grid">
            <div></div>
            <div>
            <h2>Recipes</h2>
            <section className="recipes-list">
            <ul className="three-column-grid-recipes">
                {props.recipes.map((recipe, index) => {
                    return(
                      <li key={index} >
                          <h3>{recipe.name}</h3>
                          <p>{recipe.dishType}</p>
                          <p> <img src={timer} alt="timer" className="icon"/> {recipe.totalTime} MINUTES </p>  
                        <Link to={`/recipes/${recipe.id}`} state={{recipe}}>
                      <img 
                          src={recipe.img} alt="Recipe" className="recipe-img" />
                      </Link>  
                      </li>
                    )
                })}
            </ul>
            </section>
            </div>
            <div></div>
        </main>

    </>
)
}


export default Home