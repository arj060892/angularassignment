import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../name.model';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  @Output() counterEmitter = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  block: Name[] = [];
  display(first: HTMLInputElement, second: HTMLInputElement) {
    console.log(first.value, second.value);
    this.block.push(new Name(first.value, second.value));
    console.log(this.block);
    this.counterEmitter.emit(this.block.length)
  }
}
