import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { UsersComponent } from "./users/users.component";

import { UserComponent } from './user/user.component';
import { UserService } from "./users/user.service";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from "@angular/router";
import { ModalBasicComponent } from './modal-basic/modal-basic.component';


const routes: Routes = [
  {
    path: '/',
    pathMatch:'full',
    component: UsersComponent
  },
  {
    path: 'users/new',
    component: UsersComponent
  },
  {
    path: '/',
    redirectTo:'users'
  }

]

@NgModule({
  imports: [BrowserModule, FormsModule],
  
  declarations: [AppComponent, HelloComponent, UsersComponent, UserComponent, UserDetailComponent, NavComponent, ModalBasicComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
