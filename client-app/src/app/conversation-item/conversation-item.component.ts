import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css']
})
export class ConversationItemComponent implements OnInit {
  @Input()
  active: string;

  constructor() {
  }

  ngOnInit() {

  }

}
