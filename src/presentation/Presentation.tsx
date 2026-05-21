import { Deck } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import { useLang } from '../i18n';
import { LanguageToggle } from './components';
import { CliSlides } from './slides/cliSlides';
import { ClosingSlides } from './slides/closingSlides';
import { OverviewSlides } from './slides/overviewSlides';
import { WorkflowSlides } from './slides/workflowSlides';

const deckConfig = {
  width: 1280,
  height: 720,
  margin: 0.03,
  minScale: 0.55,
  maxScale: 1.05,
  hash: true,
  center: false,
  controls: true,
  progress: true,
  slideNumber: 'c/t',
  transition: 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'slide',
  autoAnimateEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  autoAnimateDuration: 0.65,
} as const;

export function Presentation() {
  const { lang } = useLang();

  return (
    <div className="h-screen w-screen bg-transparent">
      <LanguageToggle />
      <Deck key={lang} config={deckConfig} plugins={[RevealHighlight, RevealNotes]}>
        <OverviewSlides />
        <WorkflowSlides />
        <CliSlides />
        <ClosingSlides />
      </Deck>
    </div>
  );
}
