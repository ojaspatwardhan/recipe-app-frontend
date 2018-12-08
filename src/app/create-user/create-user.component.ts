import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
declare var jquery:any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  //User object
  user: User = new User();

  //Users Array
  users = [];

  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.findAllUsers()
    .then((users) => {
      this.users = users;
    });
  }

  createUserByAdmin(user: User) {
    this.userService.createUserByAdmin(user.username, user.password, user.first_name, user.last_name, user.email, user.address_1, user.role)
    .then((user) => {
      console.log(user);
      this.userService.findAllUsers().then((users) => {
        this.users = users;
        window.location.reload();
      });
    });
  }

}
