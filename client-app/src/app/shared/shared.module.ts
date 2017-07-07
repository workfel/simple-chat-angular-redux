import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MdListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdListModule
  ],
  declarations: [MessageComponent],
  exports: [
    MessageComponent,
    MdListModule]
})
export class SharedModule {
}
