import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sup',

  styleUrls: ['./sup.component.css'],
  template:`
  <h1>Its the parent</h1>
  <a [routerLink]="['type' , 'eclipse']">Eclipse</a>
  <br>
  <a [routerLink]="['type' , 'intellij']">Intellij</a>
  <router-outlet></router-outlet>
   `
})
export class SupComponent {

  constructor() { }


}
