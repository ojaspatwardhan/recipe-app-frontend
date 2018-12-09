import { Component, OnInit } from '@angular/core';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { CookingSchool } from '../models/cooking-school.model.client';
import { SpoonacularServiceClient } from '../services/spoonacular.service.client';

@Component({
  selector: 'app-view-cooking-school-details',
  templateUrl: './view-cooking-school-details.component.html',
  styleUrls: ['./view-cooking-school-details.component.css']
})
export class ViewCookingSchoolDetailsComponent implements OnInit {

  cookingSchoolId: any;
  users: User[] = new Array();
  finalUsersArray: any[] = new Array();
  cookingSchool: any;
  recipes: any;
  isLoaded: boolean;

  constructor(private userService: UserServiceClient, private cookingSchoolService: CookingSchoolServiceClient, 
    private router: Router, private route: ActivatedRoute, private recipeService: SpoonacularServiceClient) { 
      this.isLoaded = false;
    }

  ngOnInit() {
    this.cookingSchoolId = this.route.snapshot.paramMap.get("id");
    this.cookingSchoolService.findCookingSchoolById(this.cookingSchoolId).then((cookingSchool) => {
      this.cookingSchool = cookingSchool;
      this.cookingSchool.enrolledUser.forEach((element) => {
        this.userService.findUserById(element).then((user) => {
          this.finalUsersArray.push(user);
        });
      });
      this.cookingSchool = cookingSchool;
    });

    this.recipeService.getNumberOfRecipe(5).then((result) => {
      this.recipes = result.recipes;
      this.isLoaded = true;
  });
}

  onUnEnroll(userId) {
    this.cookingSchool.enrolledUser = this.cookingSchool.enrolledUser.splice(this.cookingSchool.enrolledUser.indexOf(userId), 1);
    this.cookingSchoolService.unEnrollUserInCookingSchool(this.cookingSchool, userId).
    then((response) => {
      console.log(response);
      this.userService.unEnrollUserFromCookingSchool(this.cookingSchool._id, userId).then((res) => {
        this.cookingSchoolService.findCookingSchoolById(this.cookingSchoolId).then((cookingSchool) => {
          this.users = cookingSchool.enrolledUsers;
          this.cookingSchool = cookingSchool;
        });
      });
    });
  }
}
