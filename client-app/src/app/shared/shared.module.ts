import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MdListModule} from '@angular/material';
import {MessageListComponent} from './message-list/message-list.component';

@NgModule({
  imports: [
    CommonModule,
    MdListModule
  ],
  declarations: [
    MessageComponent,
    MessageListComponent
  ],
  exports: [
    MdListModule,
    MessageComponent,
    MessageListComponent
  ]
})
export class SharedModule {
}
