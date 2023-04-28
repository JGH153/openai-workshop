// return string with space seperator after trimming the array of strings
function task6(listOfWords) {
  const trimmedList = listOfWords.map((word) => word.trim());
  return trimmedList.join(" ");
}

console.log(
  task6(["Hello", "World"]),
  task6(["Hello", "World"]) === "Hello World"
);

console.log(
  task6(["Dette ", "er ", "en ", "kreativ ", "setning."]) ===
    "Dette er en kreativ setning."
);
