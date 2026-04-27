const myProjects = [
    {
        title: "منصة الأسعار الحية",
        desc: "تطبيق متطور لمتابعة أسعار السوق لحظياً باستخدام تقنيات الـ API المباشرة.",
        tech: "JavaScript / API",
        link: "https://sinyorlive-bavarois-5df0f8.netlify.app/",
        // رابط صورة جديد ومضمون لمنصة العملات والأسعار
img: "markets-snip.png"    },
    {
        title: "بوابة الدخول الاحترافية",
        desc: "تصميم واجهة مستخدم متكاملة تركز على تجربة المستخدم وسهولة التفاعل.",
        tech: "HTML5 / CSS3",
        link: "https://gogd-biscochitos-b7c0ee.netlify.app/",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "خدمات الطوارئ الفورية",
        desc: "مشروع خدمي رقمي يهدف لتسهيل الوصول للخدمات الطبية والطارئة.",
        tech: "Web Dev / UI",
        link: "https://dancing-biscochitos-a7aae.netlify.app/",
        img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "تطبيق صحي متكامل",
        desc: "عرض لواجهات تطبيق ذكي لمتابعة اللياقة البدنية والقياسات الصحية.",
        tech: "Flutter UI",
        link: "https://my-portfolio-ah.netlify.app/",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
    }
];
const projectsContainer = document.getElementById('projects-container');

function loadProjects() {
    projectsContainer.innerHTML = "";
    myProjects.forEach(proj => {
        const card = `
            <div class="project-card">
                <img src="${proj.img}" alt="${proj.title}" class="project-image" onerror="this.src='https://via.placeholder.com/600x400'">
                <h3>${proj.title}</h3>
                <p style="font-size: 0.9rem; color: #aaa6c3; margin: 10px 0;">${proj.desc}</p>
                <span class="tech-tag">${proj.tech}</span>
                <a href="${proj.link}" target="_blank" class="project-link">زيارة المشروع ←</a>
            </div>
        `;
        projectsContainer.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);