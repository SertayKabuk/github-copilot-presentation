import { Fragment, Slide } from '@revealjs/react';
import estimatedScreenshot from '../../assets/estimated.png';
import { useLang } from '../../i18n';
import { COLORS } from '../../theme';
import {
  AccentPill,
  CommandPanel,
  ComparePanel,
  FeatureCard,
  FloatingOrb,
  ImageTemplateSlide,
  SectionHeading,
  SlideShell,
  SpeakerNotes,
} from '../components';

export function OverviewSlides() {
  const { t } = useLang();

  return (
    <>
      <Slide data-background-gradient="radial-gradient(circle at 18% 24%, rgba(59,130,246,0.20), transparent 28%), radial-gradient(circle at 82% 12%, rgba(192,132,252,0.16), transparent 26%), linear-gradient(135deg, rgba(15,23,42,0.02), rgba(2,6,23,0.2))">
        <SpeakerNotes items={t.hero.cmd.notes} />
        <SlideShell className="min-h-[37rem] flex flex-col justify-center">
          <div className="hero-grid absolute inset-0 opacity-60" />
          <FloatingOrb color="rgba(96,165,250,0.40)" className="-left-12 top-10 h-48 w-48" />
          <FloatingOrb
            color="rgba(168,85,247,0.32)"
            className="floating-orb--slow right-16 top-8 h-40 w-40"
          />
          <FloatingOrb
            color="rgba(45,212,191,0.28)"
            className="floating-orb--reverse bottom-0 right-[24%] h-56 w-56"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-left">
              <Fragment animation="fade-right" asChild>
                <div className="mb-5 inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
                  {t.hero.badge}
                </div>
              </Fragment>

              <h1 className="max-w-6xl !text-[3.6rem] !font-black !leading-[1.02] text-white">
                {t.hero.title}
              </h1>

              <Fragment animation="fade-up" asChild>
                <p className="mt-5 max-w-5xl !text-[1.32rem] !leading-[1.35] text-slate-200">
                  {t.hero.subtitle}
                </p>
              </Fragment>

              <Fragment animation="fade-up" asChild>
                <div className="mt-6 flex flex-wrap gap-3">
                  {t.hero.badges.map((badge) => (
                    <AccentPill
                      key={badge.label}
                      label={badge.label}
                      color={badge.color}
                      className="tracking-[0.16em]"
                    />
                  ))}
                </div>
              </Fragment>
            </div>

            <Fragment animation="fade-left" asChild>
              <div>
                <CommandPanel
                  label={t.hero.cmd.label}
                  accent={COLORS.sky}
                  title={t.hero.cmd.title}
                  commands={t.hero.cmd.commands}
                  notes={t.hero.cmd.notes}
                />
              </div>
            </Fragment>
          </div>
        </SlideShell>
      </Slide>

      <ImageTemplateSlide
        title={t.imageTemplate.title}
        imageSrc={estimatedScreenshot}
        imageAlt={t.imageTemplate.imageAlt}
      />

      <Slide data-background-gradient="radial-gradient(circle at 20% 18%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(251,113,133,0.14), transparent 26%)">
        <SlideShell>
          <FloatingOrb color="rgba(96,165,250,0.30)" className="left-2 top-3 h-36 w-36" />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.pricing.eyebrow}
              title={t.pricing.title}
              subtitle={t.pricing.subtitle}
            />

            <div className="grid grid-cols-2 gap-4">
              <ComparePanel
                label={t.pricing.before.label}
                accent={COLORS.slate}
                title={t.pricing.before.title}
                bullets={t.pricing.before.bullets}
                footer={t.pricing.before.footer}
              />
              <ComparePanel
                label={t.pricing.now.label}
                accent={COLORS.rose}
                title={t.pricing.now.title}
                bullets={t.pricing.now.bullets}
                footer={t.pricing.now.footer}
              />
            </div>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 16% 18%, rgba(192,132,252,0.16), transparent 28%), radial-gradient(circle at 84% 22%, rgba(96,165,250,0.10), transparent 24%)">
        <SlideShell>
          <FloatingOrb
            color="rgba(168,85,247,0.30)"
            className="floating-orb--slow right-4 top-2 h-40 w-40"
          />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.impact.eyebrow}
              title={t.impact.title}
              subtitle={t.impact.subtitle}
            />

            <div className="grid grid-cols-3 gap-4">
              {t.impact.items.map((item, index) => (
                <FeatureCard key={item.title} dataId={`impact-${index}`} {...item} />
              ))}
            </div>

            <Fragment animation="fade-up" asChild>
              <div className="mt-6 flex flex-wrap gap-3">
                {t.impact.pills.map((pill) => (
                  <AccentPill key={pill.label} label={pill.label} color={pill.color} />
                ))}
              </div>
            </Fragment>
          </div>
        </SlideShell>
      </Slide>

      <Slide data-background-gradient="radial-gradient(circle at 50% 0%, rgba(34,211,238,0.10), transparent 36%), linear-gradient(180deg, rgba(15,23,42,0.02), rgba(2,6,23,0.18))">
        <SlideShell>
          <FloatingOrb color="rgba(34,211,238,0.26)" className="floating-orb--slow right-0 top-0 h-44 w-44" />

          <div className="relative z-10">
            <SectionHeading
              eyebrow={t.agenda.eyebrow}
              title={t.agenda.title}
              subtitle={t.agenda.subtitle}
            />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.agenda.items.map((item, index) => (
                <Fragment key={item.title} animation="fade-up" asChild>
                  <div>
                    <FeatureCard compact eyebrow={`0${index + 1}`} dataId={`agenda-${index}`} {...item} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </SlideShell>
      </Slide>
    </>
  );
}
