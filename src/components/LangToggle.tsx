"use client";

import { useEffect, useState } from "react";

export default function LangToggle() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    // Lire le lang depuis l'URL ou localStorage
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    const stored = localStorage.getItem("tgai_lang");
    const detected = urlLang === "en" ? "en" : stored === "en" ? "en" : "fr";
    setLang(detected as "fr" | "en");
  }, []);

  function toggle() {
    const next = lang === "fr" ? "en" : "fr";
    setLang(next);
    localStorage.setItem("tgai_lang", next);

    // Mettre à jour l'URL si elle a déjà un param lang
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url.toString());
    }
  }

  return (
    <button
      onClick={toggle}
      title={lang === "fr" ? "Switch to English" : "Passer en français"}
      className="text-xl border border-[#425C47]/20 rounded-md px-2 py-1 hover:bg-[#425C47]/8 transition-all select-none"
    >
      {lang === "fr" ? "🇬🇧" : "🇫🇷"}
    </button>
  );
}
