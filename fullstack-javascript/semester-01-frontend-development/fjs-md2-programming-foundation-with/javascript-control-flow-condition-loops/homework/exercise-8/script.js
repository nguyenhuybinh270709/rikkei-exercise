let sum = 0;
let output = "";

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    continue;
  }

  if (sum + i > 200) {
    break;
  }

  sum += i;
  output += i + " ";
}

console.log("Danh sách số:", output.trim());
console.log("Tổng cuối cùng:", sum);
