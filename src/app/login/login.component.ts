import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Col } from '../col';
import { RouterLink,Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  counter: number = 0;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  handler(accountCounter) {
    this.counter = accountCounter;
  }
  posts: Observable<any>;

requireLogin:any;
 
  constructor(private http: HttpClient,private router:Router) { }

  getValidate(id: HTMLInputElement, userid: HTMLInputElement) {

    this.posts = this.http.get(this.ROOT_URL + '/posts').map(data => {
      let items: Col[] = [];
      items = data as Col[];
      items.forEach(item => {
        if (id.value==item.id.toString() && userid.value==item.userId.toString())
        {
          
       alert("successfully login");
       //this.requireLogin=true;
       this.router.navigate(['/dashboard']);
      
   
        }
        
      })
     

      // data.forEach(item => {item.userId;

      //console.log(item.userId)});
      // console.log("userId" + item);
      //console.log("id" + data.id);
      //console.log("title" + data.title);
    }
    )
  }

}


 

