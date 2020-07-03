const express = require("express");
const helmet = require("helmet");

const welcomeRouter = require("./routers/welcome-router");
const resourceRouter = require("./routers/resource");
const projectRouter = require("./routers/project");
const taskRouter = require("./routers/task");

const server = express();
const port = 7000;

server.use(helmet());
server.use(express.json());

server.use(welcomeRouter);
server.use(resourceRouter);
server.use(projectRouter);
server.use(taskRouter);

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
