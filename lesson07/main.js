const provinceChoice = document.getElementById("province");
const districtChoice = document.getElementById("district");
const communeChoice = document.getElementById("commune");


//1. Vừa vào trang gọi API load danh sách tỉnh - thành phố (province) và hiển thị lên trên giao diện

    //load danh sách tỉnh - thành phố ̣province
    async function getRandomProvince() {
        try {
            let provinceList = await axios.get("https://provinces.open-api.vn/api/p/")
            renderProvince(provinceList.data);

        } catch (error) {
            console.log(error);
        }
    }
    
    //render và lấy code và name của province
    let provinces =[];

    function renderProvince(provinceList) {

        for(key in provinceList){
            let opt = document.createElement('option');
            opt.innerText = `${provinceList[key].name}`;
            provinceChoice.appendChild(opt);

            let pro = [provinceList[key].code, provinceList[key].name];
            provinces.push(pro);
        }
    }

    getRandomProvince();

//2. Khi người dùng chọn 1 tỉnh - thành phố (province) cụ thể thì tiếp tục gọi API để lấy danh sách quận - huyện (district) tương ứng với tỉnh - thành phố đã chọn trước đó

    //Lấy province-code
    provinceChoice.addEventListener('click',()=>{
        let value = provinceChoice.value; //lấy giá trị province được chọn

        for(let i =0; i< provinces.length;i++) {
            if(provinces[i][1]==value) {
                let code  = provinces[i][0]; //lấy code tương ứng với province name

                getRandomDistrict(code);
                break;
            }
        }}
    )

    async function getRandomDistrict(provinceCode) {
        try {
            let distList = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`); 
            renderDistrict(distList.data.districts);

        } catch(error) {
            console.log(error)
        }
    }

    //render và lấy danh sách code và name của district
    let districts = [];

    function renderDistrict(distList) {
        districts = [];
        districtChoice.innerHTML= "";
        
        for(key in distList){
            let opt = document.createElement('option');
            opt.innerText = `${distList[key].name}`;
            districtChoice.appendChild(opt);

            let district = [distList[key].code, distList[key].name];
            districts.push(district);
        }
    }
    console.log(districts)

//3. Làm tương tự với xã phường (commune)

    //Lấy district-code
    districtChoice.addEventListener('click',()=>{
        let value = districtChoice.value; //lấy giá trị district được chọn

        for(let i =0; i< districts.length;i++) {
            if(districts[i][1]==value) {
                let code  = districts[i][0]; //lấy code tương ứng với district name

                getRandomCommune(code);
                break;
            }
        }}
    )

    async function getRandomCommune(district) {
        try {
            let communeList = await axios.get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
            renderCommune(communeList.data.wards);

        } catch(error) {
            console.log(error)
        }
    }

    function renderCommune(communeList) {
        communeChoice.innerHTML ="";

        for(key in communeList){
            let opt = document.createElement('option');
            opt.innerText = `${communeList[key].name}`;
            communeChoice.appendChild(opt);
        }
    }