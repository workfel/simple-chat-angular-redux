import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as message from '../actions/message';
import {Message} from '../models/message';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: Observable<Message>;

  constructor(private store: Store<fromRoot.State>) {
    this.message = this.store.select(fromRoot.getLastMessage);

  }

  ngOnInit() {
  }

  onRemoveMessage(messageToRemove: Message) {
    this.store.dispatch(new message.DeleteMessageAction(messageToRemove));
  }

}
