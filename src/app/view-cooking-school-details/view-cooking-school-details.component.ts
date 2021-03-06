import { RecipeServiceClient } from './../services/recipe.service.client';
import { Component, OnInit } from '@angular/core';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { CookingSchool } from '../models/cooking-school.model.client';
import { SpoonacularServiceClient } from '../services/spoonacular.service.client';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddRecipeDialogComponent } from '../add-recipe-dialog/add-recipe-dialog.component';
import { DeleteRecipeDialogComponent } from '../delete-recipe-dialog/delete-recipe-dialog.component';

@Component({
  selector: 'app-view-cooking-school-details',
  templateUrl: './view-cooking-school-details.component.html',
  styleUrls: ['./view-cooking-school-details.component.css']
})
export class ViewCookingSchoolDetailsComponent implements OnInit {

  cookingSchoolId: any;
  users: any[] = new Array();
  finalUsersArray: any[] = new Array();
  cookingSchool: any;
  recipes: any[] = new Array();
  isLoaded: boolean;
  recipeIds: any[] = new Array();
  message: string;

  constructor(public dialog: MatDialog, private userService: UserServiceClient, private cookingSchoolService: CookingSchoolServiceClient,
    private router: Router, private route: ActivatedRoute, private recipeService: SpoonacularServiceClient,
  private userRecipeService: RecipeServiceClient, private cookieService: CookieService)
  {
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

    // this.recipeService.getNumberOfRecipe(5).then((result) => {
    //   result.recipes.forEach(ele => {
    //     this.recipes.push(ele);
    //     this.recipeIds.push(ele.id);
    //   });
      // this.recipes = result.recipes;
      this.cookingSchoolService.getRecipeFromCookingSchool(this.cookingSchoolId).then((re) => {
        console.log(re);
        re.recipes.forEach(element => {
          this.userRecipeService.findRecipeById(element).then((r) => {
            console.log("In ngoninit of view cooking recipe detail" + r);
            this.recipes.push(r);
            this.recipeIds.push(element);
            this.isLoaded = true;
          });
        });
      });
      // if(this.recipes.length !== 0){
      //   this.isLoaded = true;
      // }
      // this.isLoaded = true;
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
          window.location.reload();
        });
      });
    });
  }

  onAddRecipe() {
    // console.log(this.cookieService.get("userId"));
    const dialogRef = this.dialog.open(AddRecipeDialogComponent, {
      width: '600px',
      height: '450px',
      data: {
        userId: this.cookieService.get("userId")
      }
    });

    dialogRef.afterClosed().subscribe((data) => {
      if(typeof data !== 'undefined'){
      if(this.recipeIds.indexOf(data._id) === -1) {
        this.recipes.push(data);
        this.recipeIds.push(data._id);
        this.isLoaded = true;
        console.log(this.recipes + " " + "Recipes");
        console.log(this.recipeIds + " " + "Recipe Id's");
        this.cookingSchoolService.addRecipeInCookingSchool(this.cookingSchoolId, data._id);
      }}
    });
    // this.userRecipeService.findUserRecipe(this.cookieService.get("userId")).then((response) => {
    //   response.forEach(element => {
    //     if(this.recipeIds.indexOf(element._id) === -1){
    //       this.recipes.push(element);
    //       this.recipeIds.push(element._id);
    //       this.cookingSchoolService.addRecipeInCookingSchool(this.cookingSchoolId,element._id);
    //     }
    //   });
    // });
  }

  onDeleteRecipe() {
  //   this.userRecipeService.findUserRecipe(this.cookieService.get("userId")).then((response) => {
  //     response.forEach(element => {
  //       if(this.recipeIds.indexOf(element._id) !== -1){
  //         this.recipes.splice(this.recipes.indexOf(element),1);
  //         this.recipeIds.splice(this.recipeIds.indexOf(element._id),1);
  //         this.cookingSchoolService.removeRecipeFromCookingSchool(this.cookingSchoolId,element._id);
  //         console.log(this.recipes);
  //       }
  //   });
  // });
  console.log(this.recipeIds);
  const dialogRef = this.dialog.open(DeleteRecipeDialogComponent, {
    width: '700px',
    height: '500px',
    data: {
      userId: this.cookieService.get("userId"),
      recipes: this.recipes,
      recipeIds: this.recipeIds
    }
  });

  dialogRef.afterClosed().subscribe(
    (data) => {
      if(typeof data !== 'undefined'){
        console.log("Recipes: " + data.recipes + " Ids " + data.recipeIds);
        this.recipes = data.recipes;
        this.recipeIds = data.recipeIds;
        console.log(data.id);
        if(this.recipes.length === 0){
          this.isLoaded = false;
        }
        this.cookingSchoolService.removeRecipeFromCookingSchool(this.cookingSchoolId,data.id);
      }
    }
  );
}
}
