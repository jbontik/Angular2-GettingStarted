import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {ProductListComponent}  from './products/product-list.component';
import {FormsModule} from "@angular/forms";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpModule} from "@angular/http";
import {ProductDetailComponent} from "./products/product-detail.component";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";

@NgModule({
    // needs FormsModule for two way binding
    imports: [
        BrowserModule
        , FormsModule
        , HttpModule
        , RouterModule
    ],
    declarations: [AppComponent
        , ProductListComponent
        , ProductFilterPipe
        , StarComponent
        , WelcomeComponent
        , ProductDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
