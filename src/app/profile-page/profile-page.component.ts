import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User = new User();
  username = "";

  constructor(private cookieService: CookieService, private userService: UserServiceClient, private router: Router) { }

  ngOnInit() {
    this.userService.findProfile(this.cookieService.get("username")).then((response) => {
      console.log(this.cookieService.get("username"));
      console.log(response + " " + "response");
      this.user = response;
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).then((user) => {
      console.log(user);
      this.cookieService.set("username", user.username);
      console.log(this.cookieService.get("username"));
      location.reload();
    });
  }

  viewRecipes(){
    this.router.navigate(['/view-recipe']);
  }

}
