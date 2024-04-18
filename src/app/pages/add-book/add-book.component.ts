import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UsersService } from '../../shared/users.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})

export class AddBookComponent {
  private user: User;
  constructor(public userService: UsersService,
              public bookService: BooksService,
              public toastr: ToastrService,
              private router: Router){}

  ngOnInit(): void {
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
  public enviar(title:string, type:string, author:string,
    price:number, photo:string){

      this.user = this.userService.userLogueado

      this.bookService.add(title, type, author, 
          price, photo, this.user.id_user).subscribe((resp: Respuesta) => {
            if (resp.error){
              this.toastr.error('This book already exist!');
            }else{
              this.toastr.success(resp.message);
            }
          });      
  }
}
