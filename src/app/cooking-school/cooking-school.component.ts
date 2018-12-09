import { CookingSchoolServiceClient } from './../services/cooking-school.service.client';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

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

  constructor(private cookieService: CookieService, private cookingSchoolService: CookingSchoolServiceClient, private router: Router
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

  onEnroll(cookingSchool: any){
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

  onUnEnroll(cookingSchool: any, username: any){
    console.log(cookingSchool);
    if(!cookingSchool.enrolledUser.includes(this.cookieService.get("userId"))){
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

}
