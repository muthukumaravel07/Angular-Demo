import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {LoginService} from '../loginService/login.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public auth: LoginService) { 
    console.log(' inside TIS ');
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('jwtToken')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ` + localStorage.getItem('jwtToken'),
          'Content-Type':  'application/json'
        }
      });
    }
    return next.handle(req).pipe(catchError((error, caught) => {
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
    // throw new Error('Method not implemented.');
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 401) {
      // navigate /delete cookies or whatever
      console.log('handled error ' + err.status);

      return of(err.message);
    }
    throw err;
  }
}