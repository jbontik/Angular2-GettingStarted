import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {IProduct} from "./product";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class ProductService {

    productUrl: string = "https://quiet-beach-4076.herokuapp.com/products";

    constructor(private _http: Http) {
    }

    private _productsObservable: Observable<IProduct[]>;

    getProducts(): Observable<IProduct[]> {
        if (!this._productsObservable) {
            this._productsObservable = this._http.get(this.productUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .do(data => console.log(`All: ${JSON.stringify(data)}`))
                .publishReplay(1)
                .refCount()
                .catch(this.handleError);
        }
        return this._productsObservable;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
