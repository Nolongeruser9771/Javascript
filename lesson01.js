//Bài 1
let n1;
do {
    n1 = parseFloat(prompt("Nhập 1 số nguyên dương"));
} while(!Number.isInteger(n1) || n1<0);

function calculateFactorial(n) {
    let fatorial = 1;
    for(let i=1; i<=n;i++) {
        fatorial *=i;
    }
    return fatorial;
}
console.log("Giai thừa của " + n1 + " là: " + calculateFactorial(n1));

//Bài 2
let string = prompt("NhậP 1 chuỗi bất kì");

function reverseString(string) {
    let reverseString ="";
    for(let i = string.length-1; i>=0; i--) {
        reverseString+=string.charAt(i);
    }
    return reverseString;
}
console.log("Chuỗi đảo ngược là: " + reverseString(string));

//Bài 3
let countryCode = prompt("Nhập mã quốc gia");

function translate(code) {
    let greeting;
    switch(code.toLowerCase()) {
        
        case "vn":
            greeting ="Xin chào";
            break;
        case "en":
            greeting ="Hello";
            break;  
        case "jp":
            greeting ="Konichiwa";
            break;  
        case "fr":
            greeting ="Bonjour";
            break;
        default:
            greeting = "Undefined translate!"
    }
    return greeting;
}

console.log(translate(countryCode));

//Bài 4:
let s;
do {
    s = prompt("Nhập chuỗi dài hơn 15 kí tự");
} while(s.length<15);

function subString(s) {
    return s.substring(0,10) +"...";
}

console.log("Chuỗi rút gon: " + subString(s));