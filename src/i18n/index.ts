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

const i18n = createI18n({
  locale: "cn",
  messages: messages,
});

export { i18n, languages };
