

const id = "5da9e527d4e4965ba5098e29"


axios.delete("https://api.vschool.io/RobDeGeorge/todo/" + id).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
