import { createI18n } from "vue-i18n";
import en from "./en/index.json";
import cn from "./zh-CN/index.json";

import enDSRE from "./en/DSRE";
import cnDSRE from "@/DSRE";

const languages = {
  en: "English",
  cn: "中文",
};

const messages = {
  en: { ...en, DSRE: enDSRE },
  cn: { ...cn, DSRE: cnDSRE },
};

const LOCALE_KEY = "locale";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem(LOCALE_KEY) || "cn",
  messages: messages,
});

const setLocale = (locale: string) => {
  localStorage.setItem(LOCALE_KEY, locale);
  (i18n.global.locale as unknown as { value: string }).value = locale;
};

export { i18n, languages, setLocale };
