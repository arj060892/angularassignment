import { Component } from '@angular/core';
import { Name } from '../name.model';
import { SupComponent } from './sup/sup.component';
import { HttpClient } from '@angular/common/http';
import { Col } from './col';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RouterLink,Routes } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}




