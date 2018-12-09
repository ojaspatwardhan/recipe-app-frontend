import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String = "";
  password: String = "";

  constructor(private cookieService: CookieService, private userService: UserServiceClient, private router: Router, public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  register(username, password) {
    this.userService.registerUser(username, password).then((response) => {
      console.log(response);
      this.cookieService.set("username", response.username);
      this.cookieService.set("userId", response.userId);
      this.cookieService.set("userType", response.role);
      if (response.token) {
        this.dialogRef.close();
        this.userService.setUsername(response.username);
        this.userService.setUserId(response.userId);
        this.router.navigate(['profile']);
      }
    });
  }

  closeRegisterDialog(): void {
    this.dialogRef.close();
  }

}
