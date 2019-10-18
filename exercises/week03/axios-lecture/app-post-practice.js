//const axios = require("axios");

const newTodo = {
    title: "Go Shopping",
    description: "Harmons"
}
axios.post('https://api.vschool.io/RobDeGeorge/todo/', newTodo).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});

