import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  url: string = 'https://fake-book-api93.herokuapp.com';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+ localStorage.getItem('CURRENT_USER')
    })
  }

  createAuthor(_email: string, _name: string): Observable<any>{
    var data = {
      name: _name,
      email: _email
    }
    return this.http.post(this.url+'/api/v1/authors',data, this.httpOptions)
            .pipe(catchError(this.errorHandle));
  }

  getAllAuthor(): Observable<any>{
    return this.http.get(this.url+'/api/v1/authors', this.httpOptions)
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
