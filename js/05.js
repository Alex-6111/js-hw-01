let country = prompt("Введіть країну доставки:");
let price = 0;

switch(country.toLowerCase()){
    case "китай":
        price = 100;
        break;
    case "чилі":
        price = 250;
        break;
    case "австралія":
        price = 170;
        break;
    case "індія":
        price = 80;
        break;
    case "ямайка":
        price = 120;
        break;
    default:
        alert("В вашу країну доставки немає!");
}

if(price){
    alert(`Доставка в ${country} буде коштувати ${price} кредитів.`);
}
