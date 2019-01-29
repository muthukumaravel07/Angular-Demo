import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  isEntered: boolean;
  hide = true;
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  passFormControl = new FormControl('', [
    Validators.required
  ]);

  userInput: string;
  userInput1: string;
  messages=[''];

  send(): void 
  {
    this.messages=['{\tusername: \'' + this.userInput + '\',\tpassword: \'' + this.userInput1 + '\'\t}'];
    console.log(this.messages)
  }
  myMethod(event: any) {
    if (this.userInput1 && this.userInput)
    {
      isEntered: false;
    }
    else
    {
      isEntered: true;
    }
  }
  
}