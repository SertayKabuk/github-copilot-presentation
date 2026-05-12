import type { ReactNode } from 'react';
import { Code, Deck, Fragment, Slide } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';
import { LanguageProvider, useLang, type Feature } from './i18n';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  eyebrowId?: string;
  titleId?: string;
  subtitleId?: string;
};

type FeatureCardProps = Feature & {
  compact?: boolean;
  className?: string;
  dataId?: string;
  eyebrow?: string;
};

type AccentPillProps = {
  label: string;
  color: string;
  dataId?: string;
  className?: string;
};

type SlideShellProps = {
  children: ReactNode;
  className?: string;
};

type FloatingOrbProps = {
  color: string;
  className: string;
  dataId?: string;
};

type CommandPanelProps = {
  label: string;
  accent: string;
  title: string;
  command: string;
  notes: string[];
  className?: string;
  dataId?: string;
};

type ComparePanelProps = {
  label: string;
  accent: string;
  title: string;
  bullets: string[];
  footer?: string;
  className?: string;
};

function cn(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ');
}

function SlideShell({ children, className }: SlideShellProps) {
  return <div className={cn('slide-shell mx-auto max-w-[82rem]', className)}>{children}</div>;
}

function FloatingOrb({ color, className, dataId }: FloatingOrbProps) {
  return (
    <div
      aria-hidden
      data-id={dataId}
      className={cn('floating-orb absolute', className)}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
    />
  );
}

function AccentPill({ label, color, dataId, className }: AccentPillProps) {
  return (
    <span
      data-id={dataId}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.18em]',
        className,
      )}
      style={{
        borderColor: `${color}55`,
        backgroundColor: `${color}1A`,
        color,
      }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  eyebrowId,
  titleId,
  subtitleId,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-6 max-w-[78rem] pt-1 text-left">
      <p
        className="mb-4 inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100"
        data-id={eyebrowId}
      >
        {eyebrow}
      </p>
      <h2
        className="mb-3 !text-[2.9rem] !font-black !leading-[1.02] text-white"
        data-id={titleId}
      >
        {title}
      </h2>
      <p
        className="max-w-5xl !text-[1.15rem] !leading-[1.4] text-slate-200"
        data-id={subtitleId}
      >
        {subtitle}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  color,
  compact = false,
  className,
  dataId,
  eyebrow,
}: FeatureCardProps) {
  return (
    <div
      data-id={dataId}
      className={cn(
        'relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 p-5 shadow-[0_20px_48px_rgba(2,6,23,0.26)]',
        compact ? 'min-h-[10rem]' : 'min-h-[11.75rem]',
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 88% 12%, ${color}18 0%, transparent 28%), linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(2, 6, 23, 0.9))`,
      }}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="relative z-10">
        {eyebrow ? (
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
            {eyebrow}
          </p>
        ) : null}
        <div className="mb-3 flex items-center gap-3">
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 16px ${color}`,
            }}
          />
          <h3
            className={
              compact
                ? '!text-[1.15rem] !font-semibold !leading-[1.15] text-white'
                : '!text-[1.35rem] !font-semibold !leading-[1.15] text-white'
            }
          >
            {title}
          </h3>
        </div>
        <p
          className={
            compact
              ? '!text-[0.94rem] !leading-[1.48] text-slate-200'
              : '!text-[1rem] !leading-[1.5] text-slate-200'
          }
        >
          {description}
        </p>
        <div
          className="mt-5 h-1 w-24 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      </div>
    </div>
  );
}

