import React, { useState } from "react";
import "./reciepeScreen.css";
import Search from "./components/Search";
import Recipes from "./components/Reciepes";
import axios from "axios";

function ReciepeScreen() {
  const searchRecipes = async (keyword) => {
    if (keyword) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${keyword}&app_id=2dc038ad&app_key=8cfc277b86085b016d10d9b90c3af9ee&from=0&to=12`,
          {
            headers: {},
          }
        );
        if (response.status === 200) {
          setLoading(false);
          if (response.data.hits.length) {
            setRecipes(response.data.hits);
          } else {
            setRecipes(null);
          }
        }
      } catch (err) {
        setRecipes(null);
        console.log(err);
      }
    }
  };

  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="reciepe-pageContent">
        <Search searchRecipes={searchRecipes} />
        <Recipes loading={loading} data={recipes} />
      </div>
    </div>
  );
}

export default ReciepeScreen;
