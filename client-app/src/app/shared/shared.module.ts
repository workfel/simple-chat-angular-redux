import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule} from '@angular/material';
import {MessageListComponent} from './message-list/message-list.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SearchUserComponent} from './search-user/search-user.component';

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    FlexLayoutModule,
    MdIconModule
  ],
  declarations: [
    MessageComponent,
    MessageListComponent,
    SearchUserComponent
  ],
  exports: [
    FormsModule,
    FlexLayoutModule,
    MdListModule,
    MdButtonModule,
    MdInputModule,
    MessageComponent,
    MessageListComponent,
    MdIconModule
  ]
})
export class SharedModule {
}
