import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeServiceClient } from '../services/recipe.service.client';

@Component({
  selector: 'app-delete-recipe-dialog',
  templateUrl: './delete-recipe-dialog.component.html',
  styleUrls: ['./delete-recipe-dialog.component.css']
})
export class DeleteRecipeDialogComponent implements OnInit {
  recipes: any[] = new Array();
  userId: any;
  recipeIds: any[] = new Array();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeleteRecipeDialogComponent>, 
  private recipeService: RecipeServiceClient) {
    this.userId = this.data.userId;
    this.recipes = this.data.recipes;
    this.recipeIds = this.data.recipeIds;
  }

  ngOnInit() {
  }

  delete(recipe: Recipe) {
    this.dialogRef.close(recipe);
  }
}
