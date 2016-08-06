import { Component, Input } from '@angular/core';
import { Chat } from './chat';
@Component({
  selector: 'chat-detail',
  template: `
    <div *ngIf="chat">
      <h2>{{chat.name}} details!</h2>
      <div><label>id: </label>{{chat.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="chat.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class ChatDetailComponent {
  @Input()
  chat: Chat;
}