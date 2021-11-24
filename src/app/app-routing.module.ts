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
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';

const routes: Routes = [
  {path: "", pathMatch:"full",redirectTo:"/home"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},

  {path:"users", component:UserListComponent},
  {path:"users/create", component:UserCreateComponent},
  {path: "users/login", component:UserLoginComponent},
  {path:"users/:id", component:UserDetailComponent},
  {path:"users/:id/edit", component:UserEditComponent},

  {path: "vendors", component: VendorListComponent},
  {path: "vendors/create", component: VendorCreateComponent},
  {path: "vendors/:id", component: VendorDetailComponent},
  {path: "vendors/:id/edit", component: VendorEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
