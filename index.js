// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

const createCounter = () => {
  let counterValue = 5;
  modValue = (val) => (counterValue += val);

  return {
    increment: () => modValue(1),
    decrement: () => modValue(-1),
    value: () => counterValue,
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.increment();
console.log(counter.value());

/* 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала) */

const factorial = (num) => {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(3));
