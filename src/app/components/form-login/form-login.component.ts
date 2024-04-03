import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLog } from 'src/app/models/userLog'


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: UserLog;

  constructor(){

    this.user = new UserLog()
  }

  onSubmit(form:NgForm){
    console.log(this.user)
  }
}
