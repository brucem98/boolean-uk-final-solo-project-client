import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './Pages/Home';
import { useEffect, useState } from "react";



function App() {

  const [recipes, setRecipes] = useState([])

  function getRecipe() {
    const url = `${process.env.REACT_APP_FETCH_URL}/recipes`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            setRecipes(data.recipes)
        })
}
useEffect(() => {
    getRecipe()
}, [])
console.log("Fetch recipes", recipes)

return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home recipes={recipes}/>}/>
        </Routes>
    </BrowserRouter>
)
}

export default App;
