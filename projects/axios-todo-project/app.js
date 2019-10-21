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
    const editBtn = document.createElement('button');
    
    h2.textContent = todo.title;
    h2.className = 'item-title'
    
    p.textContent = todo.description;
    p.className = 'item-description'
    
    img.src = todo.imgUrl;
    img.className = 'item-image';
    
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', e => {
        let id = todo._id
        let completed;
        if (e.target.checked) {
            completed = {completed: true};
            h2.style.textDecoration = "line-through";
        } else {
            completed = {completed: false};
            h2.style.textDecoration = "initial"
        };
        axios.put('https://api.vschool.io/RobDeGeorge/todo/'+id, completed).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    })
    checkbox.checked = todo.completed;
    if (todo.completed) {
        h2.style.textDecoration = "line-through";
    } else {
        h2.style.textDecoration = "initial";
    };
    
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', function() {
        let id = todo._id;
        axios.delete("https://api.vschool.io/RobDeGeorge/todo/"+id).then(response => {
                console.log(response.data);
                //delete todo from document
                // this.parentNode.remove();
                listItem.remove()
            }).catch(error => {
                    console.log(error);
                });
    });

    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        // const editForm = document.createElement('form');
        const editTitle = document.createElement('input');
        const editDescription = document.createElement('input');
        const editImgURL = document.createElement('input');
        const saveBtn = document.createElement('button');

        saveBtn.textContent = 'Save';
        editTitle.value = h2.textContent;
        editDescription.value = p.textContent;
        editImgURL.value = img.src
        
        listItem.insertBefore(editTitle, h2.nextSibling);
        h2.style.display = 'none';
        listItem.insertBefore(editDescription, p.nextSibling)
        p.style.display = 'none';
        listItem.insertBefore(editImgURL, imgDiv.nextSibling)
        imgDiv.style.display = 'none';
        listItem.insertBefore(saveBtn, editBtn.nextSibling)
        editBtn.style.display = 'none';

        saveBtn.addEventListener('click', function() {
            let id = todo._id;
            let editedTodo = {
                title: editTitle.value,
                description: editDescription.value,
                imgUrl: editImgURL.value
            };
            axios.put('https://api.vschool.io/RobDeGeorge/todo/'+id, editedTodo).then(response => {
                console.log(response.data);
                
            }).catch(error => {
                console.log(error);
            });
            h2.textContent = editTitle.value;
            h2.style.display = 'inherit';
            p.textContent = editDescription.value;
            p.style.display = 'inherit';
            img.src = editImgURL.value;
            imgDiv.style.display = 'inherit';
            editBtn.style.display = 'inherit';

            saveBtn.remove();
            editTitle.remove();
            editDescription.remove();
            editImgURL.remove();
            saveBtn.remove();
        });
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(h2);
    listItem.appendChild(p);
    imgDiv.appendChild(img);
    listItem.appendChild(imgDiv);
    listItem.appendChild(editBtn);
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