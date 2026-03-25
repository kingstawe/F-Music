// Initialize Lucide icons
lucide.createIcons();

const langToggle = document.getElementById('langToggle');
const html = document.documentElement;
const body = document.body;

let currentLang = 'ar';

const translations = {
    ar: {
        badge: 'أفضل تجربة بوت ميوزك',
        title: 'ارتقِ بصوت <br><span class="text-emerald-500">ديسكورد الخاص بك</span>',
        description: 'بوت ميوزك احترافي لسيرفرك. جودة صوت عالية، وسهل الاستخدام. مجاني تماماً لجميع السيرفرات.',
        btnInvite: 'إضافة البوت',
        btnSupport: 'انضم لسيرفرنا',
        feat1Title: 'أوامر التشغيل',
        feat1Desc1: 'شغل رابط أو اسم الأغنية',
        feat1Desc2: 'تشغيل رابط أو اسم الأغنية',
        feat2Title: 'مجاني للجميع',
        feat2Desc: 'البوت متاح مجاناً لأي سيرفر ديسكورد. لا توجد تكاليف خفية أو اشتراكات.',
        feat2Footer: 'حياكم في سيرفري',
        footerText: '© 2026 إف-ميوزك. جميع الحقوق محفوظة.',
        toggleBtn: 'English',
        dir: 'rtl',
        font: 'font-arabic'
    },
    en: {
        badge: 'The Ultimate Music Bot Experience',
        title: 'ELEVATE YOUR <br><span class="text-emerald-500">DISCORD SOUND</span>',
        description: 'Professional music bot for your server. High-quality sound, easy to use. Completely free for all servers.',
        btnInvite: 'Add to Discord',
        btnSupport: 'Join Support',
        feat1Title: 'Play Commands',
        feat1Desc1: 'Play a link or song name',
        feat1Desc2: 'Play a link or song name',
        feat2Title: 'Free for Everyone',
        feat2Desc: 'The bot is available for free for any Discord server. No hidden costs or subscriptions.',
        feat2Footer: 'Welcome to my server',
        footerText: '© 2026 F-Music. All rights reserved.',
        toggleBtn: 'العربية',
        dir: 'ltr',
        font: 'font-sans'
    }
};

function updateLanguage(lang) {
    const t = translations[lang];
    
    document.getElementById('badge').textContent = t.badge;
    document.getElementById('title').innerHTML = t.title;
    document.getElementById('description').textContent = t.description;
    document.getElementById('btnInvite').textContent = t.btnInvite;
    document.getElementById('btnSupport').textContent = t.btnSupport;
    document.getElementById('feat1Title').textContent = t.feat1Title;
    document.getElementById('feat1Desc1').textContent = t.feat1Desc1;
    document.getElementById('feat1Desc2').textContent = t.feat1Desc2;
    document.getElementById('feat2Title').textContent = t.feat2Title;
    document.getElementById('feat2Desc').textContent = t.feat2Desc;
    document.getElementById('feat2Footer').textContent = t.feat2Footer;
    document.getElementById('footerText').textContent = t.footerText;
    langToggle.textContent = t.toggleBtn;
    
    html.setAttribute('dir', t.dir);
    html.setAttribute('lang', lang);
    
    body.classList.remove('font-arabic', 'font-sans');
    body.classList.add(t.font);

    // Adjust grid alignment
    const grid = document.getElementById('featuresGrid');
    if (lang === 'ar') {
        grid.classList.remove('text-left');
        grid.classList.add('text-right');
    } else {
        grid.classList.remove('text-right');
        grid.classList.add('text-left');
    }
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(currentLang);
});

// Set initial language
updateLanguage('ar');