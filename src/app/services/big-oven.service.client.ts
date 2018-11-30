export class BigOvenServiceClient {

  searchRecipes(recipeName) {
    return fetch("http://webknox.com/api/recipes/search?query=" + recipeName + "&apiKey=bfedegcbdgecxgxbglynmnbiiuprkxk", {
      method: "GET"
    }).then(response => response.json());
  }
}
