const choice = Number(
  prompt("Chọn món:\n1. Cafe\n2. Cam vắt\n3. Trà sữa\n4. Coca"),
);

switch (choice) {
  case 1:
    console.log("Cafe");
    break;
  case 2:
    console.log("Cam vắt");
    break;
  case 3:
    console.log("Trà sữa");
    break;
  case 4:
    console.log("Coca");
    break;
  default:
    console.log("Món ăn không tồn tại");
    break;
}
