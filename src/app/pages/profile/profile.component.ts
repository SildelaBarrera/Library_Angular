import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user1: User;
  public fotografia: string;

  constructor(){

    this.user1 = new User("Adriana", "Causin", "adri2002@hotmail.com", "https://images.pexels.com/photos/16852356/pexels-photo-16852356/free-photo-of-mujer-puerta-libro-lector.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); 
  }

  enviar(userNuevoName:string, userNuevoApe:string, userNuevoEma: string, userNuevoPho: string){


    this.user1.name = userNuevoName;
    this.user1.last_name = userNuevoApe;
    this.user1.email = userNuevoEma;
    this.user1.photo = userNuevoPho;
  
    console.log(this.user1);
  }
  
  }

