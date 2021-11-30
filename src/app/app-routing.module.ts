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
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component'; 
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';


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
  {path: "vendors/:id/edit", component: VendorEditComponent},

  {path: "products", component: ProductListComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/:id", component: ProductDetailComponent},
  {path: "products/:id/edit", component: ProductEditComponent},

  {path: "requests", component: RequestListComponent},
  {path: "requests/create", component: RequestCreateComponent},
  {path: "requests/:id", component: RequestDetailComponent},
  {path: "requests/:id/edit", component: RequestEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
