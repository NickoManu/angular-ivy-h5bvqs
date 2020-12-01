import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../users/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy : User;
  private _user: User;
@Input() set user (user:User){
  this._user = user;
  this.userCopy = Object.assign({},user);
} 

get user(){
  return this._user;
}

userService : UserService;
  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit() {
  }

  saveUser(){
    if(this.user.id>0){
      this.userService.updateUser(this.user);
    }
    else{
      this.userService.createUser(this.user);
    }
  }

  resetForm(form){
    if(this.user.id===0){
      this.user=new User();
    } else{
      this.user = this.userCopy;
    }
  }

}