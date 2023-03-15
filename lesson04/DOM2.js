// 1. Một tính năng mới vào gói Pro: ‘24/7 Phone support’
    let pro = document.querySelector('ul');
    console.log(pro);

    let newProPackage = document.createElement('li');
    newProPackage.innerText = "24/7 Phone support";

    pro.appendChild(newProPackage);

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
    let title = document.querySelectorAll('h3');
    title[0].innerText = 'basic';
    title[1].innerText = 'pro';

// 3. Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
    let getStartButton = document.querySelector('button');
    getStartButton.style.backgroundColor = '#0984e3';
    getStartButton.style.color = '#fff';

    getStartButton.innerHTML = 'Get Started - Buy Now';

// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
    let GB = document.querySelectorAll('ul span');
    let proGB = GB[0].innerText;
    let basicGB = GB[1].innerText;

    GB[0].innerText = GB[0].innerText.replace(proGB, proGB*1.25);
    GB[1].innerText = GB[1].innerText.replace(basicGB,basicGB*1.5);
