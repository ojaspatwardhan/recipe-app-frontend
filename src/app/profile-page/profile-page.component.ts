import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserServiceClient, private router: Router) { }

  ngOnInit() {
    this.userService.findProfile(this.userService.getUsername()).then((response) => {
      this.user = new User();
      this.user._id = response._id;
      this.user.username = response.username;
      console.log(this.user);
    });
  }

}
