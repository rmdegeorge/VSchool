const list = document.getElementById('list');
function get(){
    axios.get("https://api.vschool.io/RobDeGeorge/todo/").then(response => {
        const todos = response.data;
        console.log(todos);
        for (let i = 0; i< todos.length; i++) {
            makeTodo(todos[i]);
        }
    })
}
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
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';
    const img = document.createElement('img');
    const checkbox = document.createElement('input');
    const delBtn = document.createElement('button');
    
    h2.textContent = todo.title;
    
    p.textContent = todo.description;
    
    img.src = todo.imgUrl;
    img.className = 'item-image';
    
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', e => {
        let id = todo._id
        let completed;
        if (e.target.checked) {
            completed = {completed: true};
        } else {
            completed = {completed: false};
        };
        axios.put('https://api.vschool.io/RobDeGeorge/todo/'+id, completed).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    })
    checkbox.checked = todo.completed;

    // Toggling the Checkbox should update the api .completed => checked=true unchecked=false
    
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', function() {
        let id = todo._id;
        axios.delete("https://api.vschool.io/RobDeGeorge/todo/"+id).then(response => {
                console.log(response.data);
                //delete todo from document
                this.parentNode.remove();
            }).catch(error => {
                    console.log(error);
                });
    });
            


    if (todo.completed) {
        h2.style.textDecoration = "line-through"
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(h2);
    listItem.appendChild(p);
    imgDiv.appendChild(img);
    listItem.appendChild(imgDiv);
    listItem.appendChild(delBtn);

    list.appendChild(listItem);
};
get();
const form = document.addListItem
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Create new todo Item, post it to the API, and add the todo to the page.
    const newTodo = {
        title: form.newTitle.value,
        description: form.newDescription.value,
        imgUrl: form.newImgUrl.value
    };
    axios.post('https://api.vschool.io/RobDeGeorge/todo/', newTodo).then(response => {
        console.log(response.data);
        makeTodo(newTodo);
    }).catch(error => {
        console.log(error);
    });
});