import { Code, Deck, Fragment, Slide, Stack } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';

type Feature = {
  title: string;
  description: string;
  color: string;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  titleId?: string;
  subtitleId?: string;
};

type FeatureCardProps = Feature & {
  compact?: boolean;
};

const cliCapabilities: Feature[] = [
  {
    title: 'Fleet',
    description: 'Coordinate multiple investigations and actions without losing the main thread.',
    color: '#60a5fa',
  },
  {
    title: 'Research',
    description: 'Pull in GitHub and web evidence before making a change or a decision.',
    color: '#22d3ee',
  },
  {
    title: 'Chronicle',
    description: 'Keep session history and checkpoints discoverable so work is easy to resume.',
    color: '#a78bfa',
  },
  {
    title: 'Remote',
    description: 'Run workflows against remote or cloud environments when local context is not enough.',
    color: '#34d399',
  },
  {
    title: 'Squad Mode',
    description: 'Split larger problems across specialized agents, then merge the useful outcomes.',
    color: '#f59e0b',
  },
  {
    title: 'PR Fix',
    description: 'Triage failing checks, patch the issue, and close the loop directly from the terminal.',
    color: '#fb7185',
  },
];

const effectiveUsage: Feature[] = [
  {
    title: 'Prime with context',
    description: 'Open the right files, errors, logs, and constraints before asking for code.',
    color: '#60a5fa',
  },
  {
    title: 'State the guardrails',
    description: 'Mention architecture boundaries, APIs, and what must not change.',
    color: '#38bdf8',
  },
  {
    title: 'Iterate on diffs',
    description: 'Review the patch, keep what helps, and refine with focused follow-up prompts.',
    color: '#c084fc',
  },
  {
    title: 'Validate with evidence',
    description: 'Use builds, tests, and runtime feedback to guide the next prompt.',
    color: '#34d399',
  },
];

const otelSignals: Feature[] = [
  {
    title: 'Trace the journey',
    description: 'Follow one request across services to see where latency or failure first appears.',
    color: '#34d399',
  },
  {
    title: 'Correlate the signals',
    description: 'Connect spans, logs, metrics, and deployment metadata around the same incident.',
    color: '#60a5fa',
  },
  {
    title: 'Aim the debug agent',
    description: 'Point the agent at the hottest spans, exceptions, and regressions instead of guessing.',
    color: '#f59e0b',
  },
];

const keyTakeaways: Feature[] = [
  {
    title: 'Copilot CLI',
    description: 'Use it when the task spans search, execution, and validation in one workflow.',
    color: '#60a5fa',
  },
  {
    title: 'Effective usage',
    description: 'Better output comes from sharper context and tighter constraints.',
    color: '#c084fc',
  },
  {
    title: 'OpenTelemetry',
    description: 'Observability turns debugging from guesswork into guided investigation.',
    color: '#34d399',
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  titleId,
  subtitleId,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-6 max-w-[78rem] text-left">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
        {eyebrow}
      </p>
      <h2
        className="mb-3 !text-[2.7rem] !font-black !leading-[1.02] text-white"
        data-id={titleId}
      >
        {title}
      </h2>
      <p
        className="max-w-5xl !text-[1.18rem] !leading-[1.35] text-slate-200"
        data-id={subtitleId}
      >
        {subtitle}
      </p>
    </div>
  );
}

