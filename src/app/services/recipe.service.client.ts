import { Recipe } from "../models/recipe.model.client";

export class RecipeServiceClient {

  /*
  local url - http://localhost:4000/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */
    updateRecipe(recipe) {
      return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/" + recipe._id, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(recipe),
        headers: {
          "content-type": "application/json"
        }
      }).then((response) => response.json());
    }

    createRecipe(recipe) {
      return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/", {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json()).catch(res => {
        console.log(res);
      });
    }

    findUserRecipe(id){
      console.log("In recipe service: "+id);
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/" + id).then((response) => response.json());
    }

    findRecipeById(id){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/edit/" + id).then((response) => response.json());
    }

    editRecipe(recipe){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/"+recipe._id,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(recipe),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
    }

    deleteRecipe(id){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/" + id, {
            method: "DELETE"
        }).then(response => response.json());
    }

    findAllRecipes() {
      return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/recipe/recipes/all", {
        credentials: "include"
      }).then((response) => response.json());
    }
  }
