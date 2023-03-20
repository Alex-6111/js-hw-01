const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt("Введіть число дроїдів для покупки");
let totalPrice = numberOfDroids * pricePerDroid;
let creditsLeft = 0;

if(numberOfDroids === null){
    console.log("Відмінено користувачем!");
}
else if(totalPrice > credits){
    console.log("Недостатньо коштів на рахунку!");
}
else{
    creditsLeft = credits - totalPrice;
    console.log(`Ви купили ${numberOfDroids} дроїдів, на рахунку залишилось ${creditsLeft} кредитів.`);
}