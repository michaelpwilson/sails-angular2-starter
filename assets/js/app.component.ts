import {Component} from 'angular2/core';

import { Chat } from './chat';
import { ChatDetailComponent } from './chat-detail.component';

const CHATS: Chat[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `
    <h2>Chats</h2>
    {{chats}}
    <ul>
    </ul>
    <chat-detail [hero]="selectedChat"></chat-detail>
    `
})

export class AppComponent {
  title = 'Chats';
  chats = CHATS;
  selectedChat: Chat;
  onSelect(chat: Chat) { this.selectedChat = chat; }
}