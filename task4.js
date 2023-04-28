function task4(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimalValue = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentCharValue = romanNumeralsMap[romanNumeral[i]];
    const nextCharValue = romanNumeralsMap[romanNumeral[i + 1]];
    if (nextCharValue && currentCharValue < nextCharValue) {
      decimalValue -= currentCharValue;
    } else {
      decimalValue += currentCharValue;
    }
  }
  return decimalValue;
}

console.log(task4("MCMXCVI"), task4("MCMXCVI") === 1996);
console.log(task4("MMXXI"), task4("MMXXI") === 2021);
