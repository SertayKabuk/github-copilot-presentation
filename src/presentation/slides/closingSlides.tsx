import { Fragment, Slide } from '@revealjs/react';
import { useLang } from '../../i18n';
import { COLORS } from '../../theme';
import {
  AccentPill,
  FeatureCard,
  FloatingOrb,
  SectionHeading,
  SlideShell,
} from '../components';

export function ClosingSlides() {
  const { t } = useLang();

  return (
    <>
      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(192,132,252,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(96,165,250,0.10), transparent 24%)">
        <SlideShell>
          <FloatingOrb
            color="rgba(168,85,247,0.30)"
            className="floating-orb--slow right-4 top-2 h-40 w-40"
          />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.skills.eyebrow}
              title={t.skills.title}
              subtitle={t.skills.subtitle}
            />

            <div className="grid grid-cols-3 gap-4">
              {t.skills.items.map((item, index) => (
                <FeatureCard key={item.title} dataId={`skill-${index}`} {...item} />
              ))}
            </div>

            <Fragment animation="fade-up" asChild>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4">
                <p className="!text-[0.98rem] !leading-[1.55] text-slate-200">
                  <span className="font-semibold text-white">{t.skills.footerLead}</span>
                  {t.skills.footerBody}
                </p>
              </div>
            </Fragment>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(251,113,133,0.20), transparent 28%), radial-gradient(circle at 82% 18%, rgba(245,158,11,0.16), transparent 24%), linear-gradient(180deg, rgba(40,7,11,0.25), rgba(20,4,6,0.4))">
        <SlideShell>
          <FloatingOrb color="rgba(251,113,133,0.32)" className="left-4 top-4 h-40 w-40" />
          <FloatingOrb
            color="rgba(245,158,11,0.26)"
            className="floating-orb--slow right-8 top-2 h-36 w-36"
          />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.skillsRisks.eyebrow}
              title={t.skillsRisks.title}
              subtitle={t.skillsRisks.subtitle}
            />

            <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
              <div className="grid grid-cols-1 gap-4">
                {t.skillsRisks.items.map((item, index) => (
                  <FeatureCard key={item.title} compact dataId={`risk-${index}`} {...item} />
                ))}
              </div>

              <div
                className="relative overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_22px_50px_rgba(2,6,23,0.32)]"
                style={{
                  borderColor: 'rgba(251,113,133,0.35)',
                  backgroundImage:
                    'radial-gradient(circle at 88% 0%, rgba(251,113,133,0.18) 0%, transparent 32%), linear-gradient(180deg, rgba(40,7,11,0.85), rgba(20,4,6,0.92))',
                }}
              >
                <AccentPill
                  label={t.skillsRisks.checklistLabel}
                  color={COLORS.rose}
                  className="tracking-[0.22em]"
                />
                <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                  {t.skillsRisks.checklistTitle}
                </h3>

                <div className="mt-4 space-y-2.5">
                  {t.skillsRisks.checklist.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-rose-300/15 bg-rose-500/5 px-4 py-2.5 text-[0.94rem] text-rose-50"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-300" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(52,211,153,0.12), transparent 24%)">
        <SlideShell>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.resources.eyebrow}
              title={t.resources.title}
              subtitle={t.resources.subtitle}
            />

            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 shadow-[0_22px_50px_rgba(2,6,23,0.28)]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 88% 0%, rgba(96,165,250,0.18) 0%, transparent 32%), linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.92))',
                }}
              >
                <AccentPill label={t.resources.awesome.label} color={COLORS.blue} className="tracking-[0.22em]" />
                <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                  {t.resources.awesome.title}
                </h3>
                <p className="mt-3 !text-[0.98rem] !leading-[1.55] text-slate-200">
                  {t.resources.awesome.description}
                </p>
                <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-slate-950/80 px-4 py-3 font-mono text-[0.95rem] text-blue-200">
                  {t.resources.awesome.domain}
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_22px_50px_rgba(2,6,23,0.28)]"
                style={{
                  borderColor: 'rgba(251,113,133,0.30)',
                  backgroundImage:
                    'radial-gradient(circle at 88% 0%, rgba(251,113,133,0.18) 0%, transparent 32%), linear-gradient(180deg, rgba(40,7,11,0.78), rgba(20,4,6,0.9))',
                }}
              >
                <AccentPill
                  label={t.resources.skillsRegistry.label}
                  color={COLORS.rose}
                  className="tracking-[0.22em]"
                />
                <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                  {t.resources.skillsRegistry.title}
                </h3>
                <p className="mt-3 !text-[0.98rem] !leading-[1.55] text-rose-50/90">
                  {t.resources.skillsRegistry.description}
                </p>
                <div className="mt-4 rounded-[1.25rem] border border-rose-300/30 bg-slate-950/80 px-4 py-3 font-mono text-[0.95rem] text-rose-200">
                  {t.resources.skillsRegistry.domain}
                </div>
                {t.resources.skillsRegistry.note ? (
                  <p className="mt-3 !text-[0.86rem] !leading-[1.5] text-rose-200/80">
                    {t.resources.skillsRegistry.note}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 50% 85%, rgba(59,130,246,0.12), transparent 28%), radial-gradient(circle at 18% 20%, rgba(168,85,247,0.12), transparent 24%), radial-gradient(circle at 82% 18%, rgba(52,211,153,0.10), transparent 22%)">
        <SlideShell className="min-h-[34rem] flex flex-col justify-center">
          <FloatingOrb color="rgba(59,130,246,0.32)" className="left-6 top-8 h-44 w-44" />
          <FloatingOrb
            color="rgba(168,85,247,0.26)"
            className="floating-orb--slow right-10 top-4 h-36 w-36"
          />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.closing.eyebrow}
              title={t.closing.title}
              subtitle={t.closing.subtitle}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {t.closing.items.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>

            <Fragment animation="fade-up" asChild>
              <div className="mt-8 flex flex-col items-center gap-4 text-center">
                <div className="relative flex items-center justify-center">
                  <div className="glow-ring absolute h-28 w-28 rounded-full border border-blue-300/20" />
                  <div
                    className="glow-ring absolute h-40 w-40 rounded-full border border-fuchsia-300/10"
                    style={{ animationDelay: '1.1s' }}
                  />
                  <div className="relative rounded-full border border-white/10 bg-slate-950/40 px-6 py-3">
                    <p className="!text-[1.3rem] !font-semibold !leading-[1.2] text-white">
                      {t.closing.callout}
                    </p>
                  </div>
                </div>
                <p className="!text-[2.2rem] !font-black tracking-tight text-white">{t.closing.thanks}</p>
              </div>
            </Fragment>
          </div>
        </SlideShell>
      </Slide>
    </>
  );
}
