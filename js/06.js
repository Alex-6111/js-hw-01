let input;
let total = 0;

while (input !== null) {
  input = prompt('Введіть число');
  if (input === null) {
    alert(`Загальна сума чисел дорівнює ${total}`);
  } else if (isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    total += +input;
  }
}
