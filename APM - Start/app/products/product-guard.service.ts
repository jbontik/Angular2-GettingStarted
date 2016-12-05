import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
@Injectable()
export class ProductGuard implements CanActivate {
    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.params['id'];
        if (id && Number.isInteger(id) && id > -1) {
            return true;
        }
        console.warn(`Unknown product: ${id}`);
        this._router.navigate(["/products"]);
        return false;
    }
}