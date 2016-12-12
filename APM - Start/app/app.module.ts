import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductModule} from "./products/product.module";

@NgModule({
    // needs FormsModule for two way binding
    imports: [
        BrowserModule
        , ProductModule
        , HttpModule
        , RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
        ], {useHash: true})
    ],
    declarations: [AppComponent
        , WelcomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
