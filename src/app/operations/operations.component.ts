import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'operations-parent',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent  {
  
  @Output() newItemEvent = new EventEmitter<string>();

  //to output the operation selected to the main component (App.component)
  addOperation(value: string){
    this.newItemEvent.emit(value);
  }
  subtractOperation(value: string){
    this.newItemEvent.emit(value);
  }
  multOperation(value: string){
    this.newItemEvent.emit(value);
  }
  divideOperation(value: string){
    this.newItemEvent.emit(value);
  }

}
