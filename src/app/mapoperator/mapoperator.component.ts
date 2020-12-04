import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mapoperator',
  templateUrl: './mapoperator.component.html',
  styleUrls: ['./mapoperator.component.css']
})
export class MapoperatorComponent implements OnInit {

  constructor() {
    this.multiplyByTen().subscribe(numbersArray => {
      console.log(numbersArray)
    });
  }

  ngOnInit(): void {
  }
  
  
  multiplyByTen():Observable<number[]> {
    //add 10 to each value
    return of([1, 2, 3, 4, 5])
      .pipe(
        map((val) => {
          val = val.filter(
            (
              data => data +10
            )
          )
          return val;
        })
      );  
  }
      // return this.example.subscribe(val => console.log(val));

}
