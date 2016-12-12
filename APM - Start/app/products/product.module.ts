import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductGuard} from "./product-guard.service";
import {ProductService} from "./product.service";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
@NgModule(
    {
        declarations: [
            ProductListComponent
            , ProductDetailComponent
            , ProductFilterPipe
            , StarComponent
        ],
        imports: [
            FormsModule
            , RouterModule.forChild([
                {path: 'products', component: ProductListComponent},
                {path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuard]},
            ])
            , CommonModule
        ],
        // cf. https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#injector-providers
        providers: [ProductGuard, ProductService]
    }
)
export class ProductModule {
}