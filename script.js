function bai1() {
    const name = "Tùng", age = 22, isStudent = true;
    console.log({ name, age, isStudent });
}

function bai2() {
    const input = prompt("Nhập số:");
    const numberValue = Number(input);
    console.log({ input, numberValue, type: typeof numberValue });
}

function bai3() {
    const num1 = Number(prompt("Nhập số thứ nhất:"));
    const num2 = Number(prompt("Nhập số thứ hai:"));
    console.log({ tổng: num1 + num2, hiệu: num1 - num2, tích: num1 * num2, thương: num2 ? num1 / num2 : "Lỗi chia 0" });
}

function bai4() {
    const a = Number(prompt("Nhập số thứ nhất:"));
    const b = Number(prompt("Nhập số thứ hai:"));
    console.log("Số thứ nhất lớn hơn số thứ hai:", a > b);
}

function bai5() {
    const num = Number(prompt("Nhập một số:"));
    console.log("Số có nằm trong khoảng 10 - 100 không?", num >= 10 && num <= 100);
}

function bai6() {
    const num = Number(prompt("Nhập một số:"));
    console.log(num % 2 === 0 ? "Số chẵn" : "Số lẻ");
}

function bai7() {
    const a = Number(prompt("Nhập số thứ nhất:"));
    const b = Number(prompt("Nhập số thứ hai:"));
    console.log({ tổng: a + b, hiệu: a - b, tích: a * b, thương: b ? a / b : "Lỗi chia 0" });
}

function bai8() {
    const num = Number(prompt("Nhập một số:"));
    if (num < 2) return console.log(false);
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return console.log(false);
    console.log(true);
}

function bai9() {
    const n = Number(prompt("Nhập số nguyên dương:"));
    if (n < 0) return console.log("Không có giai thừa cho số âm!");
    let gt = 1;
    for (let i = 1; i <= n; i++) gt *= i;
    console.log(`Giai thừa của ${n} là:`, gt);
}

function bai10() {
    const value = prompt("Nhập dữ liệu bất kỳ:");
    console.log(`Kiểu dữ liệu của "${value}" là:`, typeof value);
}

function bai11() {
    const str = prompt("Nhập chuỗi:");
    let newStr = "";
    for (let char of str) {
        newStr += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
    console.log(newStr);
}

function bai12() {
    const num = prompt("Nhập một giá trị:");
    console.log("Có phải số nguyên không?", Number.isInteger(Number(num)));
}

function bai13() {
    const n = Number(prompt("Nhập số n:"));
    if (n < 0) return console.log("Không có Fibonacci số âm!");
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    console.log(`Số Fibonacci thứ ${n} là:`, n === 0 ? 0 : b);
}

function bai14() {
    const r = Number(prompt("Nhập bán kính hình tròn:"));
    console.log(`Diện tích hình tròn:`, Math.PI * r * r);
}

  
  
  function handleChangeColor(color) {
    const boxColor = document.getElementById("box-color");
    boxColor.style.backgroundColor = color;
  }
  
  const buttonRed = document.getElementById("button-red");
  if (buttonRed) {
    buttonRed.addEventListener("click", () =>{handleChangeColor("red")});
  }
  
  const buttonBlue = document.getElementById("button-blue");
  if (buttonBlue) {
    buttonBlue.addEventListener("click", () =>{handleChangeColor("blue")});
  }
    const image = {
        url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" ,
        price: 20000,
        unit: "USD",
        id: 1,
    }
    image.price = 50000
    image.color = "red"
    delete image.url
    const {url, price, unit, color} = image
    console.log(
    url, price, unit, color 
)



let student = {
    name: "Tùng",
    age: 22,
    school: "Trường Đại học Ngoại ngữ"
  };
  
 
  console.log(student);
  
 
  student.gender = "Tùng";
  console.log("Sau khi thêm:", student);
  
  
  student.age = 22;
  console.log("Sau khi sửa:", student);
  
  
  delete student.school;
  console.log("Sau khi xóa:", student);



  
  let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Đen",
    price: "800 triệu"
  };
  
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }





  function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
  }
  
  
  let person = { name: "Tùng", age: 22 };
  console.log(hasProperty(person, "name")); 
  console.log(hasProperty(person, "height")); 
  
  


  let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        return "Ko chia duoc cho 0";
      }
      return a / b;
    }
  };
  
  
  console.log(calculator.add(2, 3)); 
  console.log(calculator.divide(10, 0)); 

  




  function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  let book1 = new Book("PPPPPP", "BBBBB", 1881);
  let book2 = new Book("AAAAAA", "CCCCC", 1888);
  
  console.log(book1);
  console.log(book2);

  





  let original = { name: "Tùng", age: 22 };


let clone1 = Object.assign({}, original);


let clone2 = { ...original };


let clone3 = JSON.parse(JSON.stringify(original));

console.log(clone1, clone2, clone3);








let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

function mergeObjects(o1, o2) {
  return { ...o1, ...o2 };
}

let merged = mergeObjects(obj1, obj2);
console.log(merged); 







function countKeys(obj) {
    return Object.keys(obj).length;
  }
  
  let user = { name: "Tùng", age: 22, city: "Hà Nội" };
  console.log(countKeys(user)); 
  