import { Recipe } from "../models/recipe.model.client";

export class CookingSchoolServiceClient {

  /*
  local url - http://localhost:4000/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */
    findSchoolByName(name) {
      return fetch("http://localhost:4000/api/cooking-school/name/" + name).then((response) => response.json());
    }

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

    unEnrollUserInCookingSchool(cookingSchool, userId) {
      console.log("cooking school client" + " " + cookingSchool + "userId" + userId);
        return fetch("http://localhost:4000/api/cooking-school/school/unenroll", {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
              id: userId,
              schoolId: cookingSchool
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    enrollUserThroughAdminInCookingSchool(cookingSchoolId, userId) {
        console.log("Enroll user through admin cooking school client" + " " + cookingSchoolId);
          return fetch("http://localhost:4000/api/cooking-school/school/admin/enroll", {
              method: "PUT",
              credentials: "include",
              body: JSON.stringify({
                id: userId,
                schoolId: cookingSchoolId
              }),
              headers: {
                  "Content-Type": "application/json"
              }
          }).then(response => response.json());
      }

    addRecipeInCookingSchool(cookingSchoolId, recipeId){
        console.log("Added recipe in cooking school" + "Cooking School Id " + cookingSchoolId + "Recipe School Id " + recipeId);
        return fetch("http://localhost:4000/api/cooking-school/recipe/add", {
            method: "PUT",
              credentials: "include",
              body: JSON.stringify({
                id: cookingSchoolId,
                recipeId: recipeId
              }),
              headers: {
                  "Content-Type": "application/json"
              }
          }).then(response => response.json());
    }

    removeRecipeFromCookingSchool(cookingSchoolId, recipeId){
        console.log("Deleted recipe from cooking school" + "Cooking School Id " + cookingSchoolId + "Recipe School Id " + recipeId);
        return fetch("http://localhost:4000/api/cooking-school/recipe/remove", {
            method: "PUT",
              credentials: "include",
              body: JSON.stringify({
                id: cookingSchoolId,
                recipeId: recipeId
              }),
              headers: {
                  "Content-Type": "application/json"
              }
          }).then(response => response.json());
    }

    getRecipeFromCookingSchool(cookingSchoolId){
        return fetch("http://localhost:4000/api/cooking-school/recipe/" + cookingSchoolId).then((response) => response.json());
    }
  }
