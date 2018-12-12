import { CookingSchoolServiceClient } from './../services/cooking-school.service.client';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import { CookingSchool } from '../models/cooking-school.model.client';
import { EditCookingSchoolDialogComponent } from '../edit-cooking-school-dialog/edit-cooking-school-dialog.component';

@Component({
  selector: 'app-cooking-school',
  templateUrl: './cooking-school.component.html',
  styleUrls: ['./cooking-school.component.css']
})
export class CookingSchoolComponent implements OnInit {

  isLoaded: boolean;
  chefLoaded: boolean;
  userType: String;
  chefCookingSchools: any;
  cookingSchools: any;
  totalNumberOfSchools: Number;
  totalEnrollments: Number;
  chefName: any;
  userNames: String[] = new Array();

  constructor(public dialog: MatDialog, private cookieService: CookieService, private cookingSchoolService: CookingSchoolServiceClient, private router: Router
  , private userServiceClient: UserServiceClient) {
    this.isLoaded = false;
    this.chefLoaded = false;
    this.totalEnrollments = 0;
  }

  ngOnInit() {
    console.log(this.cookieService.get("userType"));
    this.userType = this.cookieService.get("userType")
    if(this.userType === "chef"){
      this.cookingSchoolService.findCookingSchoolByChef(this.cookieService.get("userId")).then((chefCookingSchools) => {
        this.chefCookingSchools = chefCookingSchools;
        this.chefCookingSchools.forEach(element => {
          this.totalEnrollments += element.enrolledUser.length;
          element.enrolledUser.forEach(ele => {
            console.log(ele);
            this.userServiceClient.findUserById(ele).then((res) => {
              console.log(res);
              this.userNames.push(res.username);
            });
          });
        });
        this.totalNumberOfSchools = this.chefCookingSchools.length;
        this.chefName = this.cookieService.get("username");
        this.chefLoaded = true;
      });
    }
    this.cookingSchoolService.findAllCookingSchool().then((cookingSchools) => {
      if(cookingSchools.length != 0){
      this.cookingSchools = cookingSchools;
      this.isLoaded = true;
      }
    });
  }

  onEnroll(cookingSchool: any) {
    if(!cookingSchool.enrolledUser.includes(this.cookieService.get("userId"))) {
    cookingSchool.enrolledUser.push(this.cookieService.get("userId"));
    this.cookingSchoolService.enrollUserInCookingSchool(cookingSchool).then((response) => {
      console.log(response);
      this.userServiceClient.enrollUserInCookingSchool(cookingSchool._id, this.cookieService.get("userId")).then((res) => {
        this.cookingSchoolService.findAllCookingSchool().then((cookingSchools) => {
          if(cookingSchools.length != 0){
          this.cookingSchools = cookingSchools;
          this.isLoaded = true;
          }
        });
      });
    });
    }
  }

onViewDetails(cookingSchool){
  console.log("Inside here");
  console.log("In view details: " + cookingSchool._id);
  this.router.navigate(['/school/details/', cookingSchool._id]);
}

  onCreateCookingSchool(){
    this.router.navigate(['/cooking-school/create/', this.cookieService.get("userId")]);
  }

  openEditCookingSchoolDialog(cookingSchool: CookingSchool): void {
    const dialogRef = this.dialog.open(EditCookingSchoolDialogComponent, {
      width: '500px',
      height: '350px',
      data: {
        cookingSchool: cookingSchool
      }
    });
  }
}
