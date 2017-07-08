import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule} from '@angular/material';
import {MessageListComponent} from './message-list/message-list.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
    MessageComponent,
    MessageListComponent
  ],
  exports: [
    MdListModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    FlexLayoutModule,
    MessageComponent,
    MessageListComponent,
  ]
})
export class SharedModule {
}
