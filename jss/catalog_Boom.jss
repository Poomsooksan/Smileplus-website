document.addEventListener("DOMContentLoaded", function () {
    // อ่านค่าภาษาที่บันทึกใน localStorage
    const savedLanguage = localStorage.getItem('language') || 'th';
    changeLanguage(savedLanguage);
    
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
    
    // Navigation Menu
    const about = document.getElementById('nav_about');
    const machine = document.getElementById('nav_machine');
    const boom = document.getElementById('nav_boom');
    const x = document.getElementById('nav_x');
    const all = document.getElementById('nav_All');
    const news = document.getElementById('nav_news');
    const search = document.getElementById('nav_seach');
    
    // Search Form
    const searchInputs = document.querySelectorAll('input[type="search"], .search-form input[type="text"]');
    const searchButtons = document.querySelectorAll('.search-form button[type="submit"]');
    
    // Product Page Elements
    const productTitleMobile = document.querySelector('.Product-title-mobile h2');
    const productTitle = document.querySelector('.product-title');
    const alertBox = document.querySelector('.alert-success');
    const contactHeading = document.querySelector('.contact-buttons h6');
    const contactButtons = document.querySelectorAll('.contact-bibi a');
    
    // Specifications Table
    const specTableHeaders = document.querySelectorAll('.spec-table thead th');
    const specRows = document.querySelectorAll('.spec-detail tr td strong');
    
    // Footer
    const footerAbout = document.querySelector('.footer-custom .col-md-4:first-child h5');
    const footerCompany = document.querySelector('.footer-custom .col-md-4:first-child p:first-of-type');
    const footerAddress = document.querySelector('.footer-custom .col-md-4:first-child p:last-of-type');
    const footerLinks = document.querySelector('.footer_link h5');
    const footerLinkItems = document.querySelectorAll('.footer_link ul li a');
    const footerContact = document.querySelector('.footer_contact h5');
    const footerPhone = document.querySelector('.footer_contact p:first-of-type');
    const footerEmail = document.querySelector('.footer_contact p:nth-of-type(2)');
    const footerCopyright = document.querySelector('.footer_copy p');
    
    if (lang === 'th') {
        flag.textContent = '🇹🇭';
        
        // Navigation
        if (about) about.textContent = 'เกี่ยวกับเรา';
        if (machine) machine.textContent = 'เครื่องจักร';
        if (boom) boom.textContent = 'รถกระเช้า Boom Lift';
        if (x) x.textContent = 'ลิฟท์ขากรรไกร X-Lift';
        if (all) all.textContent = 'ทั้งหมด';
        if (news) news.textContent = 'ข่าวสาร และประชาสัมพันธ์';
        if (search) search.textContent = 'ค้นหา';
        
        // Search
        searchInputs.forEach(input => {
            input.placeholder = 'พิมพ์เพื่อค้นหา...';
        });
        searchButtons.forEach(button => {
            button.textContent = 'ค้นหา';
        });
        
        // Product Page
        if (alertBox) {
            alertBox.innerHTML = `
                <i class="bi bi-info-circle-fill me-2"></i>
                <strong>พร้อมให้บริการ!</strong> สอบถามราคาเช่าได้ทันที
            `;
        }
        if (contactHeading) contactHeading.textContent = 'ติดต่อสอบถาม:';
        
        // Contact Buttons
        if (contactButtons.length >= 3) {
            contactButtons[0].innerHTML = '<i class="bi bi-telephone-fill me-1"></i>โทร';
            contactButtons[1].innerHTML = '<i class="bi bi-line me-1"></i>ไลน์';
            contactButtons[2].innerHTML = '<i class="bi bi-messenger me-1"></i>Messenger';
        }
        
        // Specifications Table Headers
        if (specTableHeaders.length >= 2) {
            specTableHeaders[0].textContent = 'รายการ';
            specTableHeaders[1].textContent = 'ข้อมูลจำเพาะ';
        }
        
        // Specifications Table Content
        const specLabels = document.querySelectorAll('.spec-detail tr td:first-child strong');
        if (specLabels.length >= 6) {
            specLabels[0].textContent = 'ระยะทำงาน (Maximum Working Height)';
            specLabels[1].textContent = 'ระยะพื้นยืน (Platform Height)';
            specLabels[2].textContent = 'ระยะแนวราบ (Horizontal Reach)';
            specLabels[3].textContent = 'น้ำหนักสูงสุดที่รับได้ (Maximum Capacity)';
            specLabels[4].textContent = 'ความเร็วสูงสุด (Maximum Speed)';
            specLabels[5].textContent = 'พลังงานที่ใช้ (Power Source)';
        }
        
        // Footer
        if (footerAbout) footerAbout.textContent = 'เกี่ยวกับเรา';
        if (footerCompany) {
            footerCompany.innerHTML = 'Smile Plus Rental Co., Ltd.<br>ให้บริการเช่าเครื่องจักรสำหรับงานก่อสร้างและอุตสาหกรรม';
        }
        if (footerAddress) {
            footerAddress.innerHTML = '<i class="bi bi-geo-alt"></i> ที่อยู่: 88/99 หมู่ที่ 10 ตำบลบางบ่อ อำเภอบางบ่อ จ.สมุทรปราการ 10560';
        }
        if (footerLinks) footerLinks.textContent = 'ลิงก์ที่เป็นประโยชน์';
        if (footerLinkItems.length >= 4) {
            footerLinkItems[0].textContent = 'หน้าหลัก';
            footerLinkItems[1].textContent = 'เกี่ยวกับเรา';
            footerLinkItems[2].textContent = 'เครื่องจักร';
            footerLinkItems[3].textContent = 'ข่าวสาร และประชาสัมพันธ์';
        }
        if (footerContact) footerContact.textContent = 'ติดต่อเรา';
        if (footerPhone) footerPhone.innerHTML = '<i class="bi bi-telephone"></i> โทร: 063-196-5191';
        if (footerEmail) footerEmail.innerHTML = '<i class="bi bi-envelope"></i> อีเมล: Smileplus@gmail.com';
        if (footerCopyright) {
            footerCopyright.textContent = '© 2025 Smile Plus Rental Co., Ltd. สงวนลิขสิทธิ์';
        }
        
    } else if (lang === 'en') {
        flag.textContent = '🇺🇸';
        
        // Navigation
        if (about) about.textContent = 'About Us';
        if (machine) machine.textContent = 'Machines';
        if (boom) boom.textContent = 'Boom Lift';
        if (x) x.textContent = 'X-Lift';
        if (all) all.textContent = 'All';
        if (news) news.textContent = 'News & Announcements';
        if (search) search.textContent = 'Search';
        
        // Search
        searchInputs.forEach(input => {
            input.placeholder = 'Type to search...';
        });
        searchButtons.forEach(button => {
            button.textContent = 'Search';
        });
        
        // Product Page
        if (alertBox) {
            alertBox.innerHTML = `
                <i class="bi bi-info-circle-fill me-2"></i>
                <strong>Available Now!</strong> Contact us for rental rates
            `;
        }
        if (contactHeading) contactHeading.textContent = 'Contact Us:';
        
        // Contact Buttons
        if (contactButtons.length >= 3) {
            contactButtons[0].innerHTML = '<i class="bi bi-telephone-fill me-1"></i>Call';
            contactButtons[1].innerHTML = '<i class="bi bi-line me-1"></i>Line';
            contactButtons[2].innerHTML = '<i class="bi bi-messenger me-1"></i>Messenger';
        }
        
        // Specifications Table Headers
        if (specTableHeaders.length >= 2) {
            specTableHeaders[0].textContent = 'Specification';
            specTableHeaders[1].textContent = 'Details';
        }
        
        // Specifications Table Content
        const specLabels = document.querySelectorAll('.spec-detail tr td:first-child strong');
        if (specLabels.length >= 6) {
            specLabels[0].textContent = 'Maximum Working Height';
            specLabels[1].textContent = 'Platform Height';
            specLabels[2].textContent = 'Horizontal Reach';
            specLabels[3].textContent = 'Maximum Capacity';
            specLabels[4].textContent = 'Maximum Speed';
            specLabels[5].textContent = 'Power Source';
        }
        
        // Footer
        if (footerAbout) footerAbout.textContent = 'About Us';
        if (footerCompany) {
            footerCompany.innerHTML = 'Smile Plus Rental Co., Ltd.<br>Machinery rental services for construction and industrial work';
        }
        if (footerAddress) {
            footerAddress.innerHTML = '<i class="bi bi-geo-alt"></i> Address: 88/99 Moo 10, Bang Bo, Bang Bo District, Samut Prakan 10560';
        }
        if (footerLinks) footerLinks.textContent = 'Useful Links';
        if (footerLinkItems.length >= 4) {
            footerLinkItems[0].textContent = 'Home';
            footerLinkItems[1].textContent = 'About Us';
            footerLinkItems[2].textContent = 'Machines';
            footerLinkItems[3].textContent = 'News & Announcements';
        }
        if (footerContact) footerContact.textContent = 'Contact Us';
        if (footerPhone) footerPhone.innerHTML = '<i class="bi bi-telephone"></i> Phone: 063-196-5191';
        if (footerEmail) footerEmail.innerHTML = '<i class="bi bi-envelope"></i> Email: Smileplus@gmail.com';
        if (footerCopyright) {
            footerCopyright.textContent = '© 2025 Smile Plus Rental Co., Ltd. All Rights Reserved.';
        }
    }
}

function toggleSearchForm() {
    const form = document.getElementById('searchForm');
    form.classList.toggle('active');
}