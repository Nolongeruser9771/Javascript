

// 1. Hiển thị danh sách công việc ban đầu, nếu không có công việc nào trong danh sách thì hiển thị Danh sách công việc trống
let announce = document.createElement('p');
announce.innerText = 'Danh sách công việc trống';
announce.style.color ='grey';
announce.style.fontStyle = 'italic';
document.querySelector('ul').insertAdjacentElement('beforebegin', announce);

let list = document.querySelectorAll('#list li');
if(list.length!=0) {
    announce.classList.toggle('display');
}
// 2. Thêm công việc mới
let add = document.querySelector('#add');
add.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    if(input!="") {
        let newNote = document.createElement('li');
        newNote.innerHTML = `<input type="checkbox">
                            <span>${input}</span>
                            <button>Edit</button>
                            <button>Delete</button>`;
        document.querySelector('ul').appendChild(newNote);
    }
})
// 3. Xóa công việc
let del = document.querySelectorAll('#delete');
Array.from()
// 4. Chỉnh sửa tiêu đề công việc (sử dụng window.prompt cho đơn giản)

// 5. Thay đổi trạng thái công việc (status)
let noteList = document.querySelectorAll('ul');
Array.from(noteList).map(note => {
    console.log(note);
    let noteContent = note.querySelector('input');
    noteContent.addEventListener('click',()=>{
        if(noteContent.checked == true) {
            note.querySelector('span').style.color = 'red';
        } else{
            note.querySelector('span').style.color = 'black';
        }
    })
})