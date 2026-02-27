/**
 * TM Energy - Ramadan Landing Page
 * Interactive JavaScript with Smooth Animations
 */

// ============================================
// I18N (AR / EN)
// ============================================
const I18N_DICTIONARY = {
    ar: {
        meta: {
            title: 'TM Energy - الموقع قيد الإنشاء',
            description: 'TM Energy - محركات بحرية، مولدات كهرباء، قطع غيار واكسسوارات. الموقع الجديد قيد الإنشاء.'
        },
        nav: {
            about: 'من نحن',
            services: 'خدماتنا',
            contact: 'تواصل معنا'
        },
        hero: {
            crescentAlt: 'هلال رمضان',
            badge: 'رمضان كريم',
            titleLine1: 'موقعنا الجديد',
            titleLine2: 'قيد الإنشاء',
            description: 'نحن نعمل على بناء تجربة رقمية استثنائية تجمع بين قوة الأداء وجمال التصميم. ترقبوا المفاجآت قريباً!',
            features: {
                fast: 'سرعة فائقة',
                design: 'تصميم عصري',
                smooth: 'تجربة سلسة'
            },
            cta: {
                contact: 'تواصل معنا',
                discover: 'اكتشف المزيد'
            },
            scroll: 'اسحب للأسفل'
        },
        countdown: {
            label: 'الوقت المتبقي للإطلاق',
            units: {
                days: 'يوم',
                hours: 'ساعة',
                minutes: 'دقيقة',
                seconds: 'ثانية'
            }
        },
        about: {
            badge: 'من نحن',
            subtitle: 'شريكك الموثوق في عالم المحركات والطاقة',
            cards: {
                specialized: {
                    title: 'شركة متخصصة',
                    desc: 'نحن شركة متخصصة في المحركات البحرية الخارجية والداخلية، ومولدات الكهرباء البنزين والديزل، والمعدات الزراعية والمضخات.'
                },
                experience: {
                    title: 'خبرة واسعة',
                    desc: 'نقدم جميع العلامات التجارية للمحركات التي تجسد التكنولوجيا المتطورة والحرفية الدقيقة، مما يضمن موثوقية لا مثيل لها.'
                },
                mission: {
                    title: 'هدفنا',
                    desc: 'هدفنا هو تقديم أعلى خدمة مميزة تنال استحسان العملاء والشركات والمصانع والجهات الحكومية.'
                }
            },
            stats: {
                years: 'سنوات خبرة',
                clients: 'عميل سعيد',
                brands: 'علامة تجارية',
                support: 'دعم فني'
            }
        },
        services: {
            badge: 'خدماتنا',
            title: { pre: 'ما', accent: 'نقدمه' },
            subtitle: 'حلول متكاملة لجميع احتياجاتك',
            cards: {
                marineEngines: {
                    title: 'المحركات البحرية',
                    desc: 'محركات خارجية وداخلية من أفضل العلامات التجارية: ميركوري، هوندا، سوزوكي، ياماها',
                    imageAlt: 'صورة توضيحية للمحركات البحرية'
                },
                generators: {
                    title: 'المولدات الكهربائية',
                    desc: 'مولدات بنزين وديزل بقدرات متنوعة تلبي جميع الاحتياجات المنزلية والتجارية',
                    imageAlt: 'صورة توضيحية للمولدات الكهربائية',
                    tags: { gasoline: 'بنزين', diesel: 'ديزل', silent: 'صامتة' }
                },
                spareParts: {
                    title: 'قطع الغيار',
                    desc: 'قطع غيار أصلية وبدائل عالية الجودة لجميع أنواع المحركات والمولدات',
                    imageAlt: 'صورة توضيحية لقطع الغيار',
                    tags: { original: 'أصلي', alternatives: 'بدائل', warranty: 'ضمان' }
                },
                accessories: {
                    title: 'الاكسسوارات',
                    desc: 'اكسسوارات ومعدات بحرية وزراعية متنوعة بأعلى معايير الجودة',
                    imageAlt: 'صورة توضيحية للاكسسوارات',
                    tags: { marine: 'بحرية', agriculture: 'زراعية', industrial: 'صناعية' }
                }
            }
        },
        cta: {
            title: 'هل تريد التواصل معنا؟',
            description: 'نحن هنا لمساعدتك في جميع استفساراتك. تواصل معنا الآن واحصل على أفضل العروض والخدمات.',
            buttons: {
                contactNow: 'تواصل معنا الآن',
                browseProducts: 'تصفح المنتجات'
            }
        },
        footer: {
            description: 'شريكك الموثوق في عالم المحركات البحرية والمولدات الكهربائية وقطع الغيار.',
            quickLinks: 'روابط سريعة',
            products: 'المنتجات',
            followUs: 'تابعنا',
            copyright: '© 2026 TM Energy. جميع الحقوق محفوظة.',
            comingSoon: 'الموقع الجديد قيد الإنشاء 🚀'
        },
        loading: {
            text: 'جاري التحميل...'
        },
        lang: {
            aria: {
                switch: 'تبديل اللغة'
            },
            switchToEn: 'EN',
            switchToAr: 'العربية'
        }
    },
    en: {
        meta: {
            title: 'TM Energy - Coming Soon',
            description: 'TM Energy - Marine engines, generators, spare parts, and accessories. Our new website is coming soon.'
        },
        nav: {
            about: 'About us',
            services: 'Services',
            contact: 'Contact us'
        },
        hero: {
            crescentAlt: 'Ramadan crescent',
            badge: 'Ramadan Kareem',
            titleLine1: 'Our new website',
            titleLine2: 'Coming soon',
            description: 'We’re building an exceptional digital experience that combines powerful performance with beautiful design. Stay tuned—something great is coming!',
            features: {
                fast: 'Lightning fast',
                design: 'Modern design',
                smooth: 'Smooth experience'
            },
            cta: {
                contact: 'Contact us',
                discover: 'Learn more'
            },
            scroll: 'Scroll down'
        },
        countdown: {
            label: 'Time until launch',
            units: {
                days: 'Days',
                hours: 'Hours',
                minutes: 'Minutes',
                seconds: 'Seconds'
            }
        },
        about: {
            badge: 'About us',
            subtitle: 'Your trusted partner in engines and power',
            cards: {
                specialized: {
                    title: 'Specialized company',
                    desc: 'We specialize in outboard and inboard marine engines, gasoline and diesel generators, as well as agricultural equipment and pumps.'
                },
                experience: {
                    title: 'Extensive experience',
                    desc: 'We offer leading engine brands that reflect advanced technology and precise craftsmanship—ensuring outstanding reliability.'
                },
                mission: {
                    title: 'Our mission',
                    desc: 'Our mission is to provide a premium service that earns the trust of customers, businesses, factories, and government entities.'
                }
            },
            stats: {
                years: 'Years of experience',
                clients: 'Happy clients',
                brands: 'Brands',
                support: 'Technical support'
            }
        },
        services: {
            badge: 'Services',
            title: { pre: 'What', accent: 'we offer' },
            subtitle: 'Complete solutions for all your needs',
            cards: {
                marineEngines: {
                    title: 'Marine engines',
                    desc: 'Outboard and inboard engines from top brands: Mercury, Honda, Suzuki, Yamaha',
                    imageAlt: 'Illustration of marine engines'
                },
                generators: {
                    title: 'Power generators',
                    desc: 'Gasoline and diesel generators with a range of capacities for home and business needs',
                    imageAlt: 'Illustration of power generators',
                    tags: { gasoline: 'Gasoline', diesel: 'Diesel', silent: 'Silent' }
                },
                spareParts: {
                    title: 'Spare parts',
                    desc: 'Original and high-quality alternatives for all types of engines and generators',
                    imageAlt: 'Illustration of spare parts',
                    tags: { original: 'Original', alternatives: 'Alternatives', warranty: 'Warranty' }
                },
                accessories: {
                    title: 'Accessories',
                    desc: 'A wide range of marine and agricultural accessories and equipment with the highest quality standards',
                    imageAlt: 'Illustration of accessories and equipment',
                    tags: { marine: 'Marine', agriculture: 'Agricultural', industrial: 'Industrial' }
                }
            }
        },
        cta: {
            title: 'Want to get in touch?',
            description: 'We’re here to help with all your questions. Contact us now and get the best offers and services.',
            buttons: {
                contactNow: 'Contact us now',
                browseProducts: 'Browse products'
            }
        },
        footer: {
            description: 'Your trusted partner for marine engines, power generators, and spare parts.',
            quickLinks: 'Quick links',
            products: 'Products',
            followUs: 'Follow us',
            copyright: '© 2026 TM Energy. All rights reserved.',
            comingSoon: 'New website coming soon 🚀'
        },
        loading: {
            text: 'Loading...'
        },
        lang: {
            aria: {
                switch: 'Switch language'
            },
            switchToEn: 'EN',
            switchToAr: 'العربية'
        }
    }
};

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function normalizeLang(lang) {
    return lang === 'ar' ? 'ar' : 'en';
}

