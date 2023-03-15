// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
let p = document.querySelector('p');
let content = p.innerText.split(" ").map(e =>
    e.length>=8? `<span style= "background-color: yellow">${e}</span>`:e).join(" ");

p.innerHTML = content;

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
let text = document.createElement('a');
text.innerText = "facebook";
text.href = 'https://www.facebook.com/';

p.insertAdjacentElement('afterend',text);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let word = p.innerText.split(" ").length;
let wordNumber =  document.createElement('div');
wordNumber.innerText = "words: " + word;

p.insertAdjacentElement('beforebegin',wordNumber);

// Thay thế ký hiệu ? => 🤔, ! => 😲
p.innerHTML = p.innerHTML.replace(/\!/g,'😲');