import { Component, OnInit } from '@angular/core';

import {create} from 'rxjs-spy';
import {interval} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {tag} from 'rxjs-spy/cjs/operators';
import { Spy } from 'rxjs-spy/cjs/spy-interface';

@Component({
  selector: 'app-rxjsspy',
  templateUrl: './rxjsspy.component.html',
  styleUrls: ['./rxjsspy.component.css']
})
export class RxjsspyComponent implements OnInit {


  spy:Spy = create();

  constructor() {
    const cartoons = interval(2000).pipe(
      // tap(val =>console.log(val)),
      map(() => ['Tom & Jerry', 'Mr. Bean']),
      tag('people1'),
      map((names) => names.map(name => [name, name.length])),
      tag('people2')
    ).subscribe();
    // );
    
    this.spy.show();
    this.spy.log('people1');
    this.spy.log('people2');
   }

  ngOnInit(): void {
  }

}
