import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceClient, private router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  login(username, password) {
    
  }

  closeLoginDialog(): void {
    this.dialogRef.close();
  }

}
