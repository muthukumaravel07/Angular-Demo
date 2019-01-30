import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginService/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
  users$: object;
  constructor(private data: LoginService){}
  ngOnInit(){
    this.data.getUsers().subscribe(
      data => this.users$ = data
    ) 
  }
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
  
  send()
  {
    this.messages=['{\tusername: \'' + this.userInput + '\',\tpassword: \'' + this.userInput1 + '\'\t}'];
    console.log(this.messages)
    this.data.addHero(this.messages).subscribe(data=>console.log(this.messages));
  }
}