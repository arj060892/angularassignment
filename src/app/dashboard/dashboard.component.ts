import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Col,Col1 } from '../col';
import { RouterLink,Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit() {
   this.getInfo();
}

items: Col1[] = [];
length:number;


readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

posts: Observable<any>;




constructor(private http: HttpClient,private router:Router) { }

getInfo() {
debugger;
  this.http.get(this.ROOT_URL + '/comments').subscribe(data => {
    this.items = data as Col1[];
    this.items.forEach(item => {
    console.log(item.name);
    console.log(item.email);
   

   
    
     //this.requireLogin=true;
     //this.router.navigate(['/backpage']);
    
 
      }
    
      
    )
   

    // data.forEach(item => {item.userId;

    //console.log(item.userId)});
    // console.log("userId" + item);
    //console.log("id" + data.id);
    //console.log("title" + data.title);
  }
  )
}}