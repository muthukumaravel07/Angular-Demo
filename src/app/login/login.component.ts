import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginService/login.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
  model = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private data: LoginService)
  {

  }
  ngOnInit()
  {

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

  sendReq() 
  {
    this.data.login(this.model.username, this.model.password)
    .subscribe(success => 
    {
      if (success) 
      {
        
        console.log('jwtToken');
        this.router.navigate(['chat']);
      } 
      else 
      {
        console.log('Login failed');
      }
    });
    
  }
}