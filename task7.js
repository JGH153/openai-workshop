function task7(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(task7([1, 2, 3, 4, 5]), task7([1, 2, 3, 4, 5]) === 15);
