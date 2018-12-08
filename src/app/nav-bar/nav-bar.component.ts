import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  opened: boolean;
  ingredientControl;
  options: string[] = ["Option 1", "Option 2", "Option 3"];
  enteredRecipeName: String;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '350px'
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px',
      height: '350px'
    });
  }

  openCreateRecipeDialog(): void {
    const dialogRef = this.dialog.open(CreateRecipeComponent, {
      width: '650px',
      height: '500px'
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  callDisplayRecipe(): void{
    if(this.enteredRecipeName !== ""){
      this.router.navigate(['/recipes', this.enteredRecipeName]);
    }
  }

}
