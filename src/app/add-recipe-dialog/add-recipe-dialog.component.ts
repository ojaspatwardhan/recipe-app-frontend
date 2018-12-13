import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css']
})
export class AddRecipeDialogComponent implements OnInit {

  message: string = "Hello from the other child";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddRecipeDialogComponent>) { }

  ngOnInit() {
  }

}
