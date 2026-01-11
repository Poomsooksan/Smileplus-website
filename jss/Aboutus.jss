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
    
    // Hero Section
    const heroTitle = document.querySelector('.hero_caption .Main');
    const heroSubtitle = document.querySelector('.hero_caption .Subheadings');
    
    // Content Section - Card 1
    const card1Title = document.querySelector('.row1_text .card-title');
    const card1Text = document.querySelector('.row1_text .card-text');
    
    // Content Section - Card 2
    const card2Title = document.querySelector('.row2_text .card-title');
    const card2IntroText = document.querySelector('.row2_text > p');
    const card2ListItems = document.querySelectorAll('.company_target li');
    
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
        
        // Hero Section
        if (heroTitle) heroTitle.textContent = 'เกี่ยวกับเรา';
        if (heroSubtitle) heroSubtitle.textContent = 'บริษัท Smile plus จำกัด';
        
        // Content Section - Card 1
        if (card1Title) card1Title.textContent = 'บริษัท สมายพลัส จำกัด';
        if (card1Text) {
            card1Text.textContent = 'ก่อตั้งในปี 2020 สำนักงานอยู่ที่ อำเภอ บางบ่อ จังหวัด สมุทรปราการ เป็นผู้ให้บริการจัดหาเครื่องจักร สำหรับทำงานในพื้นที่สูง ไม่ว่าจะเป็นรถกระเช้า(Boomlift) หรือรถลิฟต์ขากรรไกร(X-Lift) พร้อมด้วยคำแนะนำ และการอบรมการใช้งานจากทีมงานที่เชี่ยวชาญ เพื่อสร้างความสะดวก และความปลอดภัยในการทำงานของลูกค้า ไม่ว่าจะเป็นงานก่อสร้าง งานอุตสาหกรรม หรืองานในคลังสินค้า';
        }
        
        // Content Section - Card 2
        if (card2Title) card2Title.textContent = 'วิสัยทัศน์ และพันธกิจของเรา';
        if (card2IntroText) {
            card2IntroText.textContent = 'เรามีเป้าหมายในการเป็นผู้ให้บริการเช่าเครื่องจักรก่อสร้างที่เชื่อถือได้ และคุ้มค่าในการเลือกใช้ โดยมีแนวทางในการปฏิบัติในด้านต่างๆ ดังนี้';
        }
        if (card2ListItems.length >= 3) {
            card2ListItems[0].innerHTML = '<strong>ความปลอดภัย</strong><br>ดูแลและตรวจสอบสภาพเครื่องจักรให้อยู่ในสภาพพร้อมใช้งานเสมอ พร้อมให้บริการอบรมการใช้งานเครื่องจักรแก่ลูกค้า';
            card2ListItems[1].innerHTML = '<strong>บริการรวดเร็ว และตอบโจทย์ลูกค้า</strong><br>ให้คำปรึกษาและบริการอย่างรวดเร็ว พร้อมแนะนำการใช้งานเครื่องจักรให้เหมาะสมกับลักษณะงาน';
            card2ListItems[2].innerHTML = '<strong>การพัฒนาองค์ความรู้</strong><br>พัฒนากระบวนการทำงานอย่างต่อเนื่อง เพื่อรองรับปัญหาหน้างาน และมองหาวิธีการใหม่ ๆ เพื่อเพิ่มคุณภาพและประสิทธิภาพในการให้บริการ';
        }
        
        // Footer
        if (footerAbout) footerAbout.textContent = 'เกี่ยวกับเรา';
        if (footerCompany) {
            footerCompany.innerHTML = 'Smile Plus Co., Ltd.<br>ให้บริการเช่าเครื่องจักรสำหรับงานก่อสร้างและอุตสาหกรรม';
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
        
        // Hero Section
        if (heroTitle) heroTitle.textContent = 'About Us';
        if (heroSubtitle) heroSubtitle.textContent = 'Smile Plus Co., Ltd.';
        
        // Content Section - Card 1
        if (card1Title) card1Title.textContent = 'Smile Plus Co., Ltd.';
        if (card1Text) {
            card1Text.textContent = 'Founded in 2020, our office is located in Bang Bo District, Samut Prakan Province. We specialize in providing machinery for working at heights, including Boom Lifts and Scissor Lifts (X-Lift). We offer expert guidance and training from our experienced team to ensure convenience and safety for our clients in construction work, industrial operations, and warehouse applications.';
        }
        
        // Content Section - Card 2
        if (card2Title) card2Title.textContent = 'Our Vision and Mission';
        if (card2IntroText) {
            card2IntroText.textContent = 'We aim to be a reliable and cost-effective construction machinery rental service provider, with the following operational approaches:';
        }
        if (card2ListItems.length >= 3) {
            card2ListItems[0].innerHTML = '<strong>Safety</strong><br>We maintain and inspect our machinery to ensure it is always ready for use, and provide training services to customers on proper equipment operation.';
            card2ListItems[1].innerHTML = '<strong>Fast Service and Customer Satisfaction</strong><br>We provide quick consultation and service, along with recommendations on the most suitable machinery for specific job requirements.';
            card2ListItems[2].innerHTML = '<strong>Knowledge Development</strong><br>We continuously improve our work processes to address on-site challenges and seek new methods to enhance the quality and efficiency of our services.';
        }
        
        // Footer
        if (footerAbout) footerAbout.textContent = 'About Us';
        if (footerCompany) {
            footerCompany.innerHTML = 'Smile Plus Co., Ltd.<br>Machinery rental services for construction and industrial work';
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