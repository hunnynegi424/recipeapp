import React, {useState, useEffect} from 'react';
import Recipes from './components/Recipes/Recipes';
import Blocker from './components/Blocker/Blocker';
import "./App.css";

function App() {

  const APP_ID = "13d8f3f1";
  const APP_KEY = "35e606847f40d098d1f58c1f7b0a655a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  const [blocker, setBlocker] = useState(false);

  const exampleUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(()=>{
    getRecipe();
  }, [query])

  const getRecipe = async () => {
    setBlocker(prevBlocker => !prevBlocker);
    const data = await fetch(exampleUrl)
      .then(res => res.json());
      setRecipes(data.hits);
      setBlocker(prevBlocker => !prevBlocker);
      setSearch("");
    console.log('data', data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      {blocker && <Blocker/>}
      <span className="App-header" >Recipes</span>
      <span className="inputForm">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" placeholder="Search for recipes" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      </span>
      <span className="recipeForm">
      {recipes.map(recipe => (
        <Recipes key={recipe.recipe.uri} recipe={recipe}/>
      ))}
      </span>
    </div>
  )
}

export default App;
