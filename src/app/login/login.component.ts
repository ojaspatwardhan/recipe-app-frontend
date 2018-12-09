import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserServiceClient } from '../services/user.service.client';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private cookieService: CookieService, private userService: UserServiceClient, private router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService.loginUser(username, password).then((user) => {
      this.cookieService.set("username", user.username);
      this.cookieService.set("userId", user.userId);
      this.dialogRef.close();
      this.router.navigate(['profile']);
    });
  }

  closeLoginDialog(): void {
    this.dialogRef.close();
  }

}
