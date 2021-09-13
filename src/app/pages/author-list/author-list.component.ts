import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  listOfAuthor: any;

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.authorService.getAllAuthor().subscribe((result) => {
      console.log(result);
      if(result['status']){
        this.listOfAuthor = result['payload'];
      }else{
        console.log(result['message']);
      }
    }, error => {
      console.log(error);
    });
  }

}
