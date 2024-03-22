import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() bookPadre: Book;
@Output() remove = new EventEmitter<Book>();
  
  constructor(){}
  
  ngOnInit(): void{
  }
  
 public removeCard(){
   
    this.remove.emit(this.bookPadre);  

}
}