function detectInitialLang() {
    try {
        const saved = localStorage.getItem('tmenergy_lang');
        if (saved) return normalizeLang(saved);
    } catch (_) {
        // ignore
    }

    const browserLang = (navigator.language || '').toLowerCase();
    return browserLang.startsWith('ar') ? 'ar' : 'en';
}

function setDocumentDirection(lang) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.dataset.lang = lang;
}

function applyTranslations(lang) {
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.en;

    // Elements with text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr');
        const value = getNestedValue(dict, key);
        if (value === undefined) return;

        if (attr) {
            el.setAttribute(attr, String(value));
        } else {
            el.textContent = String(value);
        }
    });

    // Loading text (animated letters)
    renderLoadingText(getNestedValue(dict, 'loading.text') || '');

    // Language toggle buttons show the OTHER language
    const switchLabel = lang === 'ar'
        ? getNestedValue(dict, 'lang.switchToEn') || 'EN'
        : getNestedValue(dict, 'lang.switchToAr') || 'العربية';

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = switchLabel;
    }

    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    if (mobileLangToggle) {
        mobileLangToggle.textContent = switchLabel;
    }
}

function renderLoadingText(text) {
    const container = document.getElementById('loading-text');
    if (!container) return;

    container.innerHTML = '';
    const chars = String(text).split('');
    chars.forEach((ch, idx) => {
        const span = document.createElement('span');
        span.className = 'loading-letter' + (ch === ' ' ? ' space' : '');
        span.textContent = ch;
        span.style.animationDelay = `${0.1 + idx * 0.05}s`;
        container.appendChild(span);
    });
}

