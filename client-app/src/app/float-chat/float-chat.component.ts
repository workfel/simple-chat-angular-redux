import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../reducers';
import {Counter} from '../reducers/counter';
import {Observable} from 'rxjs/Observable';
import {Message} from '../models/message';

@Component({
  selector: 'app-float-chat',
  templateUrl: './float-chat.component.html',
  styleUrls: ['./float-chat.component.css']
})
export class FloatChatComponent implements OnInit {
  messages: Array<Message>;
  counter: number;

  constructor(private store: Store<fromRoot.State>) {
    this.store.select('counter').subscribe((counter: Counter) => this.counter = counter.number);

    // this.store.select(fromRoot.getNewMessage).subscribe(message => {
    //   if (message)
    //     this.messages.push(message)
    // });
    // this.messages = this.store.select(fromRoot.getMessagesState);
    this.store.select(fromRoot.getAllMessage).subscribe(messages => this.messages = messages);

  }

  ngOnInit() {
  }

}
