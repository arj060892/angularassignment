import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bul',
  styleUrls: ['./bul.component.css'],
  template: 	`
  <h1>Android Ide selected</h1>
  <h1>{{ideName}}</h1>`
})
export class BulComponent implements OnInit {
public ideName:string;
  constructor() { }

  ngOnInit() {
  }

}
