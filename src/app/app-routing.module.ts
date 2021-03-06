import { AboutUsComponent } from './about-us/about-us.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MultipleRecipeDetailComponent } from './multiple-recipe-detail/multiple-recipe-detail.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewCreatedRecipesComponent } from './view-created-recipes/view-created-recipes.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewEnrollmentsComponent } from './view-enrollments/view-enrollments.component';
import { CookingSchoolComponent } from './cooking-school/cooking-school.component';
import { CreateCoookingSchoolComponent } from './create-coooking-school/create-coooking-school.component';
import { ViewCookingSchoolDetailsComponent } from './view-cooking-school-details/view-cooking-school-details.component';
import { UserCreatedRecipeComponent } from './user-created-recipe/user-created-recipe.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsAdminPanelComponent } from './contact-us-admin-panel/contact-us-admin-panel.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'profile', component: ProfilePageComponent, runGuardsAndResolvers: 'always'},
  {path: 'profiles', component: ProfilePageComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path: 'user-recipe/:id', component: UserCreatedRecipeComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'recipes/:name', component: MultipleRecipeDetailComponent},
  {path: 'view-recipe', component: ViewCreatedRecipesComponent},
  {path: 'view-enrollments', component: ViewEnrollmentsComponent},
  {path: 'edit/recipe/:id', component: EditRecipeComponent},
  {path: 'cooking-school', component: CookingSchoolComponent},
  {path: 'cooking-school/create/:id', component: CreateCoookingSchoolComponent},
  {path: 'school/details/:id', component: ViewCookingSchoolDetailsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'contact-us-admin-panel', component: ContactUsAdminPanelComponent},
  {path: 'edit-ad', component: EditAdComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
