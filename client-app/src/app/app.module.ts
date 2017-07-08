import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {reducer} from './reducers/index';
import {ChatComponent} from './chat/chat.component';
import {FloatChatComponent} from './float-chat/float-chat.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ConversationListComponent} from './conversation-list/conversation-list.component';
import {ConversationComponent} from './conversation/conversation.component';
import {ConversationItemComponent} from './conversation-item/conversation-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import { ConversationHeaderComponent } from './conversation-header/conversation-header.component';
import { ConversationFormComponent } from './conversation-form/conversation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FloatChatComponent,
    TopBarComponent,
    ConversationListComponent,
    ConversationComponent,
    ConversationItemComponent,
    DashboardComponent,
    ConversationHeaderComponent,
    ConversationFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
