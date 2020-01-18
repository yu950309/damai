import '../stylesheets/index.css';
import '../stylesheets/login.css';
import '../stylesheets/registry.css';

import 'jquery';

import {
    Search,
    Render,
    Banner,
    Stair
} from './index.js';
import {
    Login
} from './login.js';
import {
    Registry
} from './registry.js';

let page=$('body').attr("targetPage");


switch (page) {
    case 'index':
        new Search().init();
        new Render().init();
        new Banner().init();
        new Stair().init();
        break;
    case 'login':
        new Login().init();
        break;
    case 'registry' :
        new Registry().init();
        break;
}