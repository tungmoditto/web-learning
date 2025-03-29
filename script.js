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
