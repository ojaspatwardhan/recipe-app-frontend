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
    console.log(this.data.recipes);
    this.recipeIds = this.data.recipeIds;
    console.log(this.data.recipeIds);
  }

  ngOnInit() {
  }

  delete(recipe: any) {
    console.log("In delete recipe dialog box "+ recipe.title);
    if(this.recipeIds.indexOf(recipe._id) !== -1){
        this.recipes.splice(this.recipes.indexOf(recipe),1);
        this.recipeIds.splice(this.recipeIds.indexOf(recipe._id),1);
    }
    this.dialogRef.close({
      recipes: this.recipes,
      recipeIds: this.recipeIds,
      id: recipe._id
    });
  }
}
