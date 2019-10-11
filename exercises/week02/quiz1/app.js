var str = "Hello my name is Albert";
const removeString = (inputStr,strToRemove, strToReplaceWith) => {
    let array = inputStr.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === strToRemove) {
            array.splice(i,1,strToReplaceWith);
        };
    }
    return array.join(' ');
}
console.log(removeString(str,"Albert","Rob"))