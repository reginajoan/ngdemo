import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent{

  name: string;
  email: string;

  constructor(private authorService: AuthorsService) { }

  onSaved(){
    this.authorService.createAuthor(this.email, this.name).subscribe((result) => {
      console.log(result);
      alert('data saved');
      this.email = '';
      this.name = '';
    });
  }

}
