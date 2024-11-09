import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})

export class AddBookComponent {
  private user: User;
  public myForm: FormGroup;

  constructor(public userService: UsersService,
              public bookService: BooksService,
              public toastr: ToastrService,
              private router: Router,
              public formBuilder: FormBuilder){
              
              this.buildForm()
              }

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

  private buildForm(){

    this.myForm = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required]
      }
    )
  }
  public enviar(title:string, bookRead:string, type:string, author:string,
     photo:string, rating: number){

      this.user = this.userService.userLogueado

      this.bookService.add(title, bookRead, type, author, 
           photo, rating, this.user.id_user).subscribe((resp: Respuesta) => {
            if (resp.error){
              this.toastr.error('This book already exist');
            }else{
              this.toastr.success(resp.message);
            }
          });      
  }
}
