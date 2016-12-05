import {Component} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute} from "@angular/router";
@Component(
    {
        moduleId: module.id,
        templateUrl: "product-detail.component.html"
    }
)
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params['id']);
    }
}