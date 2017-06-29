import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import {Router} from '../routing/router';
import {autoinject} from "aurelia-dependency-injection";

export class Server {
    private app: Koa;
    private port: number;
    private ip: string;
    private config: any;

    constructor(config: any, router: Router) {
        this.config = config;
        this.port = process.env.PORT || this.config.port;
        this.ip = process.env.IP || this.config.ip;
        this.app = new Koa();
        this.app.use(bodyParser())
            .use(router.routes())
            .use(router.allowedMethods());
    }

    up(): void {
        this.app.listen(this.port, this.ip, () => {
            console.log('Start server on port:', this.port);
        });
    }
}
