import { Recipe } from "../models/recipe.model.client";

export class CookingSchoolServiceClient {

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

    createCookingSchool(cookingSchool) {
      return fetch("http://localhost:4000/api/cooking-school", {
        method: "POST",
        body: JSON.stringify(cookingSchool),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json()).catch(res => {
        console.log(res);
      });
    }

    findAllCookingSchool(){
        return fetch("http://localhost:4000/api/cooking-school/").then((response) => response.json());
    }

    findCookingSchoolByChef(id){
        return fetch("http://localhost:4000/api/cooking-school/" + id).then((response) => response.json());
    }

    findCookingSchoolById(id){
        return fetch("http://localhost:4000/api/cooking-school/school/" + id).then((response) => response.json());
    }

    updateCookingSchool(cookingSchool){
        return fetch("http://localhost:4000/api/cooking-school/"+cookingSchool._id,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(cookingSchool),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
    }

    deleteCookingSchool(id){
        return fetch("http://localhost:4000/api/cooking-school/" + id, {
            method: "DELETE"
        }).then(response => response.json());
    }

    enrollUserInCookingSchool(cookingSchool) {
      console.log("cooking school client" + " " + cookingSchool);
        return fetch("http://localhost:4000/api/cooking-school/user/" + cookingSchool._id, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(cookingSchool),
            headers: {
                "Content-Type": "application/json"
            }
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
