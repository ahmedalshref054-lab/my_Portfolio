const myProjects = [
    {
        title: "منصة الأسعار الحية",
        desc: "تطبيق متطور لمتابعة أسعار السوق لحظياً باستخدام تقنيات الـ API المباشرة.",
        tech: "JavaScript / API",
        link: "https://ahmedalshref054-lab.github.io/Sinyor-Live-Markets/",
        img: "markets-snip.png"
    },
    {
        title: "صفحة عروض اسماك وطلبات",
        desc: "صفحة متكاملة للعرض وطلب الطلبات.",
        tech: "HTML / CSS / JS",
        link: "https://ahmedalshref054-lab.github.io/Asmak-Seafood/",
        img: "7.png"
    },
    {
        title: "بوابة الدخول الاحترافية",
        desc: "تصميم واجهة مستخدم متكاملة تركز على تجربة المستخدم وسهولة التفاعل.",
        tech: "HTML5 / CSS3",
        link: "https://ahmedalshref054-lab.github.io/sin-app-gold/",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "خدمات الطوارئ الفورية",
        desc: "مشروع خدمي رقمي يهدف لتسهيل الوصول للخدمات الطبية والطارئة.",
        tech: "Web Dev / UI",
        link: "https://ahmedalshref054-lab.github.io/broject-app/",
        img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "تطبيق صحي متكامل",
        desc: "عرض لواجهات تطبيق ذكي لمتابعة اللياقة البدنية والقياسات الصحية.",
        tech: "Flutter UI",
        link: "https://ahmedalshref054-lab.github.io/health-website/",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
    }
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // بنجهز المحتوى كله بره الأول وبعدين نحطه مرة واحدة
    const content = myProjects.map(proj => `
        <div class="project-card">
            <img src="${proj.img}" alt="${proj.title}" class="project-image" loading="lazy">
            <h3>${proj.title}</h3>
            <p style="font-size: 0.9rem; color: #aaa6c3; margin: 10px 0;">${proj.desc}</p>
            <span class="tech-tag">${proj.tech}</span>
            <a href="${proj.link}" target="_blank" class="project-link">زيارة المشروع ←</a>
        </div>
    `).join('');

    container.innerHTML = content;
}

// تشغيل الدالة بمجرد ما الصفحة تحمل
window.addEventListener('load', loadProjects);