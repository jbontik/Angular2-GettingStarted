import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    // path relative to index.html
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[];
    showImage: boolean = false;
    listFilter: string;

    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("########## ON INIT ##############");
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product list: ${message}`;
    }
}
