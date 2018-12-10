import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import { CookieService } from 'ngx-cookie-service';
import { UserServiceClient } from '../services/user.service.client';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //Cookie value
  cookieValue: string = "";
  userType: string = "";

  opened: boolean;
  ingredientControl;
  options: string[] = ["Option 1", "Option 2", "Option 3"];
  enteredRecipeName: String;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog, private router: Router, private cookieService: CookieService, private userService: UserServiceClient) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get("username");
    this.userType = this.cookieService.get("userType");
    console.log(this.userType + " " + "user type");
    console.log(this.cookieValue);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  logout() {
    this.cookieService.delete("username");
    this.cookieService.delete("userType");
    this.userService.logout().then(() => {
      this.router.navigate(['home']);
    });
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
      width: '700px',
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
