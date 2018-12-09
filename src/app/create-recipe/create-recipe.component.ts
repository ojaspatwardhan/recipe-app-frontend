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

  constructor(private cookieService: CookieService, private userService: UserServiceClient, private router: Router, 
    public dialogRef: MatDialogRef<CreateRecipeComponent>, private recipeService: RecipeServiceClient) { }

  ngOnInit() {
  }

  createRecipe(recipe: Recipe) {
    // this.cookieService.set("username", response.username);
    // console.log(recipe);
    this.extendedIngredients = this.recipe.extendedIngredients.split(",");
    this.recipe.extendedIngredients = this.extendedIngredients;
    this.recipe.creator = this.cookieService.get("userId");
    console.log(this.recipe);
    this.recipeService.createRecipe(recipe).then((response) => {
      if (response) {
        this.dialogRef.close();
        // this.userService.setUsername(response.username);
        // this.userService.setUserId(response.userId);
        // this.router.navigate(['profile']);
        console.log("In if of create recipe");
      }
    });
  }

  closeRegisterDialog(): void {
    this.dialogRef.close();
  }

}
