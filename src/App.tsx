import type { ReactNode } from 'react';
import { Code, Deck, Fragment, Slide } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';

type Feature = {
  title: string;
  description: string;
  color: string;
};

type OrbitPill = {
  label: string;
  color: string;
  positionClass: string;
};

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

const heroBadges = [
  { label: 'Tokens', color: '#60a5fa' },
  { label: 'Context', color: '#22d3ee' },
  { label: 'Prompts', color: '#a78bfa' },
  { label: 'CLI + Skills', color: '#34d399' },
];

const pricingImpact: Feature[] = [
  {
    title: 'Context = cost',
    description:
      'Every file, log, and tab you attach is billed as input tokens — even if the model barely uses them.',
    color: '#60a5fa',
  },
  {
    title: 'Sloppy prompts cost twice',
    description:
      'A vague ask burns tokens on guessing, then again on the correction. Specificity is now a budget tool.',
    color: '#c084fc',
  },
  {
    title: 'Premium models multiply',
    description:
      'Agent mode and frontier models consume more tokens per turn. Reach for them when the task earns it.',
    color: '#fb7185',
  },
];

const agendaTracks: Feature[] = [
  {
    title: 'See the meter',
    description: 'Read agent logs: how many tokens, which model, which tools, which files.',
    color: '#60a5fa',
  },
  {
    title: 'Tune the context',
    description: 'Open less, point sharper. Treat the context window as a budget, not a backpack.',
    color: '#22d3ee',
  },
  {
    title: 'Shape the prompt',
    description: 'Goal, context, constraints, done-when. Give the agent a PRD, not a wish.',
    color: '#c084fc',
  },
  {
    title: 'Use the CLI well',
    description: 'Fleet, research, squad mode, PR fix — plus the right discipline around skills.',
    color: '#34d399',
  },
];

const visibilityChecks: Feature[] = [
  {
    title: 'Token totals',
    description: 'Input + output per turn. Watch the run-rate, not just the final answer.',
    color: '#60a5fa',
  },
  {
    title: 'Model in use',
    description: 'Frontier vs. mini matters. A small task on a big model is a quiet leak.',
    color: '#22d3ee',
  },
  {
    title: 'Tool calls',
    description: 'Each search, read, or run is a turn. Loops without progress are the expensive failure mode.',
    color: '#a78bfa',
  },
  {
    title: 'Files touched',
    description: 'If the agent reads files you did not need, your context was too broad.',
    color: '#fb7185',
  },
];

const contextPrinciples: Feature[] = [
  {
    title: 'Prime with intent',
    description: 'Open only the files, errors, and constraints the task actually needs.',
    color: '#60a5fa',
  },
  {
    title: 'Trim the noise',
    description: 'Skip whole-workspace dumps. Reference the function, selection, or symbol by name.',
    color: '#38bdf8',
  },
  {
    title: 'Anchor to specifics',
    description: 'Point at the failing test, the exact log line, the commit SHA — not "the bug".',
    color: '#c084fc',
  },
  {
    title: 'Reset when it drifts',
    description: 'Start a fresh thread once the agent is chasing its own earlier mistakes.',
    color: '#34d399',
  },
];

const promptFrame: OrbitPill[] = [
  { label: 'Goal', color: '#60a5fa', positionClass: 'left-8 top-7' },
  { label: 'Context', color: '#38bdf8', positionClass: 'right-10 top-10' },
  { label: 'Constraints', color: '#c084fc', positionClass: 'left-10 bottom-10' },
  { label: 'Done when', color: '#34d399', positionClass: 'right-8 bottom-7' },
];

const cliDiscovery: Feature[] = [
  {
    title: 'Fleet',
    description: 'Coordinate parallel investigations across repos without losing the main thread.',
    color: '#60a5fa',
  },
  {
    title: 'Research',
    description: 'Pull GitHub history, issues, and web evidence into the working context first.',
    color: '#22d3ee',
  },
  {
    title: 'Chronicle',
    description: 'Replay sessions, see token usage, and resume from a known good checkpoint.',
    color: '#a78bfa',
  },
];

