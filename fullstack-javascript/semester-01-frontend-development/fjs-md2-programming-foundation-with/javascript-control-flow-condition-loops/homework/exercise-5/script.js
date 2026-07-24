let number;
do {
  number = Number(prompt("Nhập một số trong khoảng từ 1 đến 10:"));
} while (isNaN(number) || number < 1 || number > 10);

console.log("Số hợp lệ bạn đã nhập là: " + number);
