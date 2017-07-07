import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as message  from  '../../actions/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  message: Message;


  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new message.DeleteMessageAction(this.message));
  }

}
