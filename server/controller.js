const todos = ['brush your teeth', 'go to school', 'learn this shit'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },
  post: (req, res) => {
    let { todo } =req.body; // todo= req.body.todos
    todos.push(todo);
    res.status(201).send(`posted todo ${todo}`);
  },
  delete: (req, res) => {
    let { index } = req.params;
    let deleted = todos.splice(index, 1)
    res.status(200).send(`Deleted todo ${deleted}`);
  }
}

module.exports = controller;