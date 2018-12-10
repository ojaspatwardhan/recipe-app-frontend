import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-enrolled-schools',
  templateUrl: './enrolled-schools.component.html',
  styleUrls: ['./enrolled-schools.component.css']
})
export class EnrolledSchoolsComponent implements OnInit {

  enrolledSchools: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EnrolledSchoolsComponent>) {
    this.enrolledSchools = this.data.school;
  }

  ngOnInit() {
  }

  closeEnrolledSchoolsDialog(): void {
    this.dialogRef.close();
  }

}
