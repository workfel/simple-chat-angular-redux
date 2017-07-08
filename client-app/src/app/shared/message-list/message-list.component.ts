import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input()
  messages: Array<Message>;
  @Output()
  removeMessage: EventEmitter<Message> = new EventEmitter();
  @Output()
  editMessage: EventEmitter<Message> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  onRemoveMessage(message: Message) {
    this.removeMessage.emit(message);
  }
  onEditMessage(message: Message) {
    this.editMessage.emit(message);
  }


}
