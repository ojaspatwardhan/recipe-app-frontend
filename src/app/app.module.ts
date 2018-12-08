import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services imports.
import { SpoonacularServiceClient } from './services/spoonacular.service.client';
import { UserServiceClient } from './services/user.service.client';
import { CookieService } from 'ngx-cookie-service';

//Angular Material imports.
import {
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatDialogModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ProfilePageComponent,
    RecipeCategoryComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    CreateUserComponent,
    EditUserComponent,
    CreateRecipeComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    SpoonacularServiceClient,
    UserServiceClient,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
