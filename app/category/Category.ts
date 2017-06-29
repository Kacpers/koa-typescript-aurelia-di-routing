import { BundleInterface } from '../common/BundleInterface';
import { CategoryRouter } from './router/Router';
import { Router } from '../routing/Router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class Category implements BundleInterface {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public initialize() {
        this.router.use('/category', CategoryRouter.routes(), CategoryRouter.allowedMethods());
    }
}
