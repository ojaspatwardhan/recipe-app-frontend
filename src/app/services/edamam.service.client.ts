export class EdamamServiceClient {
  searchRecipes(recipeName) {
    return fetch("https://api.edamam.com/search?q=" + recipeName + "&app_id=b40b0dd8&app_key=30268dc8322c7f4a05a0dceca93a34ef", {
      method: "GET"
  }).then((response) => response.json());
}

  getRecipes(){
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=vegetarian%2Cdessert", {
      headers: {"X-RapidAPI-Key": "d40a5fb0e6msh1957b3cdc0d3bbdp1785cfjsn2ce4b2e7c8bb"}
    }).then((response) => response.json());
  }
}

/*
https://api.edamam.com/search?q=mushroom&app_id=b40b0dd8&app_key=30268dc8322c7f4a05a0dceca93a34ef&from=0&to=3&calories=591-722&health=alcohol-free
*/