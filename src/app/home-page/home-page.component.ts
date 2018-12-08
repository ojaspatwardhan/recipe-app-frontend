import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { EdamamServiceClient } from '../services/edamam.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  recipes: any;
  constructor(private userService: UserServiceClient, private router: Router, private edamamService: EdamamServiceClient) { }

  ngOnInit() {
    // this.edamamService.searchRecipes("chicken").then((recipes) => {
    //   this.recipes = recipes.hits;
    // });

    this.edamamService.getRecipes().then((newRecipes) => {
      this.recipes = newRecipes.recipes;
    });
  }
}
