function task2(index) {
  let count = 0;
  let number = 2;

  while (count < index) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
      if (count === index) {
        return number;
      }
    }
    number++;
  }
}

console.log(task2(10001) === 104743);
