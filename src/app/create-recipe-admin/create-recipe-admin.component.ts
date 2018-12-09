import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model.client';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { UserServiceClient } from '../services/user.service.client';
declare var jquery:any;

@Component({
  selector: 'app-create-recipe-admin',
  templateUrl: './create-recipe-admin.component.html',
  styleUrls: ['./create-recipe-admin.component.css']
})
export class CreateRecipeAdminComponent implements OnInit {

  recipe: Recipe = new Recipe();

  recipes = [];

  constructor(private recipeService: RecipeServiceClient, private userService: UserServiceClient) { }

  ngOnInit() {
  }

  createRecipe(recipe: Recipe) {
    this.userService.findProfile(recipe.creator).then((user) => {
      console.log(user);
      if (user.message === "User does not exist") {
        window.alert("Please create the user first");
      } else {
        this.recipe.creator = user._id;
      }
    }).then(() => {
      this.recipeService.createRecipe(recipe).then((recipe) => {
        this.recipeService.findAllRecipes().then((recipes) => {
          this.recipes = recipes;
          window.location.reload();
        })
      });
    });
    // this.recipeService.createRecipe(recipe).then((recipe) => {
    //   console.log(recipe);
    // });
  }

}
