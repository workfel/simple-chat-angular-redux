import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../reducers';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = [];

  constructor(private store: Store<fromRoot.State>) {
    this.store.select(fromRoot.getNewMessage).subscribe(message => {
      if (message)
        this.messages.push(message)
    });
  }

  ngOnInit() {
  }

}
