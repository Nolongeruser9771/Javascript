let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

// Dựa vào thông tin của object student_warning. Hãy hiển thị dự liệu tương tự như demo trong mã HTML

//Render thông tin học viên
    const tblBody = document.querySelector("tbody"); //gọi ra table

    function studentInfoRender(student_warning) {
        for(let i = 0; i< student_warning.students.length;i++) {    //số học viên
            const rowNum = student_warning.students[i].detail_info.length;  //số dòng của mỗi học viên

            for(let j = 0; j< rowNum;j++) {
                const row = document.createElement("tr");

                if(j==0) {  //dòng đầu tiên: có 8 cột
                    for(let k = 0 ; k < 8; k++) {
                        const cell = document.createElement("td");
                            
                        let cellText = colInsert(i,j,k); //lấy thông tin cho từng ô
                        (k>=0 && k<=4)? cell.rowSpan = `${rowNum}`:cell; //rowSpan 5 cột đầu
                        (k==4||k==5)? cell.style.textAlign = "center":cell; //canh giữa cột 5,6
                            
                        cell.innerHTML = cellText; //gán thông tin cho ô
                        row.appendChild(cell); //thêm ô vào dòng
                    }
                }
                        
                if(j>0) { //từ dòng 2 trở đi, chỉ có 3 cột
                    for(let k = 5 ; k < 8; k++) {
                        const cell = document.createElement("td");

                        let cellText = colInsert(i,j,k);
                        cell.innerHTML = cellText;
                        (k==5)? cell.style.textAlign = "center":cell;
                        row.appendChild(cell);
                    }
                }

                tblBody.appendChild(row); //thêm dòng vào table
            }
        }
    }

    function colInsert(i,j,k){ //thông tin tương ứng mỗi cột
        switch(k) {
            case 0:
                cellText = `${i+1}`;
                break;
            case 1:
                cellText = `${student_warning.students[i].name}`;
                break;
            case 2:
                cellText = `${student_warning.students[i].email}`;
                break;
            case 3:
                cellText = `${student_warning.students[i].phone}`;
                break;
            case 4:
                cellText = `${student_warning.students[i].total_off}/${student_warning.students[i].sessions}`;
                break;
            case 5:
                cellText = `${student_warning.students[i].detail_info[j].date}`;
                break;
            case 6:
                cellText = `${student_warning.students[i].detail_info[j].note}`;
                break;
            case 7:
                cellText = `${student_warning.students[i].detail_info[j].teacher}`;
                break;
            }
        return cellText;
    }

    studentInfoRender(student_warning);

    //render thông tin lớP học
    function classInfoRender(student_warning) {
        const clazz = document.querySelector('.class-inner');
        console.log(clazz);
            
            const className = document.createElement('p');
            className.innerHTML = `<span>Lớp học</span> : ${student_warning.class}`;
            clazz.appendChild(className);

            const course = document.createElement('p');
            course.innerHTML = `<span>Thuộc khóa học</span> : ${student_warning.course}`;
            clazz.appendChild(course);

            const teacherTag = document.createElement('p');
            teacherTag.innerHTML = '<span>Danh sách giảng viên</span> :'
            clazz.appendChild(teacherTag);

            const teacherList = document.createElement('ul');
            for(let i =0; i<student_warning.teachers.length;i++) {
                let li = document.createElement('li');
                li.innerHTML = `${student_warning.teachers[i].name} ( ${student_warning.teachers[i].email} - ${student_warning.teachers[i].phone})`;
                teacherList.appendChild(li);
            }
            clazz.appendChild(teacherList);

            const sessions = document.createElement('p');
            sessions.innerHTML = `<span>Tổng số buổi</span> : ${student_warning.sessions}`
            clazz.appendChild(sessions);
    }

    classInfoRender(student_warning);

