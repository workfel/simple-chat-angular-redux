import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from './reducers';
import * as message from './actions/message';
import {Observable} from 'rxjs/Observable';
import {Counter, DECREMENT, INCREMENT, RESET} from 'app/reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string;
  counter: number;

  private id = 0;


  constructor(private store: Store<fromRoot.State>) {
    this.store.select('counter').subscribe((counter: Counter) => this.counter = counter.number);
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }

  onSubmit() {
    console.log('onSubmit', this.message);

    this.store.dispatch(new message.AddMessageAction({
      message: this.message,
      date: new Date().toISOString(),
      sender: 'Michel',
      id: (++this.id).toString()
    }));
    this.message = '';
  }
}
