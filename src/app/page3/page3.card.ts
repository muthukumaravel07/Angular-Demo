import { Component } from '@angular/core';
@Component({
    selector: 'app-card',
    template: `<div>
    <div class="cardInner">
    <div [style.grid-area]="'header'">
      Header
    </div>
    <div [style.grid-area]="'side'">
      Side
    </div>
    <div [style.grid-area]="'content'">
      Content
    </div>
    <div [style.grid-area]="'footer'">
      Footer
     </div>
  </div>
    </div>`,
    styles: [`
    :host {
      display: block;
      padding: 32px;
      border: 1px solid black;
      border-radius: 8px;
    }
    .cardInner {
        display: grid;
        grid-template-areas: "header header" "side content" "footer footer";
        grid-template-rows: auto auto auto;
        grid-row-gap: 16px;
        grid-column-gap: 16px;
      }
    `]
  })
  export class CardComponent {}