import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { SpoonacularServiceClient } from '../services/spoonacular.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  recipes: any;
  constructor(private userService: UserServiceClient, private router: Router, private recipeService: SpoonacularServiceClient) { }

  ngOnInit() {
    this.recipeService.getRecipes().then((newRecipes) => {
      this.recipes = newRecipes.recipes;
    });
  }
}
