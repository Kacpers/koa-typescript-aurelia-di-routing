import {Router} from '../../routing/Router';
import {list} from '../controller/list';

export const ProductRouter = new Router();
ProductRouter
    .get('/', list);

