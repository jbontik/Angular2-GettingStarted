import {Component} from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    // resgisters a provider for the ProductService
    // cf. https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#injector-providers
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = "Acme Product"
}