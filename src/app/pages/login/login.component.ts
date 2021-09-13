import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private usersService: UsersService, private router: Router) { }

  onLogin(){
    this.usersService.loginUser(this.email, this.password).subscribe((result) => {
      console.log(result);
      if(result['status']){
        //JSON.stringify()
        localStorage.setItem('CURRENT_USER', result['payload']);
        alert('login sucess');
        this.email='';
        this.password='';
        this.router.navigate(['home']);
      }else{
        alert('login failed');
        this.email='';
        this.password='';
      }
      
    }, (errors) => {
      console.log(errors);
      this.email='';
      this.password='';
      alert('Login Fail');
      
    })
  }
}