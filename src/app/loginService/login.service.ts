import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  URL = 'http://172.20.126.27:3000/auth';
  constructor(private http: HttpClient, private cookie: CookieService) 
  {

  }
  login(username, password) 
  {
    return this.http.post(this.URL, {'username': username, 'password': password});
  }

  loggedIn() {
    return !!this.cookie.get('jwtToken');
  }
  
}
