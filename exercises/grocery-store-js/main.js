let shopper = {
    name: "Billy",
    age: 25,
    isHungry: true,
    groceryCart: ["Potato Chips", "Gummy Bears", "Pizza"],
    likelyToImpulseBuy: function() {
        this.isHungry ? return true : return false; 
    }
};