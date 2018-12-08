import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.findAllUsers().then((users) => {
      this.users = users;
    })
  }
}
