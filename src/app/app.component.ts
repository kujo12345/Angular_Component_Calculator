import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: any;
  num2: any;

  addItem(newItem: any) {
    this.num1.push(newItem);
    this.num2.push(newItem);
  }
}
