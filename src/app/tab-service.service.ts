import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {
  counter: any = 1;
  count: BehaviorSubject<number>;

  constructor() {
    this.count = new BehaviorSubject(this.counter);
  }

  nextCount(num: any) {
    this.count.next(num);
  }



}
