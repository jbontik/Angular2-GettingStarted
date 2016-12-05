import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IProduct} from "./product";

@Injectable()
export class ProductService {

    productUrl: string = "https://quiet-beach-4076.herokuapp.com/products";

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log(`All: ${JSON.stringify(data)}`))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
