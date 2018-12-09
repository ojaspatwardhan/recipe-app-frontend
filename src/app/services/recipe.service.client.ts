import { Recipe } from "../models/recipe.model.client";

/*
  local url - http://localhost:4000/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */

export class RecipeServiceClient {

  /*
  local url - http://localhost:4000/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */

    //Getter and Setters
    // getUserId() {
    //   return this.userId;
    // }

    // setUserId(id) {
    //   this.userId = id;
    // }

    // getUsername() {
    //   return this.username;
    // }

    // setUsername(username) {
    //   this.username = username;
    // }

    // //Recipe methods

    // removeUser(id) {
    //   console.log(id);
    //   return fetch("http://localhost:4000/api/user/" + id, {
    //     method: "DELETE"
    //   })
    //   .then(response => response.text());
    // }

    // createUserByAdmin(username, password, firstName, lastName, email, address, role) {
    //   const user = {
    //     username: username,
    //     password: password,
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     address_1: address,
    //     role: role
    //   };
    //   return fetch("http://localhost:4000/api/user/admin", {
    //     body: JSON.stringify(user),
    //     credentials: "include",
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json"
    //     }
    //   }).then(response => response.json());
    // }

    // findUserById(id) {
    //   return fetch("http://localhost:4000/api/user/id/" + id).then((response) => response.json());
    // }

    // findAllUsers() {
    //   // console.log("inside findAllUsers");
    //   return fetch("http://localhost:4000/api/user/users", {
    //     credentials: "include"
    //   }).then((response) => response.json());
    // }

    // updateUser(user) {
    //   console.log("inside updateUser");
    //   return fetch("http://localhost:4000/api/user/" + user._id, {
    //     method: "PUT",
    //     credentials: "include",
    //     body: JSON.stringify(user),
    //     headers: {
    //       "content-type": "application/json"
    //     }
    //   }).then((response) => response.json());
    // }

    createRecipe(recipe) {
      return fetch("http://localhost:4000/api/recipe/", {
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
        return fetch("http://localhost:4000/api/recipe/" + id).then((response) => response.json());
    }

    findRecipeById(id){
        return fetch("http://localhost:4000/api/recipe/edit/" + id).then((response) => response.json());
    }

    editRecipe(recipe){
        return fetch("http://localhost:4000/api/recipe/"+recipe._id,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(recipe),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
    }

    deleteRecipe(id){
        console.log(id);
        return fetch("http://localhost:4000/api/recipe/" + id, {
            method: "DELETE"
        }).then(response => response.json());
    }
  
    // findProfile(username) {
    //   return fetch("http://localhost:4000/api/user/profile/" + username, {
    //     method: "GET"
    //   }).then((response) => response.json());
    // }

    // loginUser(username, password) {
    //   const user = {
    //     username: username,
    //     password: password
    //   };
    //   return fetch("http://localhost:4000/api/user/login", {
    //     method: "POST",
    //     body: JSON.stringify(user),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then((response) => response.json()).catch((res) => {
    //     console.log(res);
    //   });
    // }
  }
