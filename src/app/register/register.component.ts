import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String = "";
  password: String = "";

  constructor(private userService: UserServiceClient, private router: Router, public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService.registerUser(username, password).then(response => {
      if (response.token) {
        this.dialogRef.close();
        this.userService.setUsername(response.username);
        this.router.navigate(['profile']);
      }
    });
  }

  closeRegisterDialog(): void {
    this.dialogRef.close();
  }

}
