import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestlineCreateComponent } from './requests/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requests/requestline-edit/requestline-edit.component';
import { ReviewerListComponent } from './reviews/reviewer-list/reviewer-list.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    ReviewerListComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
