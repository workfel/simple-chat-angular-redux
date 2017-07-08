import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';

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
  @Output()
  editMessage: EventEmitter<Message> = new EventEmitter();

  messageToEdit: string;
  isEditing = false;

  constructor() {
  }

  ngOnInit() {
    if (this.message)
      this.messageToEdit = this.message.message;
  }

  onDelete() {
    this.removeMessage.emit(this.message);
  }


  onEditMessage() {
    this.isEditing = true;
  }


  onMessageEdited() {

    this.isEditing = false;
    const newMessage = new Message();
    newMessage.message = this.messageToEdit;
    newMessage.id = this.message.id;

    this.editMessage.emit(newMessage);
  }

}
