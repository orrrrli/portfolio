import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export const getContent = (lang: Lang): Content => (lang === "es" ? es : en);
