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
import {ProductGuard} from "./products/product-guard.service";

@NgModule({
    // needs FormsModule for two way binding
    imports: [
        BrowserModule
        , FormsModule
        , HttpModule
        , RouterModule.forRoot([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuard]},
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
        ], {useHash: true})
    ],
    declarations: [AppComponent
        , ProductListComponent
        , ProductFilterPipe
        , StarComponent
        , WelcomeComponent
        , ProductDetailComponent
    ],
    providers: [ProductGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
