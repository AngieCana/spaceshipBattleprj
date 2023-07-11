class Ship{
  constructor(shiphull, firepower, accuracy){
    this.shiphull = shiphull
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  fire(target){
    if(Math.random() < this.accuracy){
      target.shiphull -= this.firepower;
    }
  }
}

const rougeOne = new Ship (20, 5, .7);

const getClass = document.getElementsByClassName('ship-data').innerHTML = 'Your ship has 20 health, 5 firepower, and .7 accuracy.';


console.log(rougeOne);

//creating enemy class extending from parent class and changing the values of the same parameters 
// class Aliens extends Ship {
//   constructor(){
//     super(Math.floor(Math.random()* 7 - 3)+3,Math.floor(Math.random()*(5-2))+2, (Math.random()*(.8-.6))+.6);
//   }

// }

//creating another class with the same parameters but different values

class Aliens {
  constructor(){
    this.ships = []
  }

    addAliens(){

    this.shiphull = Math.round(Math.random()*(6 - 3) + 3);//enemy hull is between 3 & 6
    this.firepower = Math.round(Math.random()*(4 - 2) + 2);// enemy firepower is between 2 & 4
    this.accuracy =  (Math.random()*(.6 - .8) + .8).toFixed(1)//enemy accuracy is between .6  & .8
    this.ships.push(new Ship(this.shiphull, this.firepower, this.accuracy));
    }
  }

//random number 1-20

// const randomNumber = Math.floor(Math.random)

let enemyAliens = new Aliens();

enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();

console.log(enemyAliens);

//todo create attack function 

const attackAliens = () => {
  let enemyFleet = enemyAliens.ships; 
  for (let i = 0; i < enemyAliens.ships.length; i++){
    //todo need to check if our ship is destroyed, if destroyed then lose game, if not keep fighting 
    if (rougeOne.shiphull <= 0) {
      console.log("Game Over, your ship has been destroyed");
      break;
    }
    while(rougeOne.shiphull >  0 || enemyFleet[i].shiphull > 0){
      if(Math.random() <  rougeOne.accuracy){
        enemyAliens.ships[i].shiphull = enemyAliens.ships[i].shiphull - rougeOne.firepower
      }
      //todo need to check if enemy alien ships are destroyed, if yes then break and go to the next ship
      for (let i = 0; i< enemyAliens.ships.length; i++){
        if (enemyAliens.ships[i].shiphull <= 0) {
          
          document.addEventListener("DOMContentLoaded", function(){
          const result = document.getElementById("p-js-result");
          result.innerHTML = 'Hooray, the enemy alien has been destroyed';
          console.log("Hooray, enemy alien has been destroyed");
          return;
          });
        }}
      if (Math.random() < enemyAliens.ships[i].accuracy) {
         rougeOne.shiphull = rougeOne.shiphull - enemyAliens.ships[i].firepower;
      }
      if (rougeOne.shiphull <= 0) {
        document.addEventListener("DOMContentLoaded", function(){
          const result = document.getElementById('p-js-result');
          result.innerHTML = 'Game Over, your ship has been destroyed'
        console.log("Game Over, your ship has been destroyed");
        return;
        });
      }
    }
  }
}

attackAliens();

