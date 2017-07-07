import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {reducer} from './reducers/index';
import {ChatComponent} from './chat/chat.component';
import {FloatChatComponent} from './float-chat/float-chat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FloatChatComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.provideStore(reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
