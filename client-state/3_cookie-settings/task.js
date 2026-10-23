const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 год
const APP_COOKIES = ['cookie_consent', 'theme', 'lang'];
const DEFAULTS = { theme: 'light', lang: 'ru' };

const banner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');
const themeSel = document.getElementById('theme');
const langSel = document.getElementById('lang');
const showBtn = document.getElementById('showCookies');
const clearBtn = document.getElementById('clearCookies');
const cookiesOut = document.getElementById('cookiesOut');

function applyTheme(theme) {
  document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru][data-en]').forEach(el => {
    const text = el.dataset[lang];
    if (text) el.textContent = text;
  });
}

/** Применяет все настройки и синхронизирует <select>-ы */
function applyAll(settings) {
  themeSel.value = settings.theme;
  langSel.value  = settings.lang;

  applyTheme(settings.theme);
  applyLang(settings.lang);
}

const initial = {
  theme: getCookie('theme') ?? DEFAULTS.theme,
  lang:  getCookie('lang')  ?? DEFAULTS.lang
};

if (!['light', 'dark'].includes(initial.theme)) {
  initial.theme = DEFAULTS.theme;
}
if (!['ru', 'en'].includes(initial.lang)) {
  initial.lang  = DEFAULTS.lang;
}

applyAll(initial);
refreshBanner();

function setCookie(name, value, maxAge = COOKIE_MAX_AGE) {
 
}

function getCookie(name) {
  
}

function deleteCookie(name) {
}

/** Разбирает document.cookie в объект { name: value } */
function parseCookies() {

}

function refreshBanner() {

}

acceptBtn.addEventListener('click', () => {

});

themeSel.addEventListener('change', () => {

});

langSel.addEventListener('change', () => {

});

showBtn.addEventListener('click', () => {

});

clearBtn.addEventListener('click', () => {

});