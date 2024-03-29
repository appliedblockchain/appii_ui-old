// Generated by CoffeeScript 1.11.1
var DefaultRoute, NotFoundRoute, ROUTES, RedirectRoute, Route, api, store;

Route = riot.router.Route;

DefaultRoute = riot.router.DefaultRoute;

NotFoundRoute = riot.router.NotFoundRoute;

RedirectRoute = riot.router.RedirectRoute;

store = new Store();

api = {
  store: store
};

ROUTES = [
  new DefaultRoute({
    tag: 'home',
    api: api
  }), new Route({
    path: '/professionals',
    tag: 'table-users',
    api: api
  }), new Route({
    path: '/organizations',
    tag: 'table-orgs',
    api: api
  }), new Route({
    path: '/universities',
    tag: 'table-unis',
    api: api
  }), new Route({
    path: '/unis/:id',
    tag: 'uni',
    api: api
  }), new Route({
    path: '/user',
    tag: 'user-edit',
    api: api
  }), new Route({
    path: '/users/new',
    tag: 'user-new',
    api: api
  }), new Route({
    path: '/users/:id',
    tag: 'user',
    api: api
  }), new Route({
    path: '/org',
    tag: 'org-edit',
    api: api
  }), new Route({
    path: '/orgs/new',
    tag: 'org-new',
    api: api
  }), new Route({
    path: '/orgs/:id',
    tag: 'org',
    api: api
  }), new Route({
    path: '/approvables',
    tag: 'approvables',
    api: api
  }), new Route({
    path: '/blockchain',
    tag: 'blockchain',
    api: api
  }), new NotFoundRoute({
    tag: 'not-found'
  })
];