const cliExecution: Feature[] = [
  {
    title: 'Remote',
    description: 'Run against cloud or sandboxed environments when local context is not enough.',
    color: '#34d399',
  },
  {
    title: 'Squad Mode',
    description: 'Split a problem across specialized agents, then merge only the useful outcomes.',
    color: '#f59e0b',
  },
  {
    title: 'PR Fix',
    description: 'Triage failing checks, patch the issue, and close the loop from the terminal.',
    color: '#fb7185',
  },
];

const skillsValue: Feature[] = [
  {
    title: 'Reusable playbooks',
    description: 'Bundle prompts, tools, and steps the agent should always follow for a task.',
    color: '#60a5fa',
  },
  {
    title: 'Sharper context',
    description: 'Skills inject focused instructions so you stop re-typing the same setup.',
    color: '#22d3ee',
  },
  {
    title: 'Team shareable',
    description: 'Skills travel through the repo — onboarding and conventions stop living in heads.',
    color: '#34d399',
  },
];

const skillsRisks: Feature[] = [
  {
    title: 'Run arbitrary commands',
    description: 'A skill can call shell, scripts, and tools with your local permissions.',
    color: '#fb7185',
  },
  {
    title: 'Read your files',
    description: 'Anything in the workspace is reachable — secrets, tokens, customer data included.',
    color: '#f59e0b',
  },
  {
    title: 'Reach the network',
    description: 'Skills can fetch and exfiltrate. A malicious one will look helpful on the way out.',
    color: '#fbbf24',
  },
];

const keyTakeaways: Feature[] = [
  {
    title: 'Watch the meter',
    description: 'Read agent logs every day. Tokens, model, and tool calls tell you where the cost lives.',
    color: '#60a5fa',
  },
  {
    title: 'Spend on signal',
    description: 'Narrow context, structured prompts, and clear done-when criteria pay for themselves.',
    color: '#c084fc',
  },
  {
    title: 'Trust, then verify',
    description: 'CLI and skills are powerful — vet every skill before it runs in your repo.',
    color: '#34d399',
  },
];

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

