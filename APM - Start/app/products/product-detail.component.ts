import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
@Component(
    {
        moduleId: module.id,
        templateUrl: "product-detail.component.html"
    }
)
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: any;

    constructor(private _route: ActivatedRoute
        , private _router: Router
        , private _productService: ProductService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this._productService.getProduct(id)
            .subscribe(
                p => this.product = p,
                err => this.errorMessage = <any>err);

        this.pageTitle += `: ${id}`
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}