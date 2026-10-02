/* =========================================================
   Vancouver Academy of Dance — homepage behaviour
   1. Language toggle (EN / 中文)
   2. Mobile menu
   3. Scroll reveal animations
   ========================================================= */

// Tell the CSS that JavaScript is running (so reveal animations are safe to use).
document.documentElement.classList.add('js');

/* ---------- 1. Language toggle ---------- */
// Any element with class="i18n" data-i18n="key" gets its text swapped.
// To add more translated text: add the key to both lists below,
// then put class="i18n" data-i18n="yourKey" on the element in index.html.
var TRANSLATIONS = {
  en: {
    nav0: 'The Academy', nav1: 'Classes', nav2: 'Faculty', nav3: 'Workshops', nav4: 'Contact',
    register: 'Register',
    label: 'Richmond & Vancouver',
    h1: 'Your journey to dance excellence begins here',
    cta: 'Register now',
    explore: 'Explore classes'
  },
  zh: {
    nav0: '學院', nav1: '課程', nav2: '師資', nav3: '工作坊', nav4: '聯絡',
    register: '報名',
    label: '列治文 · 溫哥華',
    h1: '卓越舞蹈之旅，由此開始',
    cta: '立即報名',
    explore: '探索課程'
  }
};

function setLanguage(lang) {
  var words = TRANSLATIONS[lang];
  if (!words) return;

  document.querySelectorAll('.i18n').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (words[key]) el.textContent = words[key];
  });

  document.documentElement.classList.toggle('lang-zh', lang === 'zh');
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

setLanguage('en');

/* ---------- 2. Mobile menu ---------- */
var menuBtn = document.getElementById('menu-btn');
var mobileMenu = document.getElementById('mobile-menu');

function setMenuOpen(open) {
  mobileMenu.hidden = !open;
  menuBtn.textContent = open ? 'Close' : 'Menu';
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

menuBtn.addEventListener('click', function () {
  setMenuOpen(mobileMenu.hidden);
});

// Close the menu after tapping a link in it.
mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () { setMenuOpen(false); });
});

/* ---------- 3. Scroll reveal ---------- */
// Elements with data-reveal fade/slide in when they scroll into view.
var revealEls = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' }); // "top passes 92% of the viewport"

  revealEls.forEach(function (el) { observer.observe(el); });
} else {
  // Very old browsers: just show everything.
  revealEls.forEach(function (el) { el.classList.add('is-revealed'); });
}
