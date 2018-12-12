import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CookingSchoolServiceClient } from '../services/cooking-school.service.client';
import { CookingSchool } from '../models/cooking-school.model.client';

@Component({
  selector: 'app-edit-cooking-school-dialog',
  templateUrl: './edit-cooking-school-dialog.component.html',
  styleUrls: ['./edit-cooking-school-dialog.component.css']
})
export class EditCookingSchoolDialogComponent implements OnInit {

  cookingSchool: CookingSchool = new CookingSchool();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cookingSchoolService: CookingSchoolServiceClient, public dialogRef: MatDialogRef<EditCookingSchoolDialogComponent>) {
    this.cookingSchool = this.data.cookingSchool;
  }

  ngOnInit() {
  }

  onUpdateCookingSchool(cookingSchool: CookingSchool) {
    this.cookingSchoolService.updateCookingSchool(cookingSchool).then((cookingSchool) => {
      window.alert("Successfully updated");
      this.dialogRef.close();
      window.location.reload();
    });
  }

}
