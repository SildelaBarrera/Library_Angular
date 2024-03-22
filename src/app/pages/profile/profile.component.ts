import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user1: User;
 

  constructor(){

    this.user1 = new User("Adriana", "Causin", "adri2002@hotmail.com", "https://images.pexels.com/photos/16852356/pexels-photo-16852356/free-photo-of-mujer-puerta-libro-lector.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); 
  }

  enviar(userNuevoName:string, userNuevoLastName:string, userNuevoEmail: string, userNuevoPhoto: string){


    this.user1.name = userNuevoName;
    this.user1.last_name = userNuevoLastName;
    this.user1.email = userNuevoEmail;
    this.user1.photo = userNuevoPhoto;

  }

  }

