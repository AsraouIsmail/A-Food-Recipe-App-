
import { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
import './index.css';
//url de l'api
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);


  //creer une fonction pour recuperer les donnes de l'api

  const searchRecipes = async () => {

    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };


  useEffect(() => {
    searchRecipes()
    
  }, []);

  //function to handle the submission of the form

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h1>Free Meal Recipe App</h1>
      <SearchBar
        handleSubmit={handleSubmit}
        setQuery={setQuery}
        isLoading={isLoading}
        query={query}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default App;
