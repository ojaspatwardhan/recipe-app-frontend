import { Component, OnInit } from '@angular/core';
import { SpoonacularServiceClient } from './../services/spoonacular.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  nutriBody: any;
  retrievedRecipe: any;
  retrievedIngredients: any;
  loaded: boolean;

  constructor(private recipeService: SpoonacularServiceClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loaded = false;
    this.recipeService.getRecipeById(this.route.snapshot.paramMap.get('id')).then((retrievedRecipe) => {
      this.retrievedRecipe = retrievedRecipe;
      this.retrievedIngredients = retrievedRecipe.extendedIngredients;
      this.loaded = true; 
    });

    this.recipeService.getNutritionByRecipe(this.route.snapshot.paramMap.get('id')).then((body) => {
      this.nutriBody = body;
    });
  }

}
