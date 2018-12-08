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
}

