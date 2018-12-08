import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpoonacularServiceClient } from '../services/spoonacular.service.client';

@Component({
  selector: 'app-multiple-recipe-detail',
  templateUrl: './multiple-recipe-detail.component.html',
  styleUrls: ['./multiple-recipe-detail.component.css']
})
export class MultipleRecipeDetailComponent implements OnInit {

  enteredRecipeName: any;
  retrievedRecipes: any;

  constructor(private route: ActivatedRoute, private recipeService: SpoonacularServiceClient) {
   }

  ngOnInit() {
    this.enteredRecipeName = this.route.snapshot.paramMap.get('name');
    this.recipeService.getRecipesByName(this.enteredRecipeName).then((result) => {
      this.retrievedRecipes = result.results;
      this.retrievedRecipes.forEach(element => {
        element.image = "https://spoonacular.com/recipeImages/" + element.image;
      });
    });
  }

}
