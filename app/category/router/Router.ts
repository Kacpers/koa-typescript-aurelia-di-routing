import {Router} from '../../routing/Router';
import {list} from '../controller/list';

export const CategoryRouter = new Router();
CategoryRouter
    .get('/', list);

