import { RecipeServiceClient } from './../services/recipe.service.client';
import { Component, OnInit } from '@angular/core';
import { SpoonacularServiceClient } from '../services/spoonacular.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-created-recipe',
  templateUrl: './user-created-recipe.component.html',
  styleUrls: ['./user-created-recipe.component.css']
})
export class UserCreatedRecipeComponent implements OnInit {
  nutriBody: any;
  retrievedRecipe: any;
  retrievedIngredients: any;
  retrievedRecipeInfo: any;
  loaded: boolean;

  constructor(private recipeService: RecipeServiceClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loaded = false;
    this.recipeService.findRecipeById(this.route.snapshot.paramMap.get('id')).then((retrievedRecipe) => {
      if(!retrievedRecipe.hasOwnProperty('message')){
        this.retrievedRecipe = retrievedRecipe;
        this.retrievedIngredients = this.retrievedRecipe.extendedIngredients;
        console.log(this.retrievedIngredients);
        this.loaded = true;
      }
    });
  }
}