function setLanguage(lang) {
    const normalized = normalizeLang(lang);
    setDocumentDirection(normalized);
    applyTranslations(normalized);
    try {
        localStorage.setItem('tmenergy_lang', normalized);
    } catch (_) {
        // ignore
    }
}

function initI18n() {
    const initial = detectInitialLang();
    setLanguage(initial);

    const langToggle = document.getElementById('lang-toggle');
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    const onToggle = () => {
        const current = document.documentElement.dataset.lang || initial;
        setLanguage(current === 'ar' ? 'en' : 'ar');
    };

    if (langToggle) langToggle.addEventListener('click', onToggle);
    if (mobileLangToggle) mobileLangToggle.addEventListener('click', onToggle);
}

// ============================================
// DOM CONTENT LOADED
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initI18n();
    initLoadingScreen();
    initParticles();
    initStars();
    initNavbar();
    initMobileMenu();
    initCountdown();
    initScrollAnimations();
    initCounterAnimation();
    initSmoothScroll();
    initParallaxEffect();
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    if (!loadingScreen || !mainContent) return;
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        
        // Trigger hero animations after loading
        setTimeout(() => {
            triggerHeroAnimations();
        }, 300);
        
    }, 1500);
}

function triggerHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero [data-aos]');
    heroElements.forEach(el => {
        el.classList.add('aos-animate');
    });
}

