const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/todos", (req, res) => {
  const { content } = req.body;

  if (!content) res.status(400);
  else {
    const db = router.db;
    const newTodo = { id: Number(Date.now()), content, completed: false };
    db.get("todos").push(newTodo).write();
    res.status(201).json(newTodo);
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running");
});
