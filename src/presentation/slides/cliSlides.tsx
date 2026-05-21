import { Slide } from '@revealjs/react';
import { useLang } from '../../i18n';
import { COLORS } from '../../theme';
import {
  CommandPanel,
  FeatureCard,
  FloatingOrb,
  SectionHeading,
  SlideShell,
  SpeakerNotes,
} from '../components';

export function CliSlides() {
  const { t } = useLang();

  return (
    <>
      <Slide data-background-gradient="radial-gradient(circle at 14% 18%, rgba(59,130,246,0.14), transparent 28%), radial-gradient(circle at 86% 12%, rgba(34,211,238,0.12), transparent 24%)">
        <SpeakerNotes items={t.cliIntro.cmd.notes} />
        <SlideShell>
          <FloatingOrb color="rgba(59,130,246,0.32)" className="left-4 top-4 h-36 w-36" />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.cliIntro.eyebrow}
              title={t.cliIntro.title}
              subtitle={t.cliIntro.subtitle}
            />

            <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
              <div className="grid grid-cols-2 gap-4">
                {t.cliIntro.cards.map((card) => (
                  <FeatureCard key={card.title} compact {...card} />
                ))}
              </div>

              <CommandPanel
                label={t.cliIntro.cmd.label}
                accent={COLORS.sky}
                title={t.cliIntro.cmd.title}
                commands={t.cliIntro.cmd.commands}
                notes={t.cliIntro.cmd.notes}
              />
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 16%, rgba(34,211,238,0.14), transparent 28%), radial-gradient(circle at 84% 16%, rgba(168,85,247,0.12), transparent 24%)">
        <SpeakerNotes items={t.chronicle.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.chronicle.eyebrow}
              title={t.chronicle.title}
              subtitle={t.chronicle.subtitle}
            />

            <div className="grid grid-cols-[1fr_1.05fr] items-start gap-4">
              <div className="grid grid-cols-2 gap-4">
                {t.chronicle.items.map((item, index) => (
                  <FeatureCard key={item.title} compact dataId={`chronicle-${index}`} {...item} />
                ))}
              </div>

              <CommandPanel
                label={t.chronicle.cmd.label}
                accent={COLORS.cyan}
                title={t.chronicle.cmd.title}
                commands={t.chronicle.cmd.commands}
                notes={t.chronicle.cmd.notes}
              />
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 20% 14%, rgba(59,130,246,0.14), transparent 28%), radial-gradient(circle at 85% 24%, rgba(34,211,238,0.10), transparent 24%)">
        <SpeakerNotes items={t.cliDiscovery.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.cliDiscovery.eyebrow}
              title={t.cliDiscovery.title}
              subtitle={t.cliDiscovery.subtitle}
            />

            <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-4">
              <CommandPanel
                label={t.cliDiscovery.cmd.label}
                accent={COLORS.cyan}
                title={t.cliDiscovery.cmd.title}
                commands={t.cliDiscovery.cmd.commands}
                notes={t.cliDiscovery.cmd.notes}
              />

              <div className="grid grid-cols-1 gap-4">
                {t.cliDiscovery.items.map((capability, index) => (
                  <FeatureCard
                    key={capability.title}
                    compact
                    dataId={`cli-discovery-${index}`}
                    {...capability}
                  />
                ))}
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(245,158,11,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(34,211,238,0.10), transparent 24%)">
        <SpeakerNotes items={t.cliMcp.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.cliMcp.eyebrow}
              title={t.cliMcp.title}
              subtitle={t.cliMcp.subtitle}
            />

            <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-4">
              <CommandPanel
                label={t.cliMcp.cmd.label}
                accent={COLORS.amber}
                title={t.cliMcp.cmd.title}
                commands={t.cliMcp.cmd.commands}
                notes={t.cliMcp.cmd.notes}
              />

              <div className="grid grid-cols-1 gap-4">
                {t.cliMcp.items.map((capability, index) => (
                  <FeatureCard key={capability.title} compact dataId={`cli-mcp-${index}`} {...capability} />
                ))}
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 80% 18%, rgba(52,211,153,0.14), transparent 28%), radial-gradient(circle at 18% 20%, rgba(245,158,11,0.12), transparent 24%)">
        <SpeakerNotes items={t.cliExecution.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.cliExecution.eyebrow}
              title={t.cliExecution.title}
              subtitle={t.cliExecution.subtitle}
            />

            <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
              <div className="grid grid-cols-1 gap-4">
                {t.cliExecution.items.map((capability, index) => (
                  <FeatureCard
                    key={capability.title}
                    compact
                    dataId={`cli-execution-${index}`}
                    {...capability}
                  />
                ))}
              </div>

              <CommandPanel
                label={t.cliExecution.cmd.label}
                accent={COLORS.green}
                title={t.cliExecution.cmd.title}
                commands={t.cliExecution.cmd.commands}
                notes={t.cliExecution.cmd.notes}
              />
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(96,165,250,0.14), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.12), transparent 24%)">
        <SpeakerNotes items={t.cliPr.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.cliPr.eyebrow}
              title={t.cliPr.title}
              subtitle={t.cliPr.subtitle}
            />

            <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-4">
              <CommandPanel
                label={t.cliPr.cmd.label}
                accent={COLORS.blue}
                title={t.cliPr.cmd.title}
                commands={t.cliPr.cmd.commands}
                notes={t.cliPr.cmd.notes}
              />

              <div className="grid grid-cols-1 gap-4">
                {t.cliPr.items.map((capability, index) => (
                  <FeatureCard key={capability.title} compact dataId={`cli-pr-${index}`} {...capability} />
                ))}
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>
    </>
  );
}
