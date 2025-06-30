document.addEventListener('DOMContentLoaded', function() {
    // 1. AOS Initialization
    AOS.init({
        duration: 1000,    // مدة الحركة مناسبة للاحترافية
        once: true,        // الأنميشن يحصل مرة واحدة فقط عند التمرير للعنصر
        mirror: false,     // لا تكرر الأنميشن عند التمرير لأعلى ولأسفل
        offset: 120        // تبدأ الحركة قبل 120 بكسل من وصول العنصر لـ viewport
    });

    // 2. تحديث السنة في الفوتر تلقائياً
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. تأثير بسيط لأيقونة التشغيل SVG في "قصتنا" عند الهوفر
    const storyVisualPlaceholder = document.querySelector('.story-visual-placeholder');
    const playIconSvg = document.querySelector('.play-icon-svg'); // تم تغيير selector

    if (storyVisualPlaceholder && playIconSvg) {
        storyVisualPlaceholder.addEventListener('mouseenter', () => {
            playIconSvg.style.transform = 'translate(-50%, -50%) scale(1.1)'; // تكبير أكبر قليلاً
            playIconSvg.style.opacity = '1';
            playIconSvg.style.color = 'var(--accent-light)'; // تغيير لون الأيقونة
        });

        storyVisualPlaceholder.addEventListener('mouseleave', () => {
            playIconSvg.style.transform = 'translate(-50%, -50%) scale(1)';
            playIconSvg.style.opacity = '0.9';
            playIconSvg.style.color = 'var(--white-smoke)'; // إعادة اللون الأصلي
        });
    }

    // 4. Smooth scrolling for "اكتشف قصتنا" button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});