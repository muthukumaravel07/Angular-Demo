import { Component, OnInit } from '@angular/core';

import { LoginService } from '../loginService/login.service';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent /* implements OnInit */
{
  title = 'projectCB';
  userInput: string;
  messages=['Finally Something is Working'];
  users$: object;

  constructor(private data: LoginService)
  {

  }

 /*  ngOnInit()
  {
    this.data.getUsesr().subscribe(
      data => this.users$ = data
    )

  } */
  

  send(): void {
  this.messages.push(this.userInput);
  this.userInput = null;
} 
}
