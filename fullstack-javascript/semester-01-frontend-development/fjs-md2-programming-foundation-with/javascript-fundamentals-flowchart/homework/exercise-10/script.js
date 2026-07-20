let numberA = Number(prompt("Nhập số thứ nhất:"));
let operator = prompt("Nhập phép tính (+, -, *, /):");
let numberB = Number(prompt("Nhập số thứ hai:"));

let result;

if (operator === "+") {
  result = numberA + numberB;
} else if (operator === "-") {
  result = numberA - numberB;
} else if (operator === "*") {
  result = numberA * numberB;
} else if (operator === "/") {
  result = numberB !== 0 ? numberA / numberB : "Không thể chia cho 0";
} else {
  result = "Phép tính không hợp lệ";
}

alert(`Kết quả của ${numberA} ${operator} ${numberB} là: ${result}`);
