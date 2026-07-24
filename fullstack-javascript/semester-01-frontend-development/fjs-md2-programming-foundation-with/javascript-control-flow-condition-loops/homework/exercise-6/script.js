const w = Number(prompt("Nhập chiều rộng (w):"));
const h = Number(prompt("Nhập chiều cao (h):"));

for (let i = 0; i < h; i++) {
  let row = "";
  for (let j = 0; j < w; j++) {
    row += "*";
  }
  console.log(row);
}
