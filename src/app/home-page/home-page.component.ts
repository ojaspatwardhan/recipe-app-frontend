import { Component, OnInit } from '@angular/core';
import { BigOvenServiceClient } from '../services/big-oven.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private recipeService: BigOvenServiceClient, private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.registerUser("ojas", "ojas");
  }

}
