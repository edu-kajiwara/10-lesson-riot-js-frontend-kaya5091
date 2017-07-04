require('./hello.tag');
require('./add.tag');
require('./fibonacci.tag');
require('./buttons.tag');
require('./users.tag');
import Router from 'riot-router';
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;
router.routes([
    new DefaultRoute({tag: 'hello'}),
    new Route({tag: 'users',path:'/users'}),
    new Route({tag: 'add',path:'/add'}),
    new Route({tag: 'fibonacci',path:'/fibonacci'}),
]);

riot.mount('*');
router.start();