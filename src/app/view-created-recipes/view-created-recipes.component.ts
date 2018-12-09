import { Recipe } from './../models/recipe.model.client';
import { CookieService } from 'ngx-cookie-service';
import { RecipeServiceClient } from './../services/recipe.service.client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-created-recipes',
  templateUrl: './view-created-recipes.component.html',
  styleUrls: ['./view-created-recipes.component.css']
})
export class ViewCreatedRecipesComponent implements OnInit {

  enteredRecipeName: any;
  retrievedRecipes: any;
  recipeId: any;

  constructor(private recipeServiceClient: RecipeServiceClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    console.log(this.cookieService.get("userId"));
    this.recipeServiceClient.findUserRecipe(this.cookieService.get("userId")).then((result) => {
      this.retrievedRecipes = result;
    });
  }

  onEditRecipe(recipe: any) {
    // console.log(recipe);
    this.recipeId = recipe._id;
    // console.log(this.recipeId);
    this.router.navigate(['/edit/recipe/',this.recipeId]);
  }

  onDeleteRecipe(recipe: any){
    this.recipeId = recipe._id;
    this.recipeServiceClient.deleteRecipe(this.recipeId).then((result) => {
      this.recipeServiceClient.findUserRecipe(this.cookieService.get("userId")).then((result) => {
        this.retrievedRecipes = result;
      });
    });
  }

}
