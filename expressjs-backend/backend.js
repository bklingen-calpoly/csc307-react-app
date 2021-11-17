const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    },
  ],
};

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query["name"];
  const job = req.query["job"];
  if (name === undefined && job === undefined) {
    res.send(users); //sending all
  } else if (name && !job) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else if (job && !name) {
    let result = findUserByJob(job);
    result = { users_list: result };
    res.send(result);
  } else {
    let result = findUserByNameAndJob(name, job);
    result = { users_list: result };
    res.send(result);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined || result.length == 0)
    res.status(404).send("Resource not found.");
  else {
    result = { users_list: result };
    res.send(result);
  }
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd);
  res.status(200).end();
});

app.patch("/users/:id", (req, res) => {
  const id = req.params["id"];
  const updatedUser = req.body;
  const user = findUserById(id);
  if (user) {
    const index = users["users_list"].indexOf(user);
    users["users_list"].splice(index, 1, updatedUser); //Patching without validating incoming data
    res.status(204).end();
  } else res.status(404).send("Resource not found.");
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  if (deleteUserById(id)) res.status(204).end();
  else res.status(404).send("Resource not found.");
});

function findUserById(id) {
  return users["users_list"].find((user) => user["id"] === id); // or line below
  //return users['users_list'].filter( (user) => user['id'] === id);
}

const findUserByName = (name) => {
  return users["users_list"].filter((user) => user["name"] === name);
};

const findUserByJob = (job) => {
  return users["users_list"].filter((user) => user["job"] === job);
};

function findUserByNameAndJob(name, job) {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["job"] === job
  );
}

function addUser(user) {
  users["users_list"].push(user);
}

function deleteUserById(id) {
  const userToDel = users["users_list"].find((user) => user["id"] === id);
  const index = userToDel ? users["users_list"].indexOf(userToDel) : undefined;
  if (index) {
    users["users_list"].splice(index, 1);
    return true;
  }
  return false;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
