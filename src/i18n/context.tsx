import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type LanguageContextValue } from './language-context';
import { translations } from './translations';
import type { Lang } from './types';

const STORAGE_KEY = 'presentation.lang';
const DEFAULT_LANG: Lang = 'tr';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') {
    return DEFAULT_LANG;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'tr' ? stored : DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
