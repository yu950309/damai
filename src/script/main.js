import '../stylesheets/index.css';
import '../stylesheets/login.css';
import '../stylesheets/registry.css';
import '../stylesheets/details.css';

import 'jquery';

import {
    Search,
    Render,
    Banner,
    Stair,
    Goods
} from './index.js';
import {
    Login
} from './login.js';
import {
    Registry
} from './registry.js';
import {
    Details
} from './details.js';

let page=$('body').attr("targetPage");


switch (page) {
    case 'index':
        new Search().init();
        new Render().init();
        new Banner().init();
        new Stair().init();
        new Goods().init();
        break;
    case 'login':
        new Login().init();
        break;
    case 'registry' :
        new Registry().init();
        break;
    case 'details' :
        new Details().init();
        break;
}