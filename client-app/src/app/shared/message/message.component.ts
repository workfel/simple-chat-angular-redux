import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output()
  removeMessage: EventEmitter<Message> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
    this.removeMessage.emit(this.message);
  }

}
