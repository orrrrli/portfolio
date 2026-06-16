"use client";

import { useEffect, useState } from "react";
import { ToggleButton } from "@once-ui-system/core";
import { Language } from "@/types";

export const LanguageToggle: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const current = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="))
      ?.split("=")[1];
    if (current === "es") setLang("es");
  }, []);

  const toggle = () => {
    const next: Language = lang === "en" ? "es" : "en";
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    setLang(next);
    window.location.reload();
  };

  return (
    <ToggleButton
      label={lang.toUpperCase()}
      onClick={toggle}
      aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
    />
  );
};