function App() {
  return (
    <div className="h-screen w-screen bg-transparent">
      <Deck
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
                    Webinar deck
                  </div>
                </Fragment>

                <h1 className="max-w-6xl !text-[3.6rem] !font-black !leading-[1.02] text-white">
                  GitHub Copilot: Tokens, Tools, and Discipline
                </h1>

                <Fragment animation="fade-up" asChild>
                  <p className="mt-5 max-w-5xl !text-[1.32rem] !leading-[1.35] text-slate-200">
                    The move from request-based to token-based pricing changes how every developer
                    should be using Copilot — in the IDE, in the CLI, and with skills.
                  </p>
                </Fragment>

                <Fragment animation="fade-up" asChild>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {heroBadges.map((badge) => (
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
                    label="The new mental model"
                    accent="#38bdf8"
                    title="Every token of context you attach is now on the bill."
                    command='copilot "explain why this PR is failing" --files src/checkout.ts,logs/run-2031'
                    notes={[
                      'Bigger workspace context → bigger token bill, every single turn.',
                      'Premium models multiply the cost — use them when the task earns it.',
                      'Agent logs show tokens, model, tools. Read them.',
                    ]}
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
                eyebrow="What changed"
                title="From premium requests to token consumption"
                subtitle="Copilot's billing now reflects the real cost of work: input + output tokens for every turn."
              />

              <div className="grid grid-cols-2 gap-4">
                <ComparePanel
                  label="Before"
                  accent="#94a3b8"
                  title="Request-based"
                  bullets={[
                    'One chat or agent action ≈ one premium request.',
                    'A short prompt and a huge one cost the same.',
                    'Loose context had no direct price tag.',
                    'Budgeting meant counting requests, not work.',
                  ]}
                  footer="Easy to reason about, but it hid the real cost of bloated context."
                />
                <ComparePanel
                  label="Now"
                  accent="#fb7185"
                  title="Token-based"
                  bullets={[
                    'Input tokens (your context) + output tokens (the answer) are billed.',
                    'Bigger context, bigger bill — even if the model ignores most of it.',
                    'Premium models charge more per token; agent loops compound it.',
                    'Budgeting tracks tokens per task, not requests per day.',
                  ]}
                  footer="Specificity and trimmed context are no longer style — they are cost control."
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
                eyebrow="What it means for you"
                title="Context discipline is now cost discipline"
                subtitle="The habits that already make Copilot smarter also make it cheaper."
              />

              <div className="grid grid-cols-3 gap-4">
                {pricingImpact.map((item, index) => (
                  <FeatureCard key={item.title} dataId={`impact-${index}`} {...item} />
                ))}
              </div>

              <Fragment animation="fade-up" asChild>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AccentPill label="Narrow context" color="#60a5fa" />
                  <AccentPill label="Structured prompts" color="#c084fc" />
                  <AccentPill label="Pick the right model" color="#fb7185" />
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
                eyebrow="Agenda"
                title="Four habits for the new pricing model"
                subtitle="Move from blind chat to a cost-aware workflow with clear signals at every step."
              />

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {agendaTracks.map((item, index) => (
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
                eyebrow="Track 1 — Visibility"
                title="Read the agent logs every day"
                subtitle="Before tuning the engine, look at the meter. The agent already tells you what it cost and what it did."
              />

              <div className="grid grid-cols-[1fr_1.05fr] items-start gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {visibilityChecks.map((item, index) => (
                    <FeatureCard
                      key={item.title}
                      compact
                      dataId={`visibility-${index}`}
                      {...item}
                    />
                  ))}
                </div>

                <CommandPanel
                  label="Where to look"
                  accent="#60a5fa"
                  title="Agent logs surface tokens, model, tools, and files in every run."
                  command='copilot logs --last 1 --show tokens,tools,files'
                  notes={[
                    'In the CLI: open chronicle to see token totals and tool calls for the last session.',
                    'In the IDE: check the agent panel — model name, token count, and steps per turn.',
                    'On the org side: usage dashboards aggregate per-user token spend across surfaces.',
                  ]}
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
                eyebrow="Track 2 — Context"
                title="Less context is usually better context"
                subtitle="Treat the context window as a budget, not a backpack. Open the few things the agent actually needs."
              />

              <div className="grid grid-cols-2 gap-4">
                {contextPrinciples.map((item, index) => (
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
                eyebrow="Track 3 — Prompt strategy"
                title="Goal + Context + Constraints + Done when"
                subtitle="A small structure turns vague asks into executable prompts — and shrinks the tokens spent on guessing."
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
                    <AccentPill label="Prompt frame" color="#93c5fd" className="tracking-[0.16em]" />
                    <h3 className="mt-4 !text-[1.85rem] !font-semibold !leading-[1.08] text-white">
                      Treat the agent like a junior engineer
                    </h3>
                    <p className="mt-3 !text-[1rem] !leading-[1.5] text-slate-200">
                      Tell it the goal, the relevant context, the rules it must follow, and how you
                      will know it is done.
                    </p>
                  </div>
                </div>

                {promptFrame.map((item) => (
                  <div key={item.label} className={cn('absolute z-10', item.positionClass)}>
                    <AccentPill
                      dataId={`prompt-pill-${item.label.toLowerCase()}`}
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
                eyebrow="Track 3 — Prompt strategy"
                title="Give the agent a PRD, not a wish"
                subtitle="Success criteria up front means fewer wasted turns and a clearer review."
              />

              <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-4">
                <div
                  data-id="prompt-core"
                  className="sheen-panel rounded-[1.75rem] border border-white/10 bg-slate-950/72 p-5 shadow-2xl"
                >
                  <div className="relative z-10">
                    <AccentPill
                      label="Prompt checklist"
                      color="#93c5fd"
                      className="tracking-[0.16em]"
                    />

                    <div className="mt-5 flex flex-wrap gap-3">
                      {promptFrame.map((item) => (
                        <AccentPill
                          key={item.label}
                          dataId={`prompt-pill-${item.label.toLowerCase()}`}
                          label={item.label}
                          color={item.color}
                          className="tracking-[0.14em]"
                        />
                      ))}
                    </div>

                    <p className="mt-5 !text-[1rem] !leading-[1.55] text-slate-200">
                      Name the scope, the non-goals, and the acceptance signal. If the answer could
                      change architecture, state the guardrails before the ask.
                    </p>

                    <div className="mt-5 rounded-[1.25rem] border border-white/8 bg-black/20 px-4 py-4">
                      <p className="!text-[0.92rem] !leading-[1.55] text-slate-300">
                        A 30-second PRD beats a five-minute back-and-forth — and burns far fewer
                        tokens along the way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-2xl">
                  <Code language="markdown" lineNumbers style={{ fontSize: '0.8rem' }}>
                    {`Goal:
Add a feature flag around the new checkout retry logic.

Context:
- src/checkout/retry.ts holds the new behavior.
- Flag service: src/flags/client.ts (returns boolean).
- Stack: React + Vite + TypeScript.

Constraints:
- Keep public exports unchanged.
- Default the flag to OFF in production.
- No new dependencies.

Done when:
- New unit test covers flag ON and OFF.
- 'npm run build' and 'npm test' are green.
- Diff is under ~80 lines.`}
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
                eyebrow="Track 4 — CLI"
                title="GitHub Copilot CLI"
                subtitle="An agentic terminal that searches, edits, runs, and explains — all in one thread, with token logs you can actually read."
              />

              <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard
                    compact
                    title="Stays in the terminal"
                    description="No tab-flipping. Search, patch, run tests, and explain — without leaving the shell."
                    color="#60a5fa"
                  />
                  <FeatureCard
                    compact
                    title="Reads its own logs"
                    description="Chronicle shows you tokens, tools, and steps for every session you run."
                    color="#22d3ee"
                  />
                  <FeatureCard
                    compact
                    title="Composes with git"
                    description="Lines up cleanly with branches, PRs, and CI — the agent works where your workflow lives."
                    color="#a78bfa"
                  />
                  <FeatureCard
                    compact
                    title="Token-aware"
                    description="Sessions are scoped, so context does not silently balloon across unrelated tasks."
                    color="#34d399"
                  />
                </div>

                <CommandPanel
                  label="One ask, many useful moves"
                  accent="#38bdf8"
                  title="Let the CLI do investigation, patching, and validation in the same flow."
                  command={'copilot "fix the failing checkout workflow and explain the root cause"'}
                  notes={[
                    'Start with the failing run, touched files, and constraints to keep the search small.',
                    'Land the fix and run checks from the same thread — no context handoff between tools.',
                    'Watch chronicle to see how many tokens each step actually cost.',
                  ]}
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
                eyebrow="Track 4 — CLI features (1/2)"
                title="Discover before you change"
                subtitle="Fleet, Research, and Chronicle build the context — and the visibility — before any code moves."
              />

              <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-4">
                <CommandPanel
                  label="Investigate first"
                  accent="#22d3ee"
                  title="Pull evidence into the working thread before you touch code."
                  command={'copilot research "why is the nightly job timing out?" --use logs,issues,diff'}
                  notes={[
                    'Fleet keeps multiple investigations alive without dropping the main thread.',
                    'Research stitches code, issues, and web evidence into one working view.',
                    'Chronicle lets you resume from a known good checkpoint — and audit token cost.',
                  ]}
                />

                <div className="grid grid-cols-1 gap-4">
                  {cliDiscovery.map((capability, index) => (
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
                eyebrow="Track 4 — CLI features (2/2)"
                title="Land the change without losing flow"
                subtitle="Remote, Squad Mode, and PR Fix close the loop from patch to passing CI in one thread."
              />

              <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
                <div className="grid grid-cols-1 gap-4">
                  {cliExecution.map((capability, index) => (
                    <FeatureCard
                      key={capability.title}
                      compact
                      dataId={`cli-execution-${index}`}
                      {...capability}
                    />
                  ))}
                </div>

                <CommandPanel
                  label="Patch and validate"
                  accent="#34d399"
                  title="Same thread: patch, run, explain, and push the PR fix."
                  command={'copilot pr fix --run "npm test" --explain --push'}
                  notes={[
                    'Remote runs in cloud or sandboxed envs when the local repo is not enough.',
                    'Squad Mode splits work across focused agents — merge only the useful outcomes.',
                    'PR Fix triages failing checks, patches, and pushes — with a written rationale.',
                  ]}
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
                eyebrow="Track 4 — Skills"
                title="Skills extend what Copilot can do"
                subtitle="A skill is a reusable playbook — prompts, tools, and steps the agent should follow for a recurring task."
              />

              <div className="grid grid-cols-3 gap-4">
                {skillsValue.map((item, index) => (
                  <FeatureCard key={item.title} dataId={`skill-${index}`} {...item} />
                ))}
              </div>

              <Fragment animation="fade-up" asChild>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4">
                  <p className="!text-[0.98rem] !leading-[1.55] text-slate-200">
                    <span className="font-semibold text-white">Use skills</span> for the boring,
                    repeated stuff: code review checklists, on-call runbooks, migration steps, PR
                    templates. The agent stops re-learning and you stop re-typing.
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
                eyebrow="Important — Security"
                title="Be extremely careful installing skills"
                subtitle="A skill runs with your local permissions. Treat every install like running a script from a stranger — because that is exactly what it is."
              />

              <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-4">
                <div className="grid grid-cols-1 gap-4">
                  {skillsRisks.map((item, index) => (
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
                  <AccentPill label="Vetting checklist" color="#fb7185" className="tracking-[0.22em]" />
                  <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                    Before any skill runs in your repo
                  </h3>

                  <div className="mt-4 space-y-2.5">
                    {[
                      'Trust the source: official org, known maintainer, real activity.',
                      'Read the manifest — every tool, command, and network call it declares.',
                      'Pin a version. Never auto-update skills from the internet.',
                      'Run new skills inside a sandbox or throwaway workspace first.',
                      'Treat it like a dependency: review, log, and remove if unused.',
                    ].map((item) => (
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
                eyebrow="Resources"
                title="Where to look next"
                subtitle="A curated starting point — plus a reminder that skills are powerful and deserve scrutiny."
              />

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 shadow-[0_22px_50px_rgba(2,6,23,0.28)]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 88% 0%, rgba(96,165,250,0.18) 0%, transparent 32%), linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.92))',
                  }}
                >
                  <AccentPill label="Awesome Copilot" color="#60a5fa" className="tracking-[0.22em]" />
                  <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                    Patterns, prompts, and tools from the community
                  </h3>
                  <p className="mt-3 !text-[0.98rem] !leading-[1.55] text-slate-200">
                    A curated index of Copilot tips, prompts, configs, and extensions worth borrowing.
                  </p>
                  <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-slate-950/80 px-4 py-3 font-mono text-[0.95rem] text-blue-200">
                    awesome-copilot.github.com
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
                  <AccentPill label="skills.sh" color="#fb7185" className="tracking-[0.22em]" />
                  <h3 className="mt-3 !text-[1.3rem] !font-semibold !leading-[1.15] text-white">
                    A registry of community skills — handle with care
                  </h3>
                  <p className="mt-3 !text-[0.98rem] !leading-[1.55] text-rose-50/90">
                    Useful for discovery, but anyone can publish. Vet every skill before you let it
                    run in your repo or terminal.
                  </p>
                  <div className="mt-4 rounded-[1.25rem] border border-rose-300/30 bg-slate-950/80 px-4 py-3 font-mono text-[0.95rem] text-rose-200">
                    skills.sh
                  </div>
                  <p className="mt-3 !text-[0.86rem] !leading-[1.5] text-rose-200/80">
                    Read the manifest. Pin the version. Sandbox the first run.
                  </p>
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
                eyebrow="Closing"
                title="What to remember tomorrow"
                subtitle="Token-based pricing rewards the habits good engineers already wanted to build."
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {keyTakeaways.map((item) => (
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
                        Narrow context. Sharper prompts. Vetted tools.
                      </p>
                    </div>
                  </div>
                  <p className="!text-[2.2rem] !font-black tracking-tight text-white">Thank you.</p>
                </div>
              </Fragment>
            </div>
          </SlideShell>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
