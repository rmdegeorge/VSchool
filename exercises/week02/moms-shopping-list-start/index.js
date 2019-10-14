const form = document.getElementById('add-todo');
const input = document.getElementById('title');
const list = document.getElementById('list');
const editButtons = document.getElementsByClassName('edit');
const deleteButtons = document.getElementsByClassName('delete');

form.addEventListener('submit', () => {
    event.preventDefault();
    let newListItem = document.createElement("li");
    let itemDiv = document.createElement('div');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    itemDiv.textContent = input.value;
    editBtn.textContent = 'edit';
    deleteBtn.textContent = 'X';
    list.appendChild(newListItem);
    newListItem.appendChild(itemDiv);
    newListItem.appendChild(editBtn).addEventListener('click', function() {
        //change text to input box
        let newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('value', this.parentElement.childNodes[0].nodeValue);
        this.parentElement.replaceChild(newInput, this.parentElement.childNodes[0]);
        //change edit button to save button
        let saveBtn = document.createElement('button');
        saveBtn.textContent = "Save"
        saveBtn.addEventListener('click', function() {
            //change input box back to text
            let newDiv = document.createElement('div');
            newDiv.textContent = this.parentElement.childNodes[0].nodeValue;
            this.parentElement.replaceChild(newDiv, this.parentElement.childNodes[0]);
            //change save button back to edit button
            let editBtn = document.createElement('button');
            editBtn.textContent = 'edit'
            editButtons.addEventListener()
        })

        this.parentElement.replaceChild(saveBtn, this.parentElement.childNodes[1]);
    });
    newListItem.appendChild(deleteBtn).addEventListener('click', function() {
        this.parentElement.remove();
    });
});

// This is only needed if the html is pre-populated with items already in the list
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
        event.preventDefault();
        this.parentElement.remove();
    });
};

for (let i =0; i < editButtons.length; i++) {
    editButtons.addEventListener('click', function() {
        let editInput = document.createElement('input');
        editInput.setAttribute('type', 'text');
        editInput.setAttribute('value', this.parentElement.firstChild.value);
        this.parentElement.insertBefore(editInput, this.parentElement.childNodes[0]);
        this.parentElement.firstChild.remove();
    });
};

