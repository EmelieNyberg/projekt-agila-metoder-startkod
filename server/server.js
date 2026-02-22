const jsonServer = require("json-server");
const middleware = require("./middleware");

const server = jsonServer.create();
const router = jsonServer.router("products.json");
const defaultMiddlewares = jsonServer.defaults();

server.use(defaultMiddlewares);
server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(router);

server.listen(4000, () => {
  console.log("Server running on port 4000");
});