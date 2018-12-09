import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { Recipe } from '../models/recipe.model.client';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  extendedIngredients: any[];

  constructor(private cookieService: CookieService, private userService: UserServiceClient, 
    private router: Router, private recipeService: RecipeServiceClient,
  public dialogRef: MatDialogRef<CreateRecipeComponent>) { }

  ngOnInit() {
  }

  createRecipe(recipe: Recipe) {
    this.extendedIngredients = this.recipe.extendedIngredients.split(",");
    this.recipe.extendedIngredients = this.extendedIngredients;
    this.recipe.creator = this.cookieService.get("userId");
    console.log(this.recipe);
    this.recipeService.createRecipe(recipe).then((response) => {
      if (response) {
        this.dialogRef.close();
        console.log("In if of create recipe");
      }
    });
  }
}
