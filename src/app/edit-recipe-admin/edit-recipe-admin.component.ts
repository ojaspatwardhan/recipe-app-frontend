import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { Recipe } from '../models/recipe.model.client';

@Component({
  selector: 'app-edit-recipe-admin',
  templateUrl: './edit-recipe-admin.component.html',
  styleUrls: ['./edit-recipe-admin.component.css']
})
export class EditRecipeAdminComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<EditRecipeAdminComponent>, private recipeService: RecipeServiceClient) {
    this.recipeService.findRecipeById(this.data.id).then((recipe) => {
      this.recipe = recipe;
    });
  }

  ngOnInit() {
  }

  closeEditRecipeDialog(): void {
    this.dialogRef.close();
  }

  updateRecipe(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe).then((recipe) => {
      location.reload();
    });
  }

}
