import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
  
  //TODO: Demo 1: Error
  public counterObject: any =
  {
    counter: 0
  };
  
  //TODO: Demo 1: Fix
  // public counterObject: {counter:number} =
  // {
    //   counter: 0
  // };

  constructor() { }

  ngOnInit(): void {
  }

  public onIncrementClick() {
    this.counterObject++;
  }

}
