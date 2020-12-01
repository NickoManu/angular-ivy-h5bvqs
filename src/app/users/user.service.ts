import { Injectable } from "@angular/core";
import { User } from "../classes/user";


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

}