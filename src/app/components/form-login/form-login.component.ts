import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLog } from 'src/app/models/userLog'
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Router } from '@angular/router';
import { RouterModule } from "@angular/router";
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: UserLog;

  constructor(public userService: UsersService,
              public toastr:ToastrService,
              private router: Router){

    this.user = new UserLog()
  }

  onSubmit(form:NgForm){
  }
  
  userLogin(email:string, password:string){
    this.userService.login(email, password).subscribe((resp: Respuesta) => {
      if(resp.error){
          this.toastr.error(resp.message);
          this.userService.logueado = false;
      }
      else {
          this.toastr.success(resp.message);
          this.userService.logueado = true;
          
          this.userService.userLogueado = resp.dataUser
          console.log (this.userService.userLogueado)
          
          this.router.navigate(['/', 'books'])
          .then(nav => {
            console.log(nav); 
          }, err => {
            console.log(err);
          });
          
          return this.userService.userLogueado
      }
    })
  }
  

}
