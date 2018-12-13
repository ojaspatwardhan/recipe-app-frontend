import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { Recipe } from '../models/recipe.model.client';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css']
})
export class AddRecipeDialogComponent implements OnInit {

  recipes: Recipe[] = new Array();
  userId: any;
  recipe: Recipe = new Recipe();

  message: string = "Hello from the other child";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddRecipeDialogComponent>, private recipeService: RecipeServiceClient) {
    this.userId = this.data.userId;
  }

  ngOnInit() {
    this.recipeService.findUserRecipe(this.userId).then((recipes) => {
      this.recipes = recipes;
    });
  }

  save(recipe: Recipe) {
    this.dialogRef.close(recipe);
  }

}
