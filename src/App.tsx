import { LanguageProvider } from './i18n';
import { Presentation } from './presentation/Presentation';

function App() {
  return (
    <LanguageProvider>
      <Presentation />
    </LanguageProvider>
  );
}

export default App;
