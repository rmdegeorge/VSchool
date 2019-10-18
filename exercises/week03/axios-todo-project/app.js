const list = document.getElementById('list');
axios.get("https://api.vschool.io/RobDeGeorge/todo/").then(response => {
    const todos = response.data;
    console.log(todos);
    for (let i = 0; i< todos.length; i++) {
        makeTodo(todos[i]);
    }
})
function makeTodo(todo) {
    /**Build a function that:
     * create or select a DOM element
     * edit element
     * append
     */

    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const checkbox = document.createElement('input');
    const delBtn = document.createElement('button');
    


    h2.textContent = todo.title;
    
    p.textContent = todo.description;
    
    img.src = todo.imgUrl;
    img.className = 'item-image';
    
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;


    if (todo.completed) {
        h2.style.textDecoration = "line-through"
    }


    listItem.appendChild(checkbox);
    listItem.appendChild(h2);
    listItem.appendChild(p);
    listItem.appendChild(img);
    

    list.appendChild(listItem);
};



const form = document.getElementsByName('add-list-item')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
        title: '',
        
    }
})