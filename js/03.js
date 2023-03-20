const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let password = prompt('Введіть пароль для авторизації в панелі управління:', '');

if(password === null){
    message = "Відмінено користувачем!";
}
else if(password === ADMIN_PASSWORD){
    message = "Ласкаво просимо!";
}
else{
    message = "Доступ заборонено, невірний пароль!";
}
alert(message);