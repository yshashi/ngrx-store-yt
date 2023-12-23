import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
