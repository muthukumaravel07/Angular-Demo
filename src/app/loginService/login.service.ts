import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = 'http://httpbin.org/post';

  constructor(private http: HttpClient) { }
  login(username, password) {
    return this.http.post(this.URL, {'username': username, 'password': password}, httpOptions);
  }

}
