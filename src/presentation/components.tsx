import type { ReactNode } from 'react';
import { Slide } from '@revealjs/react';
import { useLang, type Feature } from '../i18n';
import { cn } from './cn';

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

type SpeakerNotesProps = {
  items: string[];
};

type ImageTemplateSlideProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
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
  commands: string[];
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

export function SlideShell({ children, className }: SlideShellProps) {
  return <div className={cn('slide-shell mx-auto max-w-[82rem]', className)}>{children}</div>;
}

export function SpeakerNotes({ items }: SpeakerNotesProps) {
  return (
    <aside className="notes">
      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function FloatingOrb({ color, className, dataId }: FloatingOrbProps) {
  return (
    <div
      aria-hidden
      data-id={dataId}
      className={cn('floating-orb absolute', className)}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
    />
  );
}

export function AccentPill({ label, color, dataId, className }: AccentPillProps) {
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

export function SectionHeading({
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

export function FeatureCard({
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

export function CommandPanel({
  label,
  accent,
  title,
  commands,
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
          {commands.map((command) => (
            <div className="flex items-start gap-3" key={command}>
              <span className="pt-0.5 text-slate-500">$</span>
              <span className="leading-relaxed text-slate-100">{command}</span>
            </div>
          ))}
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

export function ComparePanel({ label, accent, title, bullets, footer, className }: ComparePanelProps) {
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
        <h3 className="mt-3 !text-[1.35rem] !font-semibold !leading-[1.18] text-white">
          <br />
          {title}
        </h3>
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

export function LanguageToggle() {
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

export function ImageTemplateSlide({ title, imageSrc, imageAlt }: ImageTemplateSlideProps) {
  return (
    <Slide data-background-gradient="radial-gradient(circle at 18% 18%, rgba(96,165,250,0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.12), transparent 24%)">
      <SlideShell className="min-h-[34rem]">
        <div className="relative z-10 flex min-h-[30rem] flex-col">
          <h2 className="!text-[2.7rem] !font-black !leading-[1.04] text-white">{title}</h2>

          <div className="mt-6 flex flex-1 items-center justify-center overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950/55 p-4 shadow-2xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[26rem] w-full rounded-[1.25rem] object-contain"
            />
          </div>
        </div>
      </SlideShell>
    </Slide>
  );
}
