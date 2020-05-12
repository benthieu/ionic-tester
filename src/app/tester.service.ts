import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  private tester = new BehaviorSubject<boolean>(true);
  constructor() {
  }

  getTester(): Observable<boolean> {
    return this.tester.asObservable();
  }

  toggleTester(): void {
    this.tester.next(!this.tester.value);
  }
}
