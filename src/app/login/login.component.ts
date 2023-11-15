import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private usuarios: User[] = [];
  constructor(private userService: UserService, private router: Router) {
    
  }

  onLogin(){
    let usuarios = this.userService.getUser()
    this.router.navigateByUrl('dashboard')
    console.log(usuarios);
  }


}
