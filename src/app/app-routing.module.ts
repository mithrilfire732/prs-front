import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
  {path: "", pathMatch:"full",redirectTo:"/home"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},

  {path:"users", component:UserListComponent},
  {path:"users/create", component:UserCreateComponent},
  {path: "users/login", component:UserLoginComponent},
  {path:"users/:id", component:UserDetailComponent},
  {path:"users/:id/edit", component:UserEditComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
