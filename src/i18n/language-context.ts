import { createContext } from 'react';
import type { Lang, Translation } from './types';

export type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
