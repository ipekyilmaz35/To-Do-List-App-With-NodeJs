const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get('/', (req, res) => {
    res.render('index', { todos });
});

app.post('/add-todo', (req, res) => {
    const todo = req.body.newTodo;
    if (todo) {
        todos.push(todo);
    }
    res.redirect('/');
});

app.post('/remove-todo', (req, res) => {
    const index = req.body.index;
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
