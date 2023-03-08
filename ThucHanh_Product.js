// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
    console.log("Bài 1: In sản phẩm: ");
    function showAll() {
        products.forEach(e => {
            console.log(e.name + "-" + e.price + "-" + e.brand + "-" + e.count);
        });
    };
    showAll();

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
    let totalPrice = 0;
    products.forEach(e => {
        totalPrice+=e.price*e.count;
    })
    console.log("\n Bài 2: Tính tổng tiền tất cả sản phẩm: " + totalPrice);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
    console.log("\n Bài 3: Tìm sản phẩm của Apple: ")
    products.forEach(e => {
        if(e.brand.toLowerCase() === 'Apple'.toLowerCase()) {
            console.log(e.name + "-" + e.price + "-" + e.brand + "-" + e.count);
        };
    })    

// 4. Tìm các sản phẩm có giá > 20000000
    console.log("\n Bài 4: Tìm sản phẩm có giá > 20000000: ")
    products.forEach(e => {
        if(e.price > 20000000) {
            console.log(e.name + "-" + e.price + "-" + e.brand + "-" + e.count);
        };
    }) 

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
    console.log("\n Bài 5: tìm sản phẩm có chữ 'pro'");
    products.forEach(e => {
        if(e.name.toLowerCase().includes("pro")) {
            console.log(e.name + "-" + e.price + "-" + e.brand + "-" + e.count);
        };
    })

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
    let product = {
        name: "Iphone 15",
        price: 40000000,
        brand: "Apple",
        count: 2,
    }
    products.push(product);

    console.log("\n Bài 6: Thêm một sản phẩm: ");
    showAll();

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
    for(let i =0; i< products.length;i++) {
        if(products[i].brand.toLowerCase() === ("samsung")) {
            products.splice(i,1);
        }
    }

    console.log("\n Bài 7: Xoá sản phẩm thương hiệu Samsung: ");
    showAll();

// 8. Sắp xếp giỏ hàng theo price tăng dần
    products.sort((a,b) => (a.price - b.price));

    console.log("\n Bài 8: Sắp xếp giỏ hàng theo price tăng dần");
    showAll();

// 9. Sắp xếp giỏ hàng theo count giảm dần
    products.sort((a,b) => b.count-a.count);

    console.log("\n Bài 9: Sắp xếp giỏ hàng theo count giảm dần: ");
    showAll();

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
    let i = Math.floor(Math.random()*(products.length-1));
    products.splice(i,1);

    let j = Math.floor(Math.random()*(products.length-1));
    products.splice(j,1);

    console.log("\n Bài 10: Lấy 2 sản phẩm bất kì, chọn sản phẩm index = " + i + " và " + j);
    showAll();