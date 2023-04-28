function task1(multiple1, multiple2, max) {
  let sum = 0;
  for (let i = 1; i < max; i++) {
    if (i % multiple1 === 0 || i % multiple2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(task1(3, 5, 1000));
