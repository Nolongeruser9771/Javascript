// 1. Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
    let jobCard = document.querySelector('.job-card');
    console.log(jobCard);

    let job1 = jobCard.cloneNode(true);
    let job2 = jobCard.cloneNode(true);
    let job3 = jobCard.cloneNode(true);

    jobCard.parentNode.appendChild(job1);
    jobCard.parentNode.appendChild(job2);
    jobCard.parentNode.appendChild(job3);

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
    let title = document.querySelectorAll('.job-card-inner h3');
    title[1].innerText = 'JavaScript Developer';
    title[2].innerText = 'Java Developer';
    title[3].innerText = 'Python Developer';

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
    let jobList = document.querySelectorAll('.job-card')
    let count = Array.from(jobList).length;

    let totalJob = document.querySelector('#jobs-listed span');
    totalJob.innerText = count;

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
    let search = document.getElementById('search');
    let input = document.querySelector('input');
    
    search.addEventListener('keyup',()=> {
        let value = input.value;
        console.log(value);
        count = Array.from(jobList).length;

        Array.from(jobList).forEach(job => {
            let jobTitle = job.querySelector('h3').innerText;
            console.log(jobTitle)
            if(jobTitle.toLowerCase().includes(value.toLowerCase())) {
                job.style.display = 'block';
            } else {
                job.style.display ='none';
                count--;
            }
        })
        totalJob.innerText = count;
    })

    
// 5. Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
    let show = document.querySelector("#show-all");

    show.addEventListener('click',() => {
        Array.from(jobList).map( e => e.style.display = 'block');
        count = Array.from(jobList).length;
        totalJob.innerText = count;
    })