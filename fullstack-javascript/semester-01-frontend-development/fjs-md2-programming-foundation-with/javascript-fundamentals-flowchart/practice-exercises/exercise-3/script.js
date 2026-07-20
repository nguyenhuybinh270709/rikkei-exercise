let a = Number(prompt("Nhập vào số a:"));
let b = Number(prompt("Nhập vào số b:"));

let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = b !== 0 ? a / b : "Không thể chia cho 0";
let soDu = b !== 0 ? a % b : "Không thể chia lấy dư cho 0";

console.log(`--- Kết quả phép tính giữa ${a} và ${b} ---`);
console.log(`Tổng (${a} + ${b})   =`, tong);
console.log(`Hiệu (${a} - ${b})   =`, hieu);
console.log(`Tích (${a} * ${b})   =`, tich);
console.log(`Thương (${a} / ${b})  =`, thuong);
console.log(`Số dư (${a} % ${b})   =`, soDu);
