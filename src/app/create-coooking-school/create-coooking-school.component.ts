import { CookingSchool } from './../models/cooking-school.model.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-create-coooking-school',
  templateUrl: './create-coooking-school.component.html',
  styleUrls: ['./create-coooking-school.component.css']
})
export class CreateCoookingSchoolComponent implements OnInit {

  chefId: any;
  cookingSchool: CookingSchool = new CookingSchool();

  constructor(private route: ActivatedRoute, private cookingSchoolClient: CookingSchoolServiceClient, private router: Router,
  private cookieService: CookieService) { }

  ngOnInit() {
    this.chefId = this.route.snapshot.paramMap.get("id");
  }

  onCreateCookingSchool(cookingSchool){
    cookingSchool.chefId = this.cookieService.get("userId");
    this.cookingSchoolClient.createCookingSchool(cookingSchool).then((response) => {
      this.router.navigate(['/cooking-school']);
    });
  }

}
