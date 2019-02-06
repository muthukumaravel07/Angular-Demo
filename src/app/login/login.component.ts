import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginService/login.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

export interface Office {
  name: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{

  officeControl = new FormControl('', [Validators.required]);
  office: Office[] = [
    {name: 'VL1'},
    {name: 'VL2'},
    {name: 'VL3'},
    {name: 'VL4'},
  ];
  projectControl = new FormControl('', [Validators.required]);
  project: Office[] = [
    {name: 'P1'},
    {name: 'P2'},
    {name: 'P3'},
    {name: 'P4'},
  ];
  
  
  model = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private data: LoginService,  private cookieService: CookieService)
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
    .subscribe((success: {token: string}) => 
    {
      if (success) 
      {
        console.log('Paramaters successfully passed and response received');
        this.cookieService.set( 'jwtToken', success.token );
        this.router.navigate(['/chat']);
      } 
      else 
      {
        console.log('Login failed');
      }
    });
    
  }
}

