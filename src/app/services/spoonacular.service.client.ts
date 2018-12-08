export class SpoonacularServiceClient {
  getRecipes(){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=vegetarian%2Cdessert", {
      headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
    }).then((response) => response.json());
  }

  getNutritionByRecipe(id) {
      return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/nutritionWidget?defaultCss=true", {
        headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
      }).then((response) => response.text());
    }
    
  getRecipeById(id){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/information", {
      headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
    }).then((response) => response.json());
  }

  getRecipeInfo(id){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/summary", {
      headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
    }).then((response) => response.json());
  }

  getRecipesByName(name){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query="+name, {
      headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
    }).then((response) => response.json());
  }
}

/*
https://api.edamam.com/search?q=mushroom&app_id=b40b0dd8&app_key=30268dc8322c7f4a05a0dceca93a34ef&from=0&to=3&calories=591-722&health=alcohol-free
*/
