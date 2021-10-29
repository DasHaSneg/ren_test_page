import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

//import all locales
import en from './languages/en.json';
import ru from './languages/ru-ru.json';

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use (initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true,
        },
    })

export function strings(name, params = {}) {
    return i18n.t(name, params)
}

export function setLocale(locale) {
    i18n.changeLanguage(locale);
}
export default i18n;
