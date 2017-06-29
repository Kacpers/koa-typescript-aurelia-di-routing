import {Server} from './server/Server';
import {config} from './config';
import {Router} from './routing/Router';
import {Container, inject} from 'aurelia-dependency-injection';
import 'reflect-metadata';

// bundles
import {BundleInterface} from './common/BundleInterface';
import {Category} from './category/Category';
import {Product} from './product/Product';

@inject(Category, Product, Router)
class App {
    private bundles: Array<BundleInterface>;
    private router: Router;
    private config: any;

    constructor(category: Category, product: Product, router: Router, config) {
        this.config = config;
        this.router = router;
        this.bundles = [
            category,
            product
        ];
    }

    private startServer(): void {
        const server = new Server(
            config,
            this.router
        );
        server.up();
    }

    public init(): void {
        for (let bundle of this.bundles) {
            bundle.initialize();
        }

        try {
            this.startServer();
        }
        catch (error) {
            console.log('ERROR:', error.status);
        }
    }
}

const container: Container = new Container();
const app = container.get(App);
app.init();