// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
    let boxes = document.querySelector('.boxes');
    let colors = [
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
        ]

    function addMoreBox() {
        for(let i=0; i<colors.length;i++) {
            let newBox = document.createElement('div');
            newBox.className = 'box';
            newBox.style.backgroundColor = colors[i];
            boxes.appendChild(newBox);
        }
    }
    addMoreBox();

// Cập nhật số lượng total box trong thẻ <span> có class “points”
    let point = Array.from(document.querySelectorAll('.box')).length;
    console.log(point);

    let pointDisplay = document.querySelector(".points");
    pointDisplay.innerText = point;

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
    function removeBox() {
        let box = document.querySelectorAll('.box');
        Array.from(box).map(e => {
            e.addEventListener('click',()=>{
                e.parentNode.removeChild(e);
                point--;
                pointDisplay.innerText = point;
            })
        })
    }
    removeBox();

// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
    let addButton = document.querySelector('button');
    addButton.addEventListener('click',()=>{
        addMoreBox();
        removeBox();
        point+=5;
        pointDisplay.innerText = point;
    })