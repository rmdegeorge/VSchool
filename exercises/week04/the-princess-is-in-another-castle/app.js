class Player{
    constructor(name,totalCoins,status,hasStar,gameActive=true){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        
    }
    gotPowerup(){

    }
    addCoin(){

    }
    print(){
        console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nHas Star: ${this.hasStar}`)
    }
}