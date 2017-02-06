var todos = ["item 1", "item 2", "item 3"];

function displayTodo(){
    console.log("My todos: " + todos);
}

function addTodos(value){
    todos.push(value);
    displayTodo();
}

function changeTodos(position, value){
    todos[position] = value;
    displayTodo();
}

function deleteTodos(del){
    todos.splice(del,1);
    displayTodo();
}

addTodos("");

changeTodos(0, "");

deleteTodos(0);
