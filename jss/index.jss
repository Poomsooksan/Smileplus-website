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
    
    // Carousel Content
    const carouselHighlight = document.querySelector('.carousel_highlight');
    const carouselDetail = document.querySelector('.carousel_detail h2');
    const caption2 = document.querySelector('.caption2_overay h2');
    const caption3Span1 = document.querySelector('.caption3-span1');
    const caption3Span2 = document.querySelector('.caption3-span2');
    const caption4 = document.querySelector('.caption4 h2');
    
    // Body2 - About Section
    const body2Title = document.querySelector('.body2-box h2');
    const body2Subtitle = document.querySelector('.body2-box h3');
    const body2Text = document.querySelector('.body2-box p');
    const body2List = document.querySelectorAll('.body2-box ul li');
    const body2Button = document.querySelector('.body2-box_button');
    
    // Safety Section
    const safetyTitle = document.querySelector('.description-text h3');
    const safetyText = document.querySelector('.description-text p');
    
    // Service Section
    const serviceTitle = document.querySelector('.Service');
    const cardTitles = document.querySelectorAll('.custom-card .description h5');
    
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
        
        // Carousel
        if (carouselHighlight) carouselHighlight.textContent = 'Smile Plus';
        if (carouselDetail) {
            carouselDetail.innerHTML = 'บริการจัดหารถกระเช้า <br class="carousel_detail_br_for_md">และรถลิฟท์ขากรรไกร<br>สำหรับงานก่อสร้าง และงานอุตสาหกรรม';
        }
        if (caption2) caption2.textContent = 'จัดส่งรวดเร็ว ส่งซ่อมทันใจ';
        if (caption3Span1) caption3Span1.textContent = 'บริการด้วยใจ';
        if (caption3Span2) caption3Span2.textContent = 'พร้อมทีมงานมากประสบการณ์';
        if (caption4) {
            const phoneLink = caption4.querySelector('.caption_callnumber_emoji');
            caption4.innerHTML = 'บริษัท สมายพลัส <span class="caption_callnumber">092-924-6812</span>';
            if (phoneLink) caption4.querySelector('.caption_callnumber').appendChild(phoneLink);
        }
        
        // Body2 - About
        if (body2Title) body2Title.textContent = 'เกี่ยวกับเรา';
        if (body2Subtitle) body2Subtitle.textContent = 'บริษัท สมาย พลัส จำกัด';
        if (body2Text) {
            body2Text.textContent = 'ก่อตั้งในปี 2020 สำนักงานอยู่ที่ อำเภอ บางบ่อ จังหวัด สมุทรปราการ เป็นผู้ให้บริการจัดหาเครื่องจักร สำหรับทำงานในพื้นที่สูง ไม่ว่าจะเป็นรถกระเช้า(Boomlift) หรือรถลิฟต์ขากรรไกร(X-Lift) พร้อมด้วยคำแนะนำ และการอบรมการใช้งานจากทีมงานที่เชี่ยวชาญ เพื่อสร้างความสะดวก และความปลอดภัยในการทำงานของลูกค้า ไม่ว่าจะเป็นงานก่อสร้าง งานอุตสาหกรรม หรืองานในคลังสินค้า';
        }
        if (body2List.length >= 4) {
            body2List[0].textContent = 'เครื่องจักรสภาพดี';
            body2List[1].textContent = 'ราคาไม่แพง';
            body2List[2].textContent = 'ทีมงานมากประสบการณ์';
            body2List[3].textContent = 'บริการรวดเร็ว';
        }
        if (body2Button) body2Button.textContent = 'ดูเพิ่มเติม';
        
        // Safety Section
        if (safetyTitle) {
            safetyTitle.textContent = 'เพิ่มประสิทธิภาพงาน ยกระดับความปลอดภัยด้วย Boom Lift และ Scissor Lift';
        }
        if (safetyText) {
            safetyText.textContent = 'ไม่ว่าจะเป็นงานก่อสร้าง งานซ่อมบำรุง หรือแม้แต่งานติดตั้งในคลังสินค้าและโรงงาน เพื่อให้การทำงานบนที่สูงเป็นไปอย่างราบรื่น และได้ผลลัพธ์สูงสุด Boom Lift และ Scissor Lift สองเครื่องจักรคู่ใจที่จะเข้ามาพลิกโฉมวิธีการทำงานของคุณ';
        }
        
        // Service Section
        if (serviceTitle) serviceTitle.textContent = 'บริการของเรา';
        if (cardTitles.length >= 2) {
            cardTitles[0].textContent = 'Boom Lift';
            cardTitles[1].textContent = 'Scissor Lift (X-Lift)';
        }
        
    } else if (lang === 'en') {
        flag.textContent = '🇺🇸';
        
        // Carousel
        if (carouselHighlight) carouselHighlight.textContent = 'Smile Plus';
        if (carouselDetail) {
            carouselDetail.innerHTML = 'Boom Lift and Scissor Lift Rental Services<br>For Construction and Industrial Work';
        }
        if (caption2) caption2.textContent = 'Fast Delivery, Quick Repair';
        if (caption3Span1) caption3Span1.textContent = 'Service with Heart';
        if (caption3Span2) caption3Span2.textContent = 'With Experienced Team';
        if (caption4) {
            const phoneLink = caption4.querySelector('.caption_callnumber_emoji');
            caption4.innerHTML = 'Smile Plus Company <span class="caption_callnumber">092-924-6812</span>';
            if (phoneLink) caption4.querySelector('.caption_callnumber').appendChild(phoneLink);
        }
        
        // Body2 - About
        if (body2Title) body2Title.textContent = 'About Us';
        if (body2Subtitle) body2Subtitle.textContent = 'Smile Plus Co., Ltd.';
        if (body2Text) {
            body2Text.textContent = 'Founded in 2020, our office is located in Bang Bo District, Samut Prakan Province. We provide machinery rental services for working at heights, including Boom Lifts and Scissor Lifts (X-Lift), along with expert guidance and training from our experienced team to ensure convenience and safety for our customers in construction, industrial, and warehouse operations.';
        }
        if (body2List.length >= 4) {
            body2List[0].textContent = 'Well-maintained equipment';
            body2List[1].textContent = 'Affordable prices';
            body2List[2].textContent = 'Experienced team';
            body2List[3].textContent = 'Fast service';
        }
        if (body2Button) body2Button.textContent = 'Read More';
        
        // Safety Section
        if (safetyTitle) {
            safetyTitle.textContent = 'Boost Efficiency, Elevate Safety with Boom Lift and Scissor Lift';
        }
        if (safetyText) {
            safetyText.textContent = 'Whether for construction, maintenance, or installation in warehouses and factories, to ensure smooth operations at heights with maximum results, Boom Lift and Scissor Lift are your trusted machinery partners that will transform your working methods.';
        }
        
        // Service Section
        if (serviceTitle) serviceTitle.textContent = 'Our Services';
        if (cardTitles.length >= 2) {
            cardTitles[0].textContent = 'Boom Lift';
            cardTitles[1].textContent = 'Scissor Lift (X-Lift)';
        }

        // Navigation
        if (about) about.textContent = 'About Us';
        if (machine) machine.textContent = 'Machines';
        if (boom) boom.textContent = 'Boom Lift';
        if (x) x.textContent = 'X-Lift';
        if (all) all.textContent = 'All';
        if (news) news.textContent = 'News & Announcements';
        if (search) search.textContent = 'Search';
        
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
            footerCopyright.textContent = '© 2026 Smile Plus Rental Co., Ltd. All Rights Reserved.';
        }
        
    }
}