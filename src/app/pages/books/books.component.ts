import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {
  public book: Book;
  public library: Book[];
  private user: User
  constructor(public userService: UsersService,
              public bookService: BooksService,
              public toastr: ToastrService,
              private router: Router) {
    this.user = this.userService.userLogueado
              }

  ngOnInit(): void {
    if (this.user == undefined){
      this.router.navigate(['/', 'home'])
        .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err);
      });
    }
    else{
      this.bookService.getAll(this.user.id_user).subscribe((resp:Respuesta) => {
      this.library = resp.dataLibrary;
      console.log(this.library)
     
      if(this.library == undefined){
        this.toastr.warning("There are no books")
      }
      })
    }
  }
 
  public buscar(id_book:number){
    this.user = this.userService.userLogueado
    this.bookService.getOne(this.user.id_user,id_book).subscribe((resp:Respuesta) => {

      if (id_book.toString() == ""){
        this.book = null;
      } else{
        if (resp.error){
          this.toastr.error(resp.message)
        }
        else{
          this.book = resp.dataBook;
        }
      }
    });

  }
  public removeBook(noBook: Book) {
    this.user = this.userService.userLogueado
    this.bookService.delete(noBook.id_book).subscribe((resp: Respuesta) => {
      
      this.bookService.getAll(this.user.id_user).subscribe((resp:Respuesta) => {
        this.library = resp.dataLibrary; 
        if(this.library == undefined){
          this.toastr.warning("There are no books")
        }
      })
    }); 
  }
}
