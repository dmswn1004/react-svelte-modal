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

server.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { content, completed } = req.body;

  if (!content || !completed) res.status(400);

  const db = router.db;
  const todo = db
    .get("todos")
    .find({ id: Number(id) })
    .value();

  if (!todo) {
    res.status(404).send("Todo not found");
  } else {
    db.get("todos")
      .find({ id: Number(id) })
      .assign(todo)
      .write();
    res.status(200).json(todo);
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running");
});
