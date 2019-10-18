
const editedTodo = {
    description: "This one got an EDIT"
};
const id = "5da9e58cd4e4965ba5098e4e"
axios.put("https://api.vschool.io/RobDeGeorge/todo/" + id, editedTodo).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});