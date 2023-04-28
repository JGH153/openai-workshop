function task10(number) {
  if (number === null) {
    return null;
  }
  return number > 100;
}

console.log(task10(101), task10(101) === true);
console.log(task10(100), task10(100) === false);
console.log(task10(99), task10(99) === false);
console.log(task10(0), task10(0) === false);
console.log(task10(-1), task10(-1) === false);
console.log(task10(null), task10(null) === null);
console.log(task10(undefined), task10(undefined) === false);
console.log(task10("101"), task10("101") === false);
