import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSaved(){
    console.log(this.name);
  }

}
