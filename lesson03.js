//Câu 1. Tạo 1 thẻ p có id=“text”, color = '#777', font-size = '2rem'
        // innerText = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'
    let p = document.createElement('p');
    p.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
    p.style.color = '#777';
    p.style.fontSize = '2rem';

    document.body.prepend(p);

//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue
    let list = document.querySelectorAll('ul:nth-child(2) li');
    
    for(let i=0; i<3;i++) {
        list[i].style.color = 'blue';
    }

    // Array.from(list).map(li => {
    //     li.style.color = 'blue';
    // })

//Câu 3. Thực hiện yêu cầu bên dưới bằng Javascript
    // 3-1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
    let li8 = document.createElement('li');
    let li9 = document.createElement('li');
    let li10 = document.createElement('li');

    li8.innerText = 'Item 8';
    li9.innerText = 'Item 9';
    li10.innerText = 'Item 10';

    let ulList = document.getElementById('list');
    ulList.appendChild(li8);
    ulList.appendChild(li9);
    ulList.appendChild(li10);

    // 3-2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
    let li1= document.querySelector('#list li:first-child');
    li1.style.color = 'red';

    // 3-3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
    let li3 = document.querySelector('#list li:nth-child(3)');
    li3.style.backgroundColor = 'blue';
    li3.style.width = '100px';

    // 3-4. Remove thẻ <li> 4
    let li4 = document.querySelector('#list li:nth-child(4)');
    ulList.removeChild(li4);

    // 3-5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
    let newLi = document.createElement('li');
    newLi.innerText = 'New Item';

    li3.insertAdjacentElement('afterend',newLi);