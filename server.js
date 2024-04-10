const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3000;

server.use(middlewares);
server.use(router);
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Expose-Headers', 'Location');
    next();
});
server.listen(port, () => {});