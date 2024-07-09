import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserLog } from 'src/app/models/userLog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class UsersService {

    private url:string = "http://localhost:3000/"
    public logueado:boolean;
    public user:User;
    public userLogueado:User;
  
    constructor(private http: HttpClient) {
      this.logueado = false;
    }


  register(name: string, lastName: string, email: string, photo:string, password:string, password2: string){
    let urlRegister = this.url + "register"
    console.log(urlRegister)
    let newUser = new User(name, lastName, email, photo, password, password2)
    return this.http.post(urlRegister, newUser)
    }
  
  edit(name:string, lastName:string,  email:string, photo:string, id_user: number){
    let urlEdit = this.url + "user"
    let editedUser = {name, lastName, email, photo, id_user}
    console.log(editedUser);
    return this.http.put(urlEdit, editedUser)
  }
  login(email:string, password:string){
    let urlLog = this.url + "login"
    let loginDatos = {email, password}
    return this.http.post(urlLog, loginDatos);
  }
}