//Bài 1: Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
    a = ['aba', 'aa', 'ad', 'c', 'vcd'];
    function getStringHasMaxLength(a) {
        let max = a[0].length;
        let maxLeng = [];
        Array.from(a).map( ai => {
            if(ai.length > max) max = ai.length;
        })
        console.log(max)
        a.forEach(ai => {
            if(ai.length==max) {
                maxLeng.push(ai);
            }
        })
        return maxLeng;
    }

    console.log(getStringHasMaxLength(a));

//Bài 2: 
    users = [
        {
            name: "Bùi Công Sơn",
            age: 30,
            isStatus: true
        },
        {
            name: "Nguyễn Thu Hằng",
            age: 27,
            isStatus: false
        },
        {
            name: "Phạm Văn Dũng",
            age: 20,
            isStatus: false
        }
    ]
//Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
    function userFilter(users) {
        let userFilter = [];
        users.forEach(u => {
            if(u.age > 25 && u.isStatus==true)  {
                userFilter.push(u);
            }
        })
        return userFilter;
    }
console.log(userFilter(users));

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
    function userSort(users) {
        users.sort((a,b) => (a.age-b.age))
        return users;
    }
    console.log(userSort(users));

//Bài 3: Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
    let elements = ["one", "two", "three", "one", "one", "three"];

    function objCreate(elements) {

        let uniqueEles =[];

        elements.forEach(e=>{
            if(!uniqueEles.includes(e)) {
                uniqueEles.push(e)
            }
        })

        let eleObj = {key:value};

        uniqueEles.forEach(e=>{
            eleObj.key = e;
            eleObj.value = function (e) {
                count =0;
                elements.forEach(eles => {
                    if(eles==e) {
                        count++;
                    }
                    return count;
                })
            }
        })

        return eleObj;
    }

