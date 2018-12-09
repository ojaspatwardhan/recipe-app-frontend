import { Component, OnInit } from '@angular/core';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { CookingSchool } from '../models/cooking-school.model.client';

@Component({
  selector: 'app-view-enrollments',
  templateUrl: './view-enrollments.component.html',
  styleUrls: ['./view-enrollments.component.css']
})
export class ViewEnrollmentsComponent implements OnInit {

  cookingSchool: CookingSchool = new CookingSchool;
  cookingSchools: CookingSchool[];

  constructor(private cookingSchoolService: CookingSchoolServiceClient) { }

  ngOnInit() {
    this.cookingSchoolService.findAllCookingSchool().then((schools) => {
      this.cookingSchools = schools;
      console.log(this.cookingSchools);
    });
  }

}
