//1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
    let heading = document.getElementById('heading');
    heading.style.color = 'red';
    heading.style.textTransform = 'uppercase';
//2. Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
    let para = document.querySelectorAll('.para')
    console.log(para);
    for(let i=0; i<para.length;i++) {
        para[i].style.color = 'blue';
        para[i].style.fontSize = '20px';
    }
//3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
    let a = document.createElement('a');
    a.href = 'https://www.facebook.com/';
    a.innerHTML = 'FB Click here!';

    let div = document.querySelector('div');
    document.body.insertBefore(a,div);

        // let para3 = document.querySelector('.para:nth-child(4)');
        // para3.insertAdjacentElement("afterend", a);

//4. Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
    let title = document.getElementById('title');
    title.innerText = 'Đây là thẻ tiêu đề';

//5. Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
    let descript = document.querySelector('.description');
    descript.classList.add('text-bold');
//6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
    let button = document.createElement('button');
    button.innerHTML = 'Click me';

    let para3 = document.querySelector('.para:nth-child(4)');
    para3.parentNode.replaceChild(button, para3);

//7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
    let para2 = document.querySelector('.para:nth-child(3)');
    let para2Copy = para2.cloneNode(true);

    para2.insertAdjacentElement("afterend",para2Copy);

//8. Xóa thẻ có class=“para-1”
    let para1 = document.querySelector('.para:nth-child(2)');
    para1.parentNode.removeChild(para1);

    console.log("parent = " + para1.parentNode);