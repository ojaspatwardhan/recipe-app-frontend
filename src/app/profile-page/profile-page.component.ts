import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EnrolledSchoolsComponent } from '../enrolled-schools/enrolled-schools.component';
import { CreateAdComponent } from '../create-ad/create-ad.component';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User = new User();
  username = "";
  selected = this.user.state;
  userType: string = "";
  enrolledSchool: any;
  //Cooking school names array
  cookingSchools: any[] = new Array();

  constructor(public dialog: MatDialog, private cookieService: CookieService, private userService: UserServiceClient, private cookingSchoolService: CookingSchoolServiceClient, private router: Router) { }

  ngOnInit() {
    this.userType = this.cookieService.get("userType");
    this.userService.findProfile(this.cookieService.get("username")).then((response) => {
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

  openEnrolledSchoolsDialog(): void {
    this.userService.findProfile(this.user.username).then((user) => {
      this.enrolledSchool = user.enrolledSchool;
      this.enrolledSchool.forEach((element) => {
        this.cookingSchoolService.findCookingSchoolById(element).then((school) => {
          this.cookingSchools.push(school.name);
        });
      });
      const dialogRef = this.dialog.open(EnrolledSchoolsComponent, {
        width: '500px',
        height: '350px',
        data: {
          school: this.cookingSchools
        }
      });
    });
  }

  openCreateAdDialog(): void {
    const dialogRef = this.dialog.open(CreateAdComponent, {
      width: '500px',
      height: '350px'
    });
  }

}
