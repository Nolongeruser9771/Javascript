// Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label'); 

label1.innerText ='Username';
label2.innerText ='Password';
label3.innerText ='Confirm password';

let input = document.querySelectorAll('input');
input[0].insertAdjacentElement('beforebegin',label1);
input[1].insertAdjacentElement('beforebegin',label2);
input[2].insertAdjacentElement('beforebegin',label3);

console.log(label1.parentNode)

// Kiểm tra xem password và confirm pass có trùng nhau hay không
let passValue ="";
let passConfirm = "";

input[1].addEventListener('keyup',()=>{
    passValue = input[1].value;
}) 

input[2].addEventListener('keyup',()=> {
    passConfirm = input[2].value;
})

function isValidPassword(passValue, passConfirm) {
    if(passValue==passConfirm && passValue!="") {
        return true;
    } else return false;
}

// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công

let submit = document.querySelector("#btn");
submit.disabled = true;

Array.from(input).map(i => {
    i.addEventListener('keyup',()=>{
        if(input[0].value!="" && input[1].value!="" && input[2].value!="") {
            submit.disabled = false;
        } else{
            submit.disabled = true;
        }
    })
})

submit.addEventListener('click',()=>{
    if(isValidPassword(passValue, passConfirm)) {
        alert("Đăng kí thành công!")
    } else{
        alert("Sai mật khẩu");
    }
})



