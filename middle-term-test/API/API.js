//load danh sách post
    async function getRandomPost() {
        try {
            let response  = await fetch("https://jsonplaceholder.typicode.com/posts")
            let postList = await response.json();

            renderPost(postList);
        } catch (error) {
            console.log(error);
        }
    }

    let btnPost = document.getElementById('posts');
    let btnPhoto = document.getElementById('photos');
    let btnAl = document.getElementById('albums');
    let ul = document.createElement('ul');
    btnAl.insertAdjacentElement('afterend',ul);
    let type = document.querySelector("span");
    type.innerText = btnPost.innerText;

    function renderPost(postList) {
        ul.innerHTML="";
        for(key in postList){
            let post = document.createElement('li');
            post.innerText = `${postList[key].title}`;
            ul.appendChild(post);
        }
    }

    getRandomPost();

//Bấm hiển thị API posts
    btnPost.addEventListener('click',()=>{
        btnAl.classList.remove('display');
        btnPost.classList.add('display');
        btnPhoto.classList.remove('display');
        type.innerText = btnPost.innerText;
        getRandomPost();
    })

//bấm hiển thị API photo
    async function getRandomPhoto() {
        try {
            let response  = await fetch("https://jsonplaceholder.typicode.com/photos")
            let photoList = await response.json();

            renderPost(photoList);
        } catch (error) {
            console.log(error);
        }
    }

    function renderPhoto(photoList) {
        ul.innerHTML="";
        for(key in photoList){
            let photo = document.createElement('li');
            photo.innerText = `${photoList[key].title}`;
            ul.appendChild(photo);
        }
    }

    btnPhoto.addEventListener('click',()=>{
        btnAl.classList.remove('display');
        btnPost.classList.remove('display');
        btnPhoto.classList.add('display');
        type.innerText = btnPhoto.innerText;
        getRandomPhoto();
    })

//Bấm hiển thị API albums

    async function getRandomAlbum() {
        try {
            let response  = await fetch("https://jsonplaceholder.typicode.com/albums")
            let albumList = await response.json();

            renderPost(albumList);
        } catch (error) {
            console.log(error);
        }
    }

    function renderAlbum(albumList) {
        ul.innerHTML="";
        for(key in albumList){
            let album = document.createElement('li');
            album.innerText = `${albumList[key].title}`;
            ul.appendChild(album);
        }
    }

    btnAl.addEventListener('click',()=>{
        btnAl.classList.add('display');
        btnPost.classList.remove('display');
        btnPhoto.classList.remove('display');
        type.innerText = btnAl.innerText;
        getRandomAlbum();
    })