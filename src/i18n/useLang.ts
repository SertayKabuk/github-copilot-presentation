import { useContext } from 'react';
import { LanguageContext, type LanguageContextValue } from './language-context';

export function useLang(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider');
  }

  return context;
}
