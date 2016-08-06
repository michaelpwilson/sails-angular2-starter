import { Injectable } from '@angular/core';

import { Chat } from './chat';
import { CHATS } from './mock-chats';

@Injectable()
export class ChatService {
  getChats() {
    return Promise.resolve(CHATS);
  }
}