import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'results-parent',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  num1: any
  num2: any
  result: any

  addOperation(){
    this.result = this.num1 + this.num2; 
    return this.result;
  }
  subtractOperation(){
    this.result = this.num1 - this.num2; 
    return this.result;
  }
  multOperation(){
    this.result = this.num1 * this.num2; 
    return this.result;
  }
  divideOperation(){
    this.result = this.num1 / this.num2; 
    return this.result;
  }
}
