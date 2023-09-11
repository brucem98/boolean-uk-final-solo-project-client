import { Link } from "react-router-dom";
import timer from "../Resources/Img/timer.svg";
import "./css_pages/home.css"

function Home(props) {

console.log("Inside Home: ", props)

return(
    <>
        <header className="main-page-header">
            <h1>Simple Dishes</h1>
        </header>
        <main className="three-column-grid-home">
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
                      <div className="hover-box">
                      <img src={recipe.img} alt="Recipe" className="recipe-img" />
                      </div>
                      </Link>  
                      </li>
                    )
                })}
            </ul>
            </section>
            </div>
            <div></div>
        </main>
        <footer></footer>
    </>
)
}


export default Home