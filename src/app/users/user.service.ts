import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { UserInterface } from "../interfaces/user";


@Injectable()
export class UserService{

  users: User[] = [
    {
      id: 1,
      nome: "Luca",
      cognome: "Rossi"
    },

    {
      id: 2,
      nome: "Mario",
      cognome: "Rossi"
    },

    {
      id: 3,
      nome: "Lucia",
      cognome: "Rossi"
    }
  ];

    constructor(){

  }

  getUsers(){
    return this.users;
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    if(index>=0)
    this.users.splice(index,1);
  }

  updateUser(user: UserInterface){
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if(idx!=-1){
      this.users[idx]=user;
    }
  }

  createUser(user: UserInterface){
   this.users.splice(0,0,user);
  }

}