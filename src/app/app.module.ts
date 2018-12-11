import { AdvertisementServiceClient } from './services/advertisement.service.client';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services imports.
import { SpoonacularServiceClient } from './services/spoonacular.service.client';
import { UserServiceClient } from './services/user.service.client';
import {CookingSchoolServiceClient} from './services/cooking-school.service.client';
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
  MatDialogModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule
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
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SanitizeHtmlPipePipe } from './sanitize-html-pipe.pipe';
import { MultipleRecipeDetailComponent } from './multiple-recipe-detail/multiple-recipe-detail.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeServiceClient } from './services/recipe.service.client';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewCreatedRecipesComponent } from './view-created-recipes/view-created-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CreateRecipeAdminComponent } from './create-recipe-admin/create-recipe-admin.component';
import { EditRecipeAdminComponent } from './edit-recipe-admin/edit-recipe-admin.component';
import { ViewEnrollmentsComponent } from './view-enrollments/view-enrollments.component';
import { CookingSchoolComponent } from './cooking-school/cooking-school.component';
import { CreateCoookingSchoolComponent } from './create-coooking-school/create-coooking-school.component';
import { ViewCookingSchoolDetailsComponent } from './view-cooking-school-details/view-cooking-school-details.component';
import { EnrolledSchoolsComponent } from './enrolled-schools/enrolled-schools.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { UserCreatedRecipeComponent } from './user-created-recipe/user-created-recipe.component';

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
    RecipeDetailComponent,
    SanitizeHtmlPipePipe,
    MultipleRecipeDetailComponent,
    AdminPageComponent,
    CreateRecipeComponent,
    CreateUserComponent,
    EditUserComponent,
    ViewCreatedRecipesComponent,
    EditRecipeComponent,
    CreateRecipeAdminComponent,
    EditRecipeAdminComponent,
    ViewEnrollmentsComponent,
    CookingSchoolComponent,
    CreateCoookingSchoolComponent,
    ViewCookingSchoolDetailsComponent,
    EnrolledSchoolsComponent,
    AdBannerComponent,
    AboutUsComponent,
    ContactUsComponent,
    CreateAdComponent,
    UserCreatedRecipeComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    CreateRecipeComponent,
    EditRecipeAdminComponent,
    EnrolledSchoolsComponent,
    CreateAdComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [
    SpoonacularServiceClient,
    UserServiceClient,
    CookieService,
    RecipeServiceClient,
    CookingSchoolServiceClient,
    AdvertisementServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
