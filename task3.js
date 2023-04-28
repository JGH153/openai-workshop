function task3() {
  return ["Rød", "Blå", "Gul", "Oransje"];
}

const colors = ["Rød", "Blå", "Gul", "Oransje"];
console.log(task3().every((current, index) => colors[index] === current));
