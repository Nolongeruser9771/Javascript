// Yêu cầu 1: Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ (HTML-attribute))
    function changeContent() {
        let btn1= document.getElementById('btn-1');
        btn1.innerText = 'Already changed content!';
    }

// Yêu cầu 2: Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX) (DOM property)
    function hexCodeRandom(){
        let hexRange = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let hexCode ="#";
        let i = 0;
        while(i<=5) {
            let randomCode = Math.floor(Math.random()*15);
            hexCode += hexRange[randomCode];
            i++;
        }
        return hexCode;
    }
    
    let btn2 = document.getElementById('btn-2');
    btn2.onclick = function changeColor() {
        let hexCode = hexCodeRandom();
        btn2.style.color = hexCode;
        console.log(hexCode);
        
    }

// Yêu cầu 3: Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)
    function rgbCodeRandom() {
        let rgb = [];
        let i = 0;
        while(i<3) {
            rgb[i] = Math.floor(Math.random()*256);
            i++;
        }
        return "rgb(" + rgb[0] + "," + rgb[1] +"," + rgb[2] + ")";
    }
    let btn3 = document.getElementById('btn-3');
    btn3.addEventListener('click', function() {
        let rgb = rgbCodeRandom();
        console.log(rgb);
        btn3.style.backgroundColor = rgb;
    })

// 4. Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
    