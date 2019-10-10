const inventory = ['key', 'brick', 'mud']
function checkInventory(item) {
    let hasItem = false
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === item) {
            hasItem = true;
            break
         };
    };
    return hasItem;
};

console.log(`Do hou have the nail? ${checkInventory("nail")}`);