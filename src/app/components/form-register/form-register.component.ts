import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AbstractControl } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent{

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public userService:UsersService,
              public toastr: ToastrService){
    this.buildForm();
  }

private buildForm(){

  this.myForm = this.formBuilder.group(
    {
      name: [, Validators.required],
      lastName: [, Validators.required],
      photo:[, Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, [Validators.required, this.check]]

    }
  )
}
public register(name: string, lastName: string,  email: string, photo:string,  password:string, password2: string){

  let user = this.myForm.value;
  console.log(user);

  this.userService.register(name, lastName, email, photo,
    password, password2).subscribe((resp: Respuesta) => {
      if(resp.error){
        this.toastr.error('This user already exit');
      }
      else this.toastr.success('This user has been added successfully')  
    })
   
}
public check (control:AbstractControl){

  let result = {matchPasswords: true};
  if(control.parent?.value.password == control.value)
    result = null;

  return result;
}
}
