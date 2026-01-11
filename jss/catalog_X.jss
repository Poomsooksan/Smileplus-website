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
    
    // Product Detail Page Elements
    const productTitleMobile = document.querySelector('.Product-title-mobile h2');
    const productTitle = document.querySelector('.product-title');
    const availabilityAlert = document.querySelector('.alert-success strong');
    const availabilityText = document.querySelector('.alert-success');
    const contactTitle = document.querySelector('.contact-buttons h6');
    
    // Contact Buttons
    const contactButtons = document.querySelectorAll('.contact-buttons .btn');
    
    // Specifications Table
    const specTableHeaders = document.querySelectorAll('.spec-table th');
    const specItems = document.querySelectorAll('.spec-detail td strong');
    
    // Contact Section (if exists)
    const contactSectionTitle = document.querySelector('.contact-section h3');
    const contactSectionText = document.querySelector('.contact-section p');
    const contactBtns = document.querySelectorAll('.contact-btn');
    
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
        
        // Product Detail Page
        if (availabilityAlert) availabilityAlert.textContent = 'พร้อมให้บริการ!';
        if (availabilityText) {
            const alertIcon = availabilityText.querySelector('i');
            const alertStrong = availabilityText.querySelector('strong');
            if (alertIcon && alertStrong) {
                availabilityText.innerHTML = '';
                availabilityText.appendChild(alertIcon);
                availabilityText.innerHTML += ' <strong>พร้อมให้บริการ!</strong> สอบถามราคาเช่าได้ทันที';
            }
        }
        if (contactTitle) contactTitle.textContent = 'ติดต่อสอบถาม:';
        
        // Contact Buttons
        if (contactButtons.length >= 3) {
            contactButtons[0].innerHTML = '<i class="bi bi-telephone-fill me-1"></i>โทร';
            contactButtons[1].innerHTML = '<i class="bi bi-line me-1"></i>ไลน์';
            if (contactButtons[2].querySelector('.bi-envelope-fill')) {
                contactButtons[2].innerHTML = '<i class="bi bi-envelope-fill me-1"></i>อีเมล';
            }
            if (contactButtons[3] && contactButtons[3].querySelector('.bi-messenger')) {
                contactButtons[3].innerHTML = '<i class="bi bi-messenger me-1"></i>Messenger';
            }
        }
        
        // Specifications Table
        if (specTableHeaders.length >= 2) {
            specTableHeaders[0].textContent = 'รายการ';
            specTableHeaders[1].textContent = 'ข้อมูลจำเพาะ';
        }
        
        // Specification Items
        document.querySelectorAll('.spec-detail tr').forEach((row, index) => {
            const tdFirst = row.querySelector('td:first-child strong');
            if (tdFirst) {
                switch(index) {
                    case 0:
                        tdFirst.textContent = 'ระยะทำงาน (Maximum Working Height)';
                        break;
                    case 1:
                        tdFirst.textContent = 'ระยะพื้นยืน (Platform Height)';
                        break;
                    case 2:
                        tdFirst.textContent = 'น้ำหนักสูงสุดที่รับได้ (Maximum Capacity)';
                        break;
                    case 3:
                        tdFirst.textContent = 'พลังงานที่ใช้ (Power Source)';
                        break;
                }
            }
        });
        
        // Contact Section
        if (contactSectionTitle) contactSectionTitle.textContent = 'สนใจเช่ารถกระเช้าหรือต้องการสอบถามข้อมูล?';
        if (contactSectionText) contactSectionText.textContent = 'ติดต่อเราได้ทันที ทีมงานพร้อมให้คำปรึกษาและบริการ';
        contactBtns.forEach((btn, index) => {
            if (index === 0) btn.innerHTML = '<i class="bi bi-telephone-fill me-2"></i>โทรเลย';
            if (index === 1) btn.innerHTML = '<i class="bi bi-line me-2"></i>ไลน์';
            if (index === 2) btn.innerHTML = '<i class="bi bi-envelope-fill me-2"></i>อีเมล';
        });
        
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
        
        // Product Detail Page
        if (availabilityAlert) availabilityAlert.textContent = 'Available Now!';
        if (availabilityText) {
            const alertIcon = availabilityText.querySelector('i');
            const alertStrong = availabilityText.querySelector('strong');
            if (alertIcon && alertStrong) {
                availabilityText.innerHTML = '';
                availabilityText.appendChild(alertIcon);
                availabilityText.innerHTML += ' <strong>Available Now!</strong> Inquire about rental prices immediately';
            }
        }
        if (contactTitle) contactTitle.textContent = 'Contact Us:';
        
        // Contact Buttons
        if (contactButtons.length >= 3) {
            contactButtons[0].innerHTML = '<i class="bi bi-telephone-fill me-1"></i>Call';
            contactButtons[1].innerHTML = '<i class="bi bi-line me-1"></i>Line';
            if (contactButtons[2].querySelector('.bi-envelope-fill')) {
                contactButtons[2].innerHTML = '<i class="bi bi-envelope-fill me-1"></i>Email';
            }
            if (contactButtons[3] && contactButtons[3].querySelector('.bi-messenger')) {
                contactButtons[3].innerHTML = '<i class="bi bi-messenger me-1"></i>Messenger';
            }
        }
        
        // Specifications Table
        if (specTableHeaders.length >= 2) {
            specTableHeaders[0].textContent = 'Specification';
            specTableHeaders[1].textContent = 'Details';
        }
        
        // Specification Items
        document.querySelectorAll('.spec-detail tr').forEach((row, index) => {
            const tdFirst = row.querySelector('td:first-child strong');
            if (tdFirst) {
                switch(index) {
                    case 0:
                        tdFirst.textContent = 'Maximum Working Height';
                        break;
                    case 1:
                        tdFirst.textContent = 'Platform Height';
                        break;
                    case 2:
                        tdFirst.textContent = 'Maximum Capacity';
                        break;
                    case 3:
                        tdFirst.textContent = 'Power Source';
                        break;
                }
            }
        });
        
        // Contact Section
        if (contactSectionTitle) contactSectionTitle.textContent = 'Interested in renting a boom lift or need more information?';
        if (contactSectionText) contactSectionText.textContent = 'Contact us now. Our team is ready to provide consultation and service';
        contactBtns.forEach((btn, index) => {
            if (index === 0) btn.innerHTML = '<i class="bi bi-telephone-fill me-2"></i>Call Now';
            if (index === 1) btn.innerHTML = '<i class="bi bi-line me-2"></i>Line';
            if (index === 2) btn.innerHTML = '<i class="bi bi-envelope-fill me-2"></i>Email';
        });
        
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

// Search Toggle Function (for mobile)
function toggleSearchForm() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.classList.toggle('active');
    }
}