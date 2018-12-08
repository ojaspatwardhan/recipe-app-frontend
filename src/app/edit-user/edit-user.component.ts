import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  cookieValue = "";

  //Users Array
  users = [];

  //User object
  user: User = new User();

  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get("username");
    this.userService.findAllUsers()
    .then((users) => {
      this.users = users;
    });
  }

  //Delete User
  deleteUser(id) {
    this.userService.removeUser(id).then((response) => {
      this.userService.findAllUsers()
      .then((users) => {
        this.users = users;
        console.log(this.users);
      });
    });
  }

  //Get User
  getUser(id) {
  this.userService.findUserById(id).then((user) => {
    this.user = user;
  });
}

  //Update User
  updateUser(user: User) {
  console.log(user);
  this.userService.updateUser(user).then((response) => {
    $("#userModal").modal("toggle");
    this.userService.findAllUsers()
    .then((users) => {
      this.users = users;
    });
  });
  }
}
