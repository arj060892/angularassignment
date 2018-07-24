import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Col,Col1 } from '../col';
import { RouterLink,Routes } from '@angular/router';

@Component({
  selector: 'app-backpage',
  templateUrl: './backpage.component.html',
  styleUrls: ['./backpage.component.css']
})
export class BackpageComponent {
mainid:number;
head:string;
sub:string;
body1:string;


  ngOnInit() {
      this.mainid=this.activeRoute.snapshot.params['id'];
      console.log(this.mainid);
      this.getInfo();
  }
  items: Col1[] = [];
  length:number;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
 
  posts: Observable<any>;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private http: HttpClient){}
  getInfo() {
    
     this.http.get(this.ROOT_URL + '/comments').subscribe(data => {
   
      this.items = data as Col1[];
      this.items.forEach(item => {
        console.log(item.name);
  if(this.mainid==item.id)
  {
this.head=item.name;
this.sub=item.email;
 this.body1=item.body;
   }
     
   
        }
      
        
      )
  
    }
    )
  }
  previousPage()
  {
  this.router.navigate(['/dashboard']);
  }
  loginPage()
  {
  this.router.navigate(['/login']);
  alert("loggedout successfully");
  }
}
