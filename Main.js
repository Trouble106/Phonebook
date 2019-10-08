/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readLineSync = require("readline-sync");
var fs = require("fs");
var students = [];

function readData() {
  var text = fs.readFileSync("data.json", { encoding: "utf8" });
  var textString = JSON.parse(text);
  textString.student = students;

  fs.writeFileSync("data.json", text.String);

  console.log(textString);
}
function save() {
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, { encoding: "utf8" });
}
function getContact() {
  var name = readLineSync.question("Nhập tên: ");
  var number = readLineSync.question("Nhập số đt:");
  var student = {
    name: name,
    number: number
  };
  students.push(student);
  save();
  console.log("=========");
  console.log("Nhập thành công, quay trở lại menu chính");
}
function fixContact() {
  showAllContact();
  var selectFix = readLineSync.question("Nhập số thứ tự muốn sửa: ");
  console.log("Nhập nội dung muốn thay đổi: ");
  var name = readLineSync.question("Nhập tên: ");
  var number = readLineSync.question("Nhập số đt:");
  var student = {
    name: name,
    number: parseInt(number)
  };
  selectFix--;
  console.log(
    ` ${students[selectFix].name} => ${name}, ${students[selectFix].number} => ${number}`
  );
  students.splice(selectFix, 1, student);
  save();
  showAllContact();
}
function deleteContact() {
  showAllContact();
  var selectDelete = readLineSync.question("Nhập số thứ tự muốn xóa: ");
  if ((selectDelete < students.length) & (selectDelete > 0)) {
    selectDelete--;
    students.splice(selectDelete, 1);
    save();
    console.log("==========");
    console.log("Xóa thành công!!");
  } else {
    console.log("Nhập sai số");
    deleteContact();
  }
}
function findByName() {
  var find = readLineSync.question("Nhập số tên: ");
  var foundValue = students.filter(student => student.name === find);
  if (foundValue != "") {
    console.log(
      "tìm thấy",
      foundValue[0].name,
      "có số đt:",
      foundValue[0].number
    );
  } else {
    console.log("không tìm thấy");
    return false;
  }
}
function findByNumber() {
  var find = readLineSync.question("Nhập số đt: ");
  var foundValue = students.filter(student => student.number === find);
  if (foundValue != "") {
    console.log("tìm thấy", foundValue[0].name, "có số đt:", find);
  } else {
    console.log("không tìm thấy");
  }
}
function findContact() {
  console.log("Chọn tìm kiếm theo tên hoặc theo số điện thoại: ");
  console.log("1. Tìm kiếm theo tên");
  console.log("2. Tìm kiếm theo số điện thoại");
  var option = readLineSync.question("chọn 1 hoặc 2: ");
  switch (option) {
    case "1":
      findByName();
      break;
    case "2":
      findByNumber();
      break;
    default:
      console.log("Nhập sai!!!, bạn phải nhập lại");
      console.log("=========");
      findContact();
      break;
  }
}
function showAllContact() {
  console.log("==========");
  console.log("Danh sách các danh bạ");
  for (var i = 0; i < students.length; i++) {
    console.log(
      `Stt:${i + 1}, Tên: ${students[i].name}, số điện thoại: ${
        students[i].number
      }`
    );
  }
}

function readData() {
  var fileContent = fs.readFileSync("./data.json");
  students = JSON.parse(fileContent);
}

function showMenu() {
  readData();

  console.log("1. Nhập dữ liệu");
  console.log("2. Sửa dữ liệu");
  console.log("3. Xóa contactnode");
  console.log("4. Tìm Contact");
  console.log("5. Hiển thị toàn bộ danh sách");
  console.log("6. Thoát");
  console.log();
  function bkfds(fdksafd) {
    console.log(fdjksafds);
  }

  var option = readLineSync.question("Chọn 1 số từ 1-6: ");
  switch (option) {
    case "1":
      getContact();
      console.log("=========");
      break;
    case "2":
      fixContact();
      console.log("=========");
      break;
    case "3":
      deleteContact();
      console.log("=========");
      break;
    case "4":
      findContact();
      console.log("=========");
      break;
    case "5":
      showAllContact();
      console.log("=========");
      break;
    case "6":
      console.log("Thoát");
      process.exit(1);
      break;
    default:
      console.log("==========");
      console.log("Bạn buộc phải nhập các số từ 1 - 6");
      console.log("==========");
      break;
  }
}

function main() {
  showMenu();
}
while (true) {
  main();
}
