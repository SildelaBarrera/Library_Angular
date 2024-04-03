import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent{

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.buildForm();
  }

private buildForm(){

  this.myForm = this.formBuilder.group(
    {
      name: [, Validators.required],
      lastName: [, Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
      password2: [, [Validators.required, this.check]]

    }
  )
}
public register(){

  let user = this.myForm.value;
  console.log(user);
  
}
public check (control:AbstractControl){

  let result = {matchPasswords: true};
  if(control.parent?.value.password == control.value)
    result = null;

  return result;
}
}