function CommandPanel({
  label,
  accent,
  title,
  command,
  notes,
  className,
  dataId,
}: CommandPanelProps) {
  return (
    <div
      data-id={dataId}
      className={cn(
        'sheen-panel relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/85 p-4 shadow-[0_26px_60px_rgba(2,6,23,0.32)]',
        className,
      )}
    >
      <div className="relative z-10">
        <AccentPill label={label} color={accent} className="tracking-[0.22em]" />
        <h3 className="mt-3 !text-[1.25rem] !font-semibold !leading-[1.15] text-white">{title}</h3>

        <div className="mt-4 rounded-[1.3rem] border border-white/10 bg-slate-950/90 p-4 font-mono text-[0.92rem] text-slate-200">
          <div className="mb-3 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-start gap-3">
            <span className="pt-0.5 text-slate-500">$</span>
            <span className="leading-relaxed text-slate-100">{command}</span>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {notes.map((note) => (
            <div
              key={note}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-[0.9rem] text-slate-200"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
                <span>{note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparePanel({ label, accent, title, bullets, footer, className }: ComparePanelProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_22px_50px_rgba(2,6,23,0.28)]',
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 90% 0%, ${accent}1F 0%, transparent 32%), linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.92))`,
      }}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col">
        <AccentPill label={label} color={accent} className="tracking-[0.22em]" />
        <h3 className="mt-3 !text-[1.35rem] !font-semibold !leading-[1.18] text-white">{title}</h3>

        <div className="mt-4 space-y-2.5">
          {bullets.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-[0.95rem] text-slate-200"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>

        {footer ? (
          <p className="mt-auto pt-5 !text-[0.92rem] !leading-[1.55] text-slate-300">{footer}</p>
        ) : null}
      </div>
    </div>
  );
}

function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className="fixed right-5 top-5 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/70 p-1 shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur"
      role="group"
      aria-label={t.toggle.aria}
    >
      <button
        type="button"
        onClick={() => setLang('tr')}
        aria-pressed={lang === 'tr'}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
          lang === 'tr' ? 'bg-blue-400/90 text-slate-950' : 'text-slate-200 hover:text-white',
        )}
      >
        {t.toggle.tr}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
          lang === 'en' ? 'bg-blue-400/90 text-slate-950' : 'text-slate-200 hover:text-white',
        )}
      >
        {t.toggle.en}
      </button>
    </div>
  );
}

function Presentation() {
  const { lang, t } = useLang();
  return (
    <div className="h-screen w-screen bg-transparent">
      <LanguageToggle />
      <Deck
        key={lang}
        config={{
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
        }}
        plugins={[RevealHighlight]}
      >
        {/* Slide 1 — Title */}
        <Slide data-background-gradient="radial-gradient(circle at 18% 24%, rgba(59,130,246,0.20), transparent 28%), radial-gradient(circle at 82% 12%, rgba(192,132,252,0.16), transparent 26%), linear-gradient(135deg, rgba(15,23,42,0.02), rgba(2,6,23,0.2))">
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
                    accent="#38bdf8"
                    title={t.hero.cmd.title}
                    command={t.hero.cmd.command}
                    notes={t.hero.cmd.notes}
                  />
                </div>
              </Fragment>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 2 — Pricing shift */}
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
                  accent="#94a3b8"
                  title={t.pricing.before.title}
                  bullets={t.pricing.before.bullets}
                  footer={t.pricing.before.footer}
                />
                <ComparePanel
                  label={t.pricing.now.label}
                  accent="#fb7185"
                  title={t.pricing.now.title}
                  bullets={t.pricing.now.bullets}
                  footer={t.pricing.now.footer}
                />
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 3 — What it means for you */}
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

        {/* Slide 4 — Agenda */}
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
                      <FeatureCard
                        compact
                        eyebrow={`0${index + 1}`}
                        dataId={`agenda-${index}`}
                        {...item}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 5 — See your usage */}
        <Slide data-background-gradient="radial-gradient(circle at 18% 16%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 84% 16%, rgba(34,211,238,0.10), transparent 24%)">
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
                    <FeatureCard
                      key={item.title}
                      compact
                      dataId={`visibility-${index}`}
                      {...item}
                    />
                  ))}
                </div>

                <CommandPanel
                  label={t.visibility.cmd.label}
                  accent="#60a5fa"
                  title={t.visibility.cmd.title}
                  command={t.visibility.cmd.command}
                  notes={t.visibility.cmd.notes}
                />
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 6 — Context management */}
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
                  <FeatureCard
                    key={item.title}
                    compact
                    dataId={`context-${index}`}
                    {...item}
                  />
                ))}
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 7 — Prompt frame */}
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
                    <AccentPill label={t.promptFrame.pillLabel} color="#93c5fd" className="tracking-[0.16em]" />
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

        {/* Slide 8 — PRD-style prompt */}
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
                      color="#93c5fd"
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

                    <p className="mt-5 !text-[1rem] !leading-[1.55] text-slate-200">
                      {t.prd.body}
                    </p>

                    <div className="mt-5 rounded-[1.25rem] border border-white/8 bg-black/20 px-4 py-4">
                      <p className="!text-[0.92rem] !leading-[1.55] text-slate-300">
                        {t.prd.footer}
                      </p>
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

        {/* Slide 9 — CLI Intro */}
        <Slide data-background-gradient="radial-gradient(circle at 14% 18%, rgba(59,130,246,0.14), transparent 28%), radial-gradient(circle at 86% 12%, rgba(34,211,238,0.12), transparent 24%)">
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
                  accent="#38bdf8"
                  title={t.cliIntro.cmd.title}
                  command={t.cliIntro.cmd.command}
                  notes={t.cliIntro.cmd.notes}
                />
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 10 — CLI: Discovery features */}
        <Slide data-background-gradient="radial-gradient(circle at 20% 14%, rgba(59,130,246,0.14), transparent 28%), radial-gradient(circle at 85% 24%, rgba(34,211,238,0.10), transparent 24%)">
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
                  accent="#22d3ee"
                  title={t.cliDiscovery.cmd.title}
                  command={t.cliDiscovery.cmd.command}
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

        {/* Slide 11 — CLI: Execution features */}
        <Slide data-background-gradient="radial-gradient(circle at 80% 18%, rgba(52,211,153,0.14), transparent 28%), radial-gradient(circle at 18% 20%, rgba(245,158,11,0.12), transparent 24%)">
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
                  accent="#34d399"
                  title={t.cliExecution.cmd.title}
                  command={t.cliExecution.cmd.command}
                  notes={t.cliExecution.cmd.notes}
                />
              </div>
            </div>
          </SlideShell>
        </Slide>

        {/* Slide 12 — Skills overview */}
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

        {/* Slide 13 — Skills WARNING */}
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
                    <FeatureCard
                      key={item.title}
                      compact
                      dataId={`risk-${index}`}
                      {...item}
                    />
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
                  <AccentPill label={t.skillsRisks.checklistLabel} color="#fb7185" className="tracking-[0.22em]" />
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

        {/* Slide 14 — Resources */}
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
                  <AccentPill label={t.resources.awesome.label} color="#60a5fa" className="tracking-[0.22em]" />
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
                  <AccentPill label={t.resources.skillsRegistry.label} color="#fb7185" className="tracking-[0.22em]" />
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

        {/* Slide 15 — Closing */}
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
      </Deck>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Presentation />
    </LanguageProvider>
  );
}

export default App;
