import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  fullName: string='';
  email: string='';
  password: string='';
  constructor(private usersService: UsersService) { }


  onRegister(){
    this.usersService.registerUser(this.fullName, this.email, this.password).subscribe((result) => {
      console.log(result);
      alert('data saved');
      this.fullName = '';
      this.email='';
      this.password='';
    }, error => {
      console.log(error);
    })
  }
}
