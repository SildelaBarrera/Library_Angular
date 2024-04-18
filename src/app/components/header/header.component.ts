import { Component } from '@angular/core';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(public userService: UsersService){
  }

}
