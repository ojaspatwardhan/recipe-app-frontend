export class EdamamServiceClient {
  searchRecipes(recipeName) {
    return fetch("https://api.edamam.com/search?q=" + recipeName + "&app_id=b40b0dd8&app_key=30268dc8322c7f4a05a0dceca93a34ef", {
      method: "GET"
  }).then((response) => response.json());
}
}

/*
https://api.edamam.com/search?q=mushroom&app_id=b40b0dd8&app_key=30268dc8322c7f4a05a0dceca93a34ef&from=0&to=3&calories=591-722&health=alcohol-free
*/