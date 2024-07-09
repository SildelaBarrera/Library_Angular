import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;
 
  constructor(public userService: UsersService,
              public toastr: ToastrService,
              private router: Router){
    
    this.user = this.userService.userLogueado
  }

  ngOnInit(): void {
    // if (this.userService.logueado){
    //     this.user = this.userService.userLogueado         
    // }
    this.user = this.userService.userLogueado
    if (this.user == undefined){
      this.router.navigate(['/', 'home'])
        .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err);
      });
    }
  }

  enviar(userNuevoName:string, userNuevoLastName:string, userNuevoEmail: string, userNuevoPhoto: string){

    this.userService.edit(userNuevoName, userNuevoLastName, userNuevoEmail, userNuevoPhoto, 
      this.user.id_user).subscribe((resp:Respuesta) => {
        
        if(resp.error == true){
          this.toastr.warning(resp.message)
        }
        else{
          this.toastr.success(resp.message)
          if (userNuevoName != ""){
            this.user.name = userNuevoName;
          }
          if (userNuevoLastName != ""){
            this.user.last_name = userNuevoLastName;
          }
          if (userNuevoEmail != ""){
            this.user.email = userNuevoEmail;
          }
          if (userNuevoPhoto != ""){
            this.user.photo = userNuevoPhoto;
          }
        }
      })
  }
}

