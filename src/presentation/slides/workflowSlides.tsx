import { Code, Slide } from '@revealjs/react';
import { useLang } from '../../i18n';
import { COLORS } from '../../theme';
import { cn } from '../cn';
import {
  AccentPill,
  CommandPanel,
  FeatureCard,
  FloatingOrb,
  SectionHeading,
  SlideShell,
  SpeakerNotes,
} from '../components';

export function WorkflowSlides() {
  const { t } = useLang();

  return (
    <>
      <Slide data-background-gradient="radial-gradient(circle at 18% 16%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 84% 16%, rgba(34,211,238,0.10), transparent 24%)">
        <SpeakerNotes items={t.visibility.cmd.notes} />
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.visibility.eyebrow}
              title={t.visibility.title}
              subtitle={t.visibility.subtitle}
            />

            <div className="grid grid-cols-[1fr_1.05fr] items-start gap-4">
              <div className="grid grid-cols-2 gap-4">
                {t.visibility.items.map((item, index) => (
                  <FeatureCard key={item.title} compact dataId={`visibility-${index}`} {...item} />
                ))}
              </div>

              <CommandPanel
                label={t.visibility.cmd.label}
                accent={COLORS.blue}
                title={t.visibility.cmd.title}
                commands={t.visibility.cmd.commands}
                notes={t.visibility.cmd.notes}
              />
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(52,211,153,0.10), transparent 24%)">
        <SlideShell>
          <FloatingOrb color="rgba(59,130,246,0.30)" className="left-4 top-4 h-36 w-36" />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.context.eyebrow}
              title={t.context.title}
              subtitle={t.context.subtitle}
            />

            <div className="grid grid-cols-2 gap-4">
              {t.context.items.map((item, index) => (
                <FeatureCard key={item.title} compact dataId={`context-${index}`} {...item} />
              ))}
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide
        autoAnimate
        data-auto-animate-unmatched="fade"
        data-background-gradient="radial-gradient(circle at 50% 16%, rgba(192,132,252,0.16), transparent 30%), radial-gradient(circle at 50% 100%, rgba(59,130,246,0.10), transparent 32%)"
      >
        <SlideShell className="min-h-[34rem]">
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.promptFrame.eyebrow}
              title={t.promptFrame.title}
              subtitle={t.promptFrame.subtitle}
            />

            <div className="relative mt-6 flex min-h-[19rem] items-center justify-center overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950/55 p-6">
              <div className="hero-grid absolute inset-0 opacity-35" />
              <div className="glow-ring absolute h-72 w-72 rounded-full border border-blue-300/12" />
              <div
                className="glow-ring absolute h-[26rem] w-[26rem] rounded-full border border-fuchsia-300/10"
                style={{ animationDelay: '1.3s' }}
              />

              <div
                data-id="prompt-core"
                className="sheen-panel relative z-10 max-w-xl rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-8 py-6 text-center shadow-2xl"
              >
                <div className="relative z-10">
                  <AccentPill
                    label={t.promptFrame.pillLabel}
                    color={COLORS.indigo}
                    className="tracking-[0.16em]"
                  />
                  <h3 className="mt-4 !text-[1.85rem] !font-semibold !leading-[1.08] text-white">
                    {t.promptFrame.centerTitle}
                  </h3>
                  <p className="mt-3 !text-[1rem] !leading-[1.5] text-slate-200">
                    {t.promptFrame.centerBody}
                  </p>
                </div>
              </div>

              {t.promptFrame.pills.map((item, index) => (
                <div key={item.label} className={cn('absolute z-10', item.positionClass)}>
                  <AccentPill
                    dataId={`prompt-pill-${index}`}
                    label={item.label}
                    color={item.color}
                    className="tracking-[0.16em]"
                  />
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide
        autoAnimate
        data-auto-animate-unmatched="fade"
        data-background-gradient="radial-gradient(circle at 16% 18%, rgba(192,132,252,0.16), transparent 28%), radial-gradient(circle at 84% 16%, rgba(96,165,250,0.10), transparent 24%)"
      >
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.prd.eyebrow}
              title={t.prd.title}
              subtitle={t.prd.subtitle}
            />

            <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-4">
              <div
                data-id="prompt-core"
                className="sheen-panel rounded-[1.75rem] border border-white/10 bg-slate-950/72 p-5 shadow-2xl"
              >
                <div className="relative z-10">
                  <AccentPill
                    label={t.prd.pillLabel}
                    color={COLORS.indigo}
                    className="tracking-[0.16em]"
                  />

                  <div className="mt-5 flex flex-wrap gap-3">
                    {t.promptFrame.pills.map((item, index) => (
                      <AccentPill
                        key={item.label}
                        dataId={`prompt-pill-${index}`}
                        label={item.label}
                        color={item.color}
                        className="tracking-[0.14em]"
                      />
                    ))}
                  </div>

                  <p className="mt-5 !text-[1rem] !leading-[1.55] text-slate-200">{t.prd.body}</p>

                  <div className="mt-5 rounded-[1.25rem] border border-white/8 bg-black/20 px-4 py-4">
                    <p className="!text-[0.92rem] !leading-[1.55] text-slate-300">{t.prd.footer}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-2xl">
                <Code language="markdown" lineNumbers style={{ fontSize: '0.8rem' }}>
                  {t.prd.code}
                </Code>
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide
        autoAnimate
        data-auto-animate-unmatched="fade"
        data-background-gradient="radial-gradient(circle at 18% 18%, rgba(34,211,238,0.14), transparent 28%), radial-gradient(circle at 82% 16%, rgba(96,165,250,0.12), transparent 24%)"
      >
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.prdSample.eyebrow}
              title={t.prdSample.title}
              subtitle={t.prdSample.subtitle}
            />

            <div className="grid grid-cols-[0.82fr_1.18fr] items-start gap-4">
              <div className="sheen-panel rounded-[1.75rem] border border-white/10 bg-slate-950/72 p-5 shadow-2xl">
                <div className="relative z-10">
                  <AccentPill
                    label={t.prdSample.pillLabel}
                    color={COLORS.cyan}
                    className="tracking-[0.16em]"
                  />

                  <p className="mt-4 !text-[1rem] !leading-[1.55] text-slate-200">{t.prdSample.intro}</p>

                  <div className="mt-5 space-y-2.5">
                    {t.prdSample.checklist.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[0.95rem] text-slate-200"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-2xl">
                <Code language="markdown" lineNumbers style={{ fontSize: '0.78rem' }}>
                  {t.prdSample.code}
                </Code>
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>
    </>
  );
}
