import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Counter} from '../reducers/counter';
import {Message} from '../models/message';

import * as fromRoot from '../reducers';
import * as message from '../actions/message';


@Component({
  selector: 'app-float-chat',
  templateUrl: './float-chat.component.html',
  styleUrls: ['./float-chat.component.css']
})
export class FloatChatComponent implements OnInit {
  messages: Observable<Array<Message>>;
  counter: number;

  constructor(private store: Store<fromRoot.State>) {
    this.store.select('counter').subscribe((counter: Counter) => this.counter = counter.number);
    this.messages = this.store.select(fromRoot.getAllMessage);

  }

  ngOnInit() {
  }


  onRemoveMessage(messageToRemove: Message) {
    this.store.dispatch(new message.DeleteMessageAction(messageToRemove));
  }


  onEditMessage(messageToEdit: Message) {
    this.store.dispatch(new message.EditMessageAction(messageToEdit));
  }
}
