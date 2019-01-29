import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent{
  title = 'projectCB';
  userInput: string;
  messages=['Finally Something is Working'];
  

  send(): void {
  this.messages.push(this.userInput);
  this.userInput = null;
} 
}
