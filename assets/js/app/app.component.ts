import { Component, OnInit } from '@angular/core';

import { Chat } from './chat';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatService } from './chat.service';

@Component({
    selector: 'my-app',
    template: `
    <h2>Chats</h2>
    <div class="grid--md4">
      <div class="grid__item" *ngFor="let chat of chats"
        [class.selected]="chat === selectedChat">
        <div class="card--chat">
          <a (click)="onSelect(chat)">
          <img class="card__image" src="http://placekitten.com/g/450/300"/>
          </a>
          <h3 class="card__title">
            <a (click)="onSelect(chat)">{{chat.name}}</a>
            </h3>
          <a class="button" (click)="onSelect(chat)">join chat</a>
      </div>
    </div>
    <chat-detail [chat]="selectedChat"></chat-detail>
    `,
    directives: [ChatDetailComponent],
    providers: [ChatService]
})

export class AppComponent implements OnInit {
  title = 'Chats';
  chats: Chat[];
  selectedChat: Chat;

  constructor(private chatService: ChatService) { }

  getChats() {
    this.chatService.getChats().then(chats => this.chats = chats);
  }

  ngOnInit() {
    this.getChats();
  }

  onSelect(chat: Chat) { this.selectedChat = chat; }
}