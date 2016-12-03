import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}{{  843/56}}</h1>
        <div>My first Component</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = "Acme Product"
}