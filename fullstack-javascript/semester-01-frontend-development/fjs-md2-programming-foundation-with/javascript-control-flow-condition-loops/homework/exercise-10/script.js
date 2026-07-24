const targetNumber = Math.floor(Math.random() * 100) + 1;
let hasWon = false;

for (let i = 1; i <= 5; i++) {
  const guess = Number(prompt(`Lần đoán thứ ${i} (1-100):`));

  if (guess === targetNumber) {
    console.log("Chúc mừng");
    hasWon = true;
    break;
  } else if (guess > targetNumber) {
    console.log("Số bạn đoán quá lớn");
  } else {
    console.log("Số bạn đoán quá nhỏ");
  }
}

if (!hasWon) {
  console.log("Game Over");
}
