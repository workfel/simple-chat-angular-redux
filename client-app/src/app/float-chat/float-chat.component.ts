import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../reducers';
import {Counter} from '../reducers/counter';

@Component({
  selector: 'app-float-chat',
  templateUrl: './float-chat.component.html',
  styleUrls: ['./float-chat.component.css']
})
export class FloatChatComponent implements OnInit {
  messages = [];
  counter: number;

  constructor(private store: Store<fromRoot.State>) {
    this.store.select('counter').subscribe((counter: Counter) => this.counter = counter.number);

    this.store.select(fromRoot.getNewMessage).subscribe(message => {
      if (message)
        this.messages.push(message)
    });
  }

  ngOnInit() {
  }

}
