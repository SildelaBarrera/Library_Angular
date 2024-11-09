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
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

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
      id_book: [, Validators.required]
      }
    )
  }
  public editar(title: string, type: string, author: string, 
            bookRead: string, photo: string, id_book: number, rating: number ){
    
    this.user = this.userService.userLogueado

    this.bookService.edit(id_book, this.user.id_user, title, type, author, bookRead, photo, rating)
      .subscribe ((resp: Respuesta) => {
        console.log(resp)
        if(resp.error){
          this.toastr.warning(resp.message)
        }else{
          this.toastr.success(resp.message); 
        }
      })
    }
  }