// ============================================
// PARTICLES BACKGROUND
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random() * 0.5 + 0.3;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
    `;
    
    container.appendChild(particle);
}

// ============================================
// STARS BACKGROUND
// ============================================
function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    
    const starCount = window.innerWidth < 768 ? 30 : 60;
    
    for (let i = 0; i < starCount; i++) {
        createStar(container);
    }
}

function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random properties
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    
    star.style.cssText = `
        top: ${top}%;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
    `;
    
    container.appendChild(star);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    let ticking = false;
    
    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuBtn || !mobileMenu) return;
    
    // Toggle menu
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    // Fixed target date:
    // - Prefer `#countdown[data-countdown-date]` (ISO-like string)
    // - Fallback to next April 1st (local time)
    const targetDate = (() => {
        const attr = countdownEl ? countdownEl.getAttribute('data-countdown-date') : null;
        if (attr) {
            const parsed = new Date(attr);
            if (!Number.isNaN(parsed.getTime())) return parsed;
        }

        const now = new Date();
        const year = now.getFullYear();
        // Month is 0-based: 3 = April
        const apr1 = new Date(year, 3, 1, 0, 0, 0, 0);
        if (apr1.getTime() <= now.getTime()) {
            apr1.setFullYear(year + 1);
        }
        return apr1;
    })();
    
    let intervalId = null;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // Countdown finished
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            if (intervalId) clearInterval(intervalId);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update with animation
        updateCountdownValue(daysEl, days);
        updateCountdownValue(hoursEl, hours);
        updateCountdownValue(minutesEl, minutes);
        updateCountdownValue(secondsEl, seconds);
    }
    
    function updateCountdownValue(element, value) {
        const formattedValue = value.toString().padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.style.transform = 'scale(1.2)';
            element.style.transition = 'transform 0.2s ease';
            element.textContent = formattedValue;
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    intervalId = setInterval(updateCountdown, 1000);
}

// ============================================
// SCROLL ANIMATIONS (AOS-like)
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.crescent-moon, .floating-lantern');
    
    if (parallaxElements.length === 0) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // Disable on touch devices
    
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// MOUSE FOLLOW EFFECT (for desktop)
// ============================================
function initMouseFollowEffect() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const decorations = hero.querySelectorAll('.crescent-moon, .floating-lantern');
    
    hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        decorations.forEach((el, index) => {
            const speed = (index + 1) * 10;
            el.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    </style>
`);

// ============================================
// TYPING EFFECT (optional enhancement)
// ============================================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const speed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// ============================================
// GLITCH EFFECT (for special elements)
// ============================================
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(el => {
        setInterval(() => {
            el.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(255, 0, 0, 0.5),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0, 255, 0, 0.5),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0, 0, 255, 0.5)
            `;
            
            setTimeout(() => {
                el.style.textShadow = 'none';
            }, 100);
        }, 3000);
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message);
});

// ============================================
// VISIBILITY API (pause animations when tab is hidden)
// ============================================
document.addEventListener('visibilitychange', function() {
    const particles = document.querySelectorAll('.particle');
    const stars = document.querySelectorAll('.star');
    
    if (document.hidden) {
        particles.forEach(p => p.style.animationPlayState = 'paused');
        stars.forEach(s => s.style.animationPlayState = 'paused');
    } else {
        particles.forEach(p => p.style.animationPlayState = 'running');
        stars.forEach(s => s.style.animationPlayState = 'running');
    }
});

// ============================================
// RESIZE HANDLER
// ============================================
const handleResize = debounce(() => {
    // Reinitialize particles on resize
    const particlesContainer = document.getElementById('particles');
    const starsContainer = document.getElementById('stars');
    
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        initParticles();
    }
    
    if (starsContainer) {
        starsContainer.innerHTML = '';
        initStars();
    }
}, 250);

window.addEventListener('resize', handleResize);

// ============================================
// PREFERS REDUCED MOTION
// ============================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable complex animations
    document.querySelectorAll('.particle, .star').forEach(el => {
        el.style.display = 'none';
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🌙 TM Energy - Ramadan Landing Page', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%c✨ Designed with love for Ramadan', 'color: #FFD700; font-size: 14px;');
console.log('%c🚀 Coming Soon...', 'color: #FF8C00; font-size: 16px; font-weight: bold;');
