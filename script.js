// Initialize Lucide icons correctly
function initIcons() {
    lucide.createIcons();
}

// Language Data
const translations = {
    ar: {
        badge: 'أفضل تجربة بوت ميوزك',
        title: 'ارتقِ بصوت <br><span class="text-emerald-500">ديسكورد الخاص بك</span>',
        description: 'بوت ميوزك احترافي لسيرفرك. جودة صوت عالية، وسهل الاستخدام. مجاني تماماً لجميع السيرفرات.',
        btnInvite: 'إضافة البوت',
        btnSupport: 'انضم لسيرفرنا',
        supportText: 'سيرفر الدعم',
        feat1Title: 'أوامر التشغيل',
        feat1Desc1: 'شغل رابط أو اسم الأغنية',
        feat1Desc2: 'تشغيل رابط أو اسم الأغنية',
        feat2Title: 'مجاني للجميع',
        feat2Desc: 'البوت متاح مجاناً لأي سيرفر ديسكورد. لا توجد تكاليف خفية أو اشتراكات.',
        feat2Footer: 'حياكم في سيرفري',
        footerText: '© 2026 إف-ميوزك. جميع الحقوق محفوظة.',
        langBtn: 'English',
        dir: 'rtl',
        font: 'font-arabic',
        align: 'text-right',
        flexAlign: 'justify-end'
    },
    en: {
        badge: 'The Ultimate Music Bot Experience',
        title: 'ELEVATE YOUR <br><span class="text-emerald-500">DISCORD SOUND</span>',
        description: 'Professional music bot for your server. High-quality sound, easy to use. Completely free for all servers.',
        btnInvite: 'Add to Discord',
        btnSupport: 'Join Support',
        supportText: 'Support Server',
        feat1Title: 'Play Commands',
        feat1Desc1: 'Play a link or song name',
        feat1Desc2: 'Play a link or song name',
        feat2Title: 'Free for Everyone',
        feat2Desc: 'The bot is available for free for any Discord server. No hidden costs or subscriptions.',
        feat2Footer: 'Welcome to my server',
        footerText: '© 2026 F-Music. All rights reserved.',
        langBtn: 'العربية',
        dir: 'ltr',
        font: 'font-sans',
        align: 'text-left',
        flexAlign: 'justify-start'
    }
};

let currentLang = 'ar';

function updateLanguage(lang) {
    const t = translations[lang];
    const isAr = lang === 'ar';

    // Update Text Content
    document.getElementById('badge').textContent = t.badge;
    document.getElementById('title').innerHTML = t.title;
    document.getElementById('description').textContent = t.description;
    document.getElementById('btnInvite').textContent = t.btnInvite;
    document.getElementById('btnSupport').textContent = t.btnSupport;
    document.getElementById('supportText').textContent = t.supportText;
    document.getElementById('feat1Title').textContent = t.feat1Title;
    document.getElementById('feat1Desc1').textContent = t.feat1Desc1;
    document.getElementById('feat1Desc2').textContent = t.feat1Desc2;
    document.getElementById('feat2Title').textContent = t.feat2Title;
    document.getElementById('feat2Desc').textContent = t.feat2Desc;
    document.getElementById('feat2Footer').textContent = t.feat2Footer;
    document.getElementById('footerText').textContent = t.footerText;
    document.getElementById('langText').textContent = t.langBtn;

    // Update Attributes
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.className = `bg-black text-white overflow-x-hidden ${t.font}`;

    // Update Alignment for Features
    const featureCards = document.querySelectorAll('main .grid > div');
    featureCards.forEach(card => {
        card.className = `p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group hover:border-emerald-500/30 transition-colors ${t.align}`;
        
        // Update inner flex alignments
        const flexContainers = card.querySelectorAll('.flex');
        flexContainers.forEach(flex => {
            if (flex.classList.contains('justify-end') || flex.classList.contains('justify-start')) {
                flex.classList.remove('justify-end', 'justify-start');
                flex.classList.add(t.flexAlign);
            }
        });
    });

    // Re-init icons to ensure they stay visible
    initIcons();
}

// Event Listeners
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(currentLang);
});

// Initial Load Animations
window.addEventListener('DOMContentLoaded', () => {
    initIcons();
    
    // Trigger animations
    const animatedElements = [
        'heroBadge', 'title', 'description', 
        document.querySelector('main .flex'), 
        document.querySelector('main .grid')
    ];

    animatedElements.forEach((el, i) => {
        if (el) {
            setTimeout(() => {
                el.classList.add('opacity-100');
            }, i * 150);
        }
    });
});
