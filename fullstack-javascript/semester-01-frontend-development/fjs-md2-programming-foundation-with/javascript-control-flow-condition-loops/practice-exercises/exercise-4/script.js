let sum = 0;
let number = Number(prompt("Nhập vào một số (nhập 0 để dừng):"));

while (number !== 0) {
  sum += number;
  number = Number(prompt("Nhập vào một số (nhập 0 để dừng):"));
}

console.log("Tổng cuối cùng:", sum);
