class Player{
  constructor(name,status='Small',totalCoins=0,hasStar=false,starStartTime,gameActive=true){
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.starStartTime = starStartTime;
    this.gameActive = gameActive;
  };
  setName(namePicked){
    this.name = namePicked;
  };
  gotHit(){
    //changes status -> status options: ['Powered Up' -> 'Big' -> 'Small' -> 'Dead']
    if (this.hasStar) {
      //hit does nothing
    } else if (this.status === 'Powered Up'){
      this.status = 'Big';
    } else if (this.status === 'Big') {
      this.status = 'Small';
    } else if (this.status === 'Small') {
      this.status = 'Dead';
      this.gameActive = false;
    };
  };
  gotPowerup(){
    // 'Small' -> 'Big' -> 'Powered Up' -> change hasStar=true
    if (this.status === 'Powered Up'){
      this.hasStar = true;
      //start star timer
      this.starStartTime = new Date().getTime();
    } else if (this.status === 'Big') {
      this.status = 'Powered Up';
    } else if (this.status === 'Small') {
      this.status = 'Big';
    };
  };
  addCoin(){
    this.totalCoins++;
  };
  print(){
    console.log(`\n\nName: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nHas Star: ${this.hasStar}\n\n`);
  };
};

const mario = new Player('Mario');
const luigi = new Player('Luigi');

const player = mario;

const myInterval = setInterval(() => {
  play();
  if (player.gameActive === false) {
    clearInterval(myInterval);
  }
},1000);

function play() {
  checkIfStarExpired();
  let num = Math.floor(Math.random()*3);
  if (num === 2) {
    player.gotHit();
  } else if (num ===1){
    player.gotPowerup();
  } else {
    player.addCoin();
  };
  player.print();
}

function checkIfStarExpired() {
  let currentTime = new Date().getTime();
  if (currentTime > player.starStartTime + 3000) {
    player.starStartTime = 0;
    player.hasStar = false;
  }
}