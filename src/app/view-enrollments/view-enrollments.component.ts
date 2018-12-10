import { Component, OnInit } from '@angular/core';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { CookingSchool } from '../models/cooking-school.model.client';
import { User } from '../models/user.model.client';

@Component({
  selector: 'app-view-enrollments',
  templateUrl: './view-enrollments.component.html',
  styleUrls: ['./view-enrollments.component.css']
})
export class ViewEnrollmentsComponent implements OnInit {

  cookingSchool: CookingSchool = new CookingSchool();
  cookingSchools: CookingSchool[];
  user: User = new User();
  userId: any;
  cookingSchoolId: any;

  constructor(private userService: UserServiceClient, private cookingSchoolService: CookingSchoolServiceClient) { }

  ngOnInit() {
    this.cookingSchoolService.findAllCookingSchool().then((schools) => {
      this.cookingSchools = schools;
    });
  }

  enrollUser(schoolName, username) {
    this.userService.findProfile(username).then((user) => {
      if (!user) {
        window.alert("user does not exist");
      } else {
        this.userId = user._id;
        this.cookingSchoolService.findSchoolByName(schoolName).then((school) => {
          console.log(school);
          this.cookingSchoolId = school._id;
          this.userService.enrollUserInCookingSchool(this.cookingSchoolId,this.userId).then((response) => {
            console.log(response);
            this.cookingSchoolService.enrollUserThroughAdminInCookingSchool(this.cookingSchoolId,this.userId).then((res) => {
              console.log(res);
            });
          });
        });
      }
    });
  }

    unenrollUser(schoolName, username) {
      this.userService.findProfile(username).then((user) => {
        if (!user) {
          window.alert("user does not exist");
        } else {
          this.userId = user._id;
          this.cookingSchoolService.findSchoolByName(schoolName).then((school) => {
            console.log(school);
            this.cookingSchoolId = school._id;
            this.userService.unEnrollUserFromCookingSchool(this.cookingSchoolId,this.userId).then((response) => {
              console.log(response);
              this.cookingSchoolService.unEnrollUserInCookingSchool(this.cookingSchoolId,this.userId).then((res) => {
                console.log(res);
              });
            });
          });
        }
      });
  }

}