function FeatureCard({ title, description, color, compact = false }: FeatureCardProps) {
  return (
    <div className="h-full rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5 shadow-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
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
            ? '!text-[0.94rem] !leading-[1.45] text-slate-200'
            : '!text-[1rem] !leading-[1.45] text-slate-200'
        }
      >
        {description}
      </p>
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
          controls: true,
          progress: true,
          slideNumber: 'c/t',
          transition: 'slide',
          backgroundTransition: 'fade',
        }}
        plugins={[RevealHighlight]}
      >
        <Slide>
          <div className="mx-auto flex max-w-[82rem] flex-col items-start justify-center gap-5 text-left">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
              Webinar deck
            </span>
            <h1 className="max-w-6xl !text-[3.9rem] !font-black !leading-[1.03] text-white">
              GitHub Copilot Beyond Autocomplete
            </h1>
            <p className="max-w-5xl !text-[1.4rem] !leading-[1.35] text-slate-200">
              GitHub Copilot CLI, effective usage patterns, and observability-first debugging
              with OpenTelemetry.
            </p>
            <div className="flex max-w-5xl flex-wrap gap-3 pt-1">
              {cliCapabilities.map((capability) => (
                <span
                  key={capability.title}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-blue-100"
                >
                  {capability.title}
                </span>
              ))}
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mx-auto max-w-[82rem]">
            <SectionHeading
              eyebrow="Agenda"
              title="Three stories for the session"
              subtitle="Move from AI-assisted terminal workflows, to better prompting habits, to signal-driven debugging."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Fragment animation="fade-up" asChild>
                <div>
                  <FeatureCard
                    title="GitHub Copilot CLI"
                    description="Fleet, research, chronicle, remote execution, squad workflows, and PR repair."
                    color="#60a5fa"
                  />
                </div>
              </Fragment>
              <Fragment animation="fade-up" asChild>
                <div>
                  <FeatureCard
                    title="Effective usage"
                    description="Practical ways to get better output by improving context, constraints, and feedback loops."
                    color="#c084fc"
                  />
                </div>
              </Fragment>
              <Fragment animation="fade-up" asChild>
                <div>
                  <FeatureCard
                    title="Debug + OpenTelemetry"
                    description="Use traces, logs, and metrics to focus the next investigation or fix."
                    color="#34d399"
                  />
                </div>
              </Fragment>
            </div>
          </div>
        </Slide>

        <Stack>
          <Slide autoAnimate>
            <div className="mx-auto max-w-[82rem]">
              <SectionHeading
                eyebrow="Track 1"
                title="GitHub Copilot CLI"
                subtitle="From a single prompt to a coordinated terminal workflow."
                titleId="cli-title"
                subtitleId="cli-subtitle"
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {cliCapabilities.map((capability, index) => (
                  <Fragment key={capability.title} index={index} animation="fade-up" asChild>
                    <div>
                      <FeatureCard compact {...capability} />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </Slide>

          <Slide autoAnimate>
            <div className="mx-auto max-w-[82rem]">
              <SectionHeading
                eyebrow="Track 1"
                title="GitHub Copilot CLI"
                subtitle="Discovery and context-building features that shape the next move."
                titleId="cli-title"
                subtitleId="cli-subtitle"
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {cliCapabilities.slice(0, 3).map((capability, index) => (
                  <Fragment key={capability.title} index={index} animation="fade-up" asChild>
                    <div>
                      <FeatureCard {...capability} />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </Slide>

          <Slide autoAnimate>
            <div className="mx-auto max-w-[82rem]">
              <SectionHeading
                eyebrow="Track 1"
                title="GitHub Copilot CLI"
                subtitle="Execution-focused features that help you land a fix and keep momentum."
                titleId="cli-title"
                subtitleId="cli-subtitle"
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {cliCapabilities.slice(3).map((capability, index) => (
                  <Fragment key={capability.title} index={index} animation="fade-up" asChild>
                    <div>
                      <FeatureCard {...capability} />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </Slide>
        </Stack>

          <Slide>
          <div className="mx-auto max-w-[82rem]">
            <SectionHeading
              eyebrow="Track 2"
              title="GitHub Copilot effective usage"
              subtitle="The best gains usually come from better context, not longer prompts."
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {effectiveUsage.map((item, index) => (
                <Fragment key={item.title} index={index} animation="fade-up" asChild>
                  <div>
                    <FeatureCard compact {...item} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mx-auto w-full max-w-[78rem]">
            <SectionHeading
              eyebrow="Track 2"
              title="A prompt shape that scales"
              subtitle="Keep requests structured so Copilot can reason with the same boundaries you would use."
            />
            <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-2xl">
              <Code language="markdown" lineNumbers style={{ fontSize: '0.82rem' }}>
                {`Goal:
Prepare a safe PR fix for the failing checkout workflow.

Context:
- Use the failing run, the diff, and the touched files.
- This repo is React + Vite + TypeScript.

Constraints:
- Keep public APIs unchanged.
- Prefer the smallest safe patch.
- Explain why the fix works.

Done when:
- The build is green.
- Reviewers can see the root cause clearly.`}
              </Code>
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mx-auto max-w-[82rem]">
            <SectionHeading
              eyebrow="Track 3"
              title="Debug agent with OpenTelemetry"
              subtitle="Observability gives the agent a trail of evidence instead of a pile of guesses."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {otelSignals.map((item, index) => (
                <Fragment key={item.title} index={index} animation="fade-up" asChild>
                  <div>
                    <FeatureCard {...item} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mx-auto w-full max-w-[82rem]">
            <SectionHeading
              eyebrow="Track 3"
              title="What to instrument first"
              subtitle="Start with the attributes that make failures easy to group, compare, and replay."
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr,1.15fr]">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 text-left shadow-2xl">
                <ul className="space-y-3 !text-[0.94rem] !leading-[1.45] text-slate-200">
                  <Fragment animation="fade-up" asChild>
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-3 w-3 rounded-full bg-emerald-400" />
                      Service name, endpoint, deployment SHA, and environment
                    </li>
                  </Fragment>
                  <Fragment animation="fade-up" asChild>
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-3 w-3 rounded-full bg-blue-400" />
                      Business identifiers such as tenant, order, or workflow run
                    </li>
                  </Fragment>
                  <Fragment animation="fade-up" asChild>
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-3 w-3 rounded-full bg-amber-400" />
                      Exceptions, retries, downstream calls, and slow spans
                    </li>
                  </Fragment>
                  <Fragment animation="fade-up" asChild>
                    <li className="flex items-start gap-4">
                      <span className="mt-2 h-3 w-3 rounded-full bg-fuchsia-400" />
                      Correlated log lines that carry the same trace or span IDs
                    </li>
                  </Fragment>
                </ul>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-4 shadow-2xl">
                <Code language="typescript" lineNumbers style={{ fontSize: '0.76rem' }}>
                  {`const tracer = trace.getTracer('checkout-debug-agent');

await tracer.startActiveSpan('checkout.retry', async (span) => {
  span.setAttribute('service.name', 'checkout-api');
  span.setAttribute('deployment.sha', buildSha);
  span.setAttribute('order.id', orderId);

  try {
    await chargeCustomer(orderId);
  } catch (error) {
    span.recordException(error as Error);
    throw error;
  } finally {
    span.end();
  }
});`}
                </Code>
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mx-auto max-w-[82rem]">
            <SectionHeading
              eyebrow="Closing"
              title="What to remember tomorrow"
              subtitle="Use Copilot with stronger context, clearer workflows, and better signals."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {keyTakeaways.map((item, index) => (
                <Fragment key={item.title} index={index} animation="fade-up" asChild>
                  <div>
                    <FeatureCard {...item} />
                  </div>
                </Fragment>
              ))}
            </div>
            <p className="mt-8 text-center text-xl font-semibold text-blue-200">Thank you.</p>
          </div>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
