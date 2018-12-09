import { RecipeServiceClient } from './../services/recipe.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeId: any;
  recipe: any;
  isLoaded: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceClient, private router: Router) {
    this.isLoaded = false;
   }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get("id");
    this.recipeService.findRecipeById(this.recipeId).then((recipe) => {
      this.recipe = recipe;
      this.isLoaded = true;
    });
  }

  editRecipe(recipe){
    this.recipeService.editRecipe(recipe).then((result) => {
      console.log(result);
      this.router.navigate(['view-recipe']);
    });
  }

}
