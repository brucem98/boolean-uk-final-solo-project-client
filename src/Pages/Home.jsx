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
        <main>
            <div>
                <section>
                <h2>Recipes</h2>
                </section>
            </div>
            <section className="recipes_list">
            <ul>
                {props.recipes.map((recipe, index) => {
                    return(
                      <li key={index} >
                          <h3>{recipe.name}</h3>
                          <p> <img src={timer} alt="timer" className="icon"/> {recipe.totalTime} MINUTES </p>  
                        <Link to={`/recipes/${recipe.id}`} state={{recipe}}>
                      <img 
                          
                          src={recipe.img} alt="Recipe" className="recipe_img" />
                      </Link>  
                      </li>
                    )
                })}
            </ul>
            </section>
        </main>
    
    </>
)
}


export default Home