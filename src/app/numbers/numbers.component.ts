import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'numbers-parent',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {

  @Input() num1 = '';
  @Input() num2 = '';

}
