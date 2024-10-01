import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor ( 
    private AuthService:AuthService,
    private Router :Router
  ){}

  onLogin():void{

    this.AuthService.login('mixato86@gmail.com','1234567')
    .subscribe(User => {
      this.Router.navigate(['/'])
    });



  }





}
