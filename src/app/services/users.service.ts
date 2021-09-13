import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'https://fake-book-api93.herokuapp.com';

  constructor(private http: HttpClient) { }

  registerUser(_fullName: string, _email: string, _password: string): Observable<any>{
    var data = {
      fullName : _fullName,
      email: _email,
      password: _password
    }
    return this.http.post(this.url+'/api/v1/users',data)
            .pipe(catchError(this.errorHandle));
  }

  loginUser(_email: string, _password: string){
    var data = {
      email: _email,
      password: _password
    }
    return this.http.post(this.url+'/api/v1/users/login',data)
            .pipe(catchError(this.errorHandle));
  }

  errorHandle(err: any){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = err.error.message;
    }else{
        errorMessage = `Error Code : ${err.status}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}
