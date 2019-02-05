import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { TokenInterceptorService } from './token/token-interceptor.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home', 
    component: LoginComponent},
  {
    path: 'chat',
    component: ChatWindowComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatMsgComponent,
    ChatWindowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
