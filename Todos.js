var todos = ["item 1", "item 2", "item 3"];

//It should have a function to display todos
function displayTodo(){
    console.log("My todos: " + todos);
}

//It should have a function to add todos
function addTodos(value){
    todos.push(value);
    displayTodo();
}

//It should have a function to change todos.
function changeTodos(position, value){
    todos[position] = value;
    displayTodo();
}

//It should have a function to delete todos.
function deleteTodos(del){
    todos.splice(del,1);
    displayTodo();
}

//don't copy below

addTodos("");

changeTodos(0, "");

deleteTodos(0);
