//Câu 3. Thực hiện yêu cầu bên dưới bằng Javascript
    // 3-1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
    let ulList = document.querySelector('#list');
    for(let i = 8;i<=10;i++) {
        let li = document.createElement('li');
        li.innerText =`Item ${i}`;
        ulList.appendChild(li);
    }

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

// Câu 4: Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
    let add = document.createElement('button');
    add.innerText = 'add';

    let input = document.createElement('input');
    input.type = 'text';

    document.body.appendChild(add);
    document.body.appendChild(input);

    add.addEventListener('click',()=>{
        if(input.value!="") {
            let newItem = document.createElement('li');
            newItem.innerText = input.value;

            ulList.appendChild(newItem);
            input.value = "";
        }
    })
    
// Câu 5: Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
    let remove = document.createElement('button');
    remove.innerText ='remove';
    input.insertAdjacentElement('afterend',remove);

    remove.addEventListener('click', ()=> {
        let removeLi = document.querySelector('#list li:last-child');
        console.log(removeLi);
        removeLi.parentNode.removeChild(removeLi);
    })

// Câu 6: Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
    let hide = document.createElement('button');
    hide.innerText = 'hide';
    ulList.insertAdjacentElement('beforebegin',hide);

// Câu 7: Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Câu 8: Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”
    hide.addEventListener('click',()=>{
        ulList.classList.toggle('display');
        if(hide.innerText=='hide') {
            hide.innerText = 'show'
        } else {
            hide.innerText = 'hide';
        }
    })
