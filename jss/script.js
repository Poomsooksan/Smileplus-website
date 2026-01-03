document.addEventListener("DOMContentLoaded", function () {
    // อ่านค่าภาษาที่บันทึกใน localStorage
    const savedLanguage = localStorage.getItem('language') || 'th'; // ถ้าไม่มีค่าจะตั้งเป็น 'th'
    changeLanguage(savedLanguage); // เรียกฟังก์ชันเปลี่ยนภาษา

    let lastScrollTop = 0;
    const topBar = document.querySelector(".top_bar");
    const navbar = document.querySelector(".navbar");
    const hideHeight = 150;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > hideHeight) {
            topBar.style.transform = "translateY(-100%)";
            navbar.style.top = "0";
        } else if (scrollTop < lastScrollTop) {
            topBar.style.transform = "translateY(0)";
            navbar.style.top = "40px";
        }
        lastScrollTop = scrollTop;
    });
});

function changeLanguage(lang) {
    // บันทึกภาษาลงใน localStorage
    localStorage.setItem('language', lang);

    const flag = document.getElementById('current-flag');
    const home = document.getElementById('nav_home');
    const about = document.getElementById('nav_about');
    const machine = document.getElementById('nav_machine');
    const Boom = document.getElementById('nav_boom');
    const X = document.getElementById('nav_x');
    const News = document.getElementById('nav_news');
    const Search = document.getElementById('nav_seach');

    if (lang === 'th') {
        flag.textContent = '🇹🇭';
        about.textContent = 'เกี่ยวกับเรา';
        machine.textContent = 'เครื่องจักร';
        Boom.textContent = 'รถกระเช้า Boom Lift';
        X.textContent = 'ลิฟท์ขากรรไกร X-Lift';
        News.textContent = 'ข่าวสาร เเละประชาสัมพันธ์';
        Search.textContent = 'ค้นหา';
    } else if (lang === 'en') {
        flag.textContent = '🇺🇸';
        about.textContent = 'About';
        machine.textContent = 'Machine';
        Boom.textContent = 'Boom Lift';
        X.textContent = 'X-Lift';
        News.textContent = 'News';
        Search.textContent = 'Search';
    }
}
