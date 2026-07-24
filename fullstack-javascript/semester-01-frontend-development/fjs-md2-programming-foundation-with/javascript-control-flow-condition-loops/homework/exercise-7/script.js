const salary = Number(prompt("Nhập số tiền lương (triệu):"));
const age = Number(prompt("Nhập độ tuổi:"));
const badDebt = prompt("Trạng thái nợ xấu (Yes/No):");

const isEligible =
  salary > 15 &&
  age >= 18 &&
  age <= 60 &&
  badDebt.trim().toLowerCase() === "no";

const result = isEligible
  ? "Đủ điều kiện vay vốn"
  : "Không đủ điều kiện vay vốn";
console.log(result);
