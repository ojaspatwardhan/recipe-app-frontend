import { Component, OnInit } from '@angular/core';
import { BigOvenServiceClient } from '../services/big-oven.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private recipeService: BigOvenServiceClient) { }

  ngOnInit() {
    this.recipeService.searchRecipes("pasta").then((response) => {
      console.log(response);
    });
  }

}
