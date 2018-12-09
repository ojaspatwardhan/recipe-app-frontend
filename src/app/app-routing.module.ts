import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MultipleRecipeDetailComponent } from './multiple-recipe-detail/multiple-recipe-detail.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewCreatedRecipesComponent } from './view-created-recipes/view-created-recipes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'profile', component: ProfilePageComponent, runGuardsAndResolvers: 'always'},
  {path: 'profiles', component: ProfilePageComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path: 'recipes/:name', component: MultipleRecipeDetailComponent},
  {path: 'view-recipe', component: ViewCreatedRecipesComponent},
  {path: 'edit/recipe/:id', component: EditRecipeComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
