import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model.client';
import { RecipeServiceClient } from '../services/recipe.service.client';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { EditRecipeAdminComponent } from '../edit-recipe-admin/edit-recipe-admin.component';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  recipes: Recipe[];

  constructor(public dialog: MatDialog, private recipeService: RecipeServiceClient) { }

  ngOnInit() {
    this.recipeService.findAllRecipes().then((recipes) => {
      this.recipes = recipes;
      console.log(this.recipes);
    });
  }

  deleteRecipe(recipeId) {
    this.recipeService.deleteRecipe(recipeId).then((response) => {
      this.recipeService.findAllRecipes().then((recipes) => {
        this.recipes = recipes;
      });
    });
  }

  openEditRecipeDialog(id): void {
    const dialogRef = this.dialog.open(EditRecipeAdminComponent, {
      width: '800px',
      height: '600px',
      data: {
        id: id
      }
    });
  }
}
