import { BundleInterface } from '../common/BundleInterface';
import { ProductRouter } from './router/Router';
import { Router } from '../routing/Router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class Product implements BundleInterface {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public initialize() {
        this.router.use('/product', ProductRouter.routes(), ProductRouter.allowedMethods());
    }
}
