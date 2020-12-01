import { UserInterface } from "../interfaces/user";

export class User implements UserInterface{
id: number;
nome: string;
cognome: string;

constructor(){
  this.nome = "";
  this.cognome="";
}

}