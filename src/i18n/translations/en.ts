import type { Translation } from '../types';
import { promptFrameColors, promptFramePositions } from '../content-shared';

const en: Translation = {
  toggle: { aria: 'Switch language', en: 'EN', tr: 'TR' },
  hero: {
    badge: 'Webinar deck',
    title: 'GitHub Copilot: Tokens, Tools, and Discipline',
    subtitle:
      'The shift from premium requests to usage-based pricing changes how every developer should use Copilot — in the IDE, in the CLI, and with skills.',
    badges: [
      { label: 'Tokens', color: '#60a5fa' },
      { label: 'Context', color: '#22d3ee' },
      { label: 'Prompts', color: '#a78bfa' },
      { label: 'CLI + Skills', color: '#34d399' },
    ],
    cmd: {
      label: 'The new mental model',
      title: 'Context size, model choice, and iteration style all show up in cost.',
      commands: [
        'Explain why this PR is failing. Context: @src/checkout.ts @logs/run-2031.log',
      ],
      notes: [
        'More attached context means more cost pressure per turn.',
        'Larger models are powerful — use them when the task earns it.',
        'Use /usage, /context, and /chronicle to see the meter.',
      ],
    },
  },
  pricing: {
    eyebrow: 'What changed',
    title: 'From premium requests to usage-based billing',
    subtitle:
      'Copilot is moving toward billing that reflects actual work: input, output, and cached tokens converted to AI credits.',
    before: {
      label: 'Legacy model',
      title: 'Premium requests',
      bullets: [
        'One chat or agent action counted as a premium request.',
        'A short prompt and a huge one could cost the same.',
        'Loose context had no direct price tag.',
        'Budgeting meant counting requests, not real work.',
      ],
      footer: 'Simple, but it hid the cost of bloated context.',
    },
    now: {
      label: 'Usage-based model',
      title: 'Tokens → AI credits',
      bullets: [
        'Input, output, and cached tokens convert to AI credits.',
        'Bigger context means more cost pressure, even when little of it matters.',
        'Larger models cost more for the same task.',
        'Budgeting shifts from requests per day to cost per task.',
      ],
      footer: 'Specificity and trimmed context become cost control.',
    },
  },
  impact: {
    eyebrow: 'What it means for you',
    title: 'Context discipline becomes cost discipline',
    subtitle: 'The habits that make Copilot smarter are the same ones that control cost in a usage-based world.',
    items: [
      {
        title: 'Context = cost',
        description:
          'Every file, log, and tab you attach is billed as input tokens — even if the model barely uses them.',
        color: '#60a5fa',
      },
      {
        title: 'Vague prompts cost twice',
        description:
          'They burn one turn on guessing and another on repair. Specificity reduces both cost and drift.',
        color: '#c084fc',
      },
      {
        title: 'Model choice matters',
        description:
          'Bigger models and longer agent loops are powerful — and easier to overspend with.',
        color: '#fb7185',
      },
    ],
    pills: [
      { label: 'Narrow context', color: '#60a5fa' },
      { label: 'Structured prompts', color: '#c084fc' },
      { label: 'Pick the right model', color: '#fb7185' },
    ],
  },
  agenda: {
    eyebrow: 'Agenda',
    title: 'Four habits for usage-based Copilot',
    subtitle: 'Move from blind chat to a workflow with clear signals, narrower context, and lower rework.',
    items: [
      {
        title: 'See the meter',
        description: 'Check /usage, /context, and /chronicle: tokens, model, tools, files.',
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
        description: 'Inspect with /env, frame with /plan and /research, then ship with /delegate, /fleet, /review, and /pr.',
        color: '#34d399',
      },
    ],
  },
  visibility: {
    eyebrow: 'Track 1 — Case study',
    title: 'What your own sessions suggest',
    subtitle:
      'Your history already shows strong debugging and UI iteration. The next gain is orchestration and context control.',
    items: [
      {
        title: 'Use built-ins first',
        description: 'Reach for /research, /plan, /delegate, and /review before encoding the workflow in a long prompt.',
        color: '#60a5fa',
      },
      {
        title: 'Front-load the spec',
        description: 'Put constraints, keep/remove rules, and acceptance criteria in turn one.',
        color: '#22d3ee',
      },
      {
        title: 'Reset after setup',
        description: 'After research or setup, switch to /new or /compact so polish loops stay cheap.',
        color: '#a78bfa',
      },
      {
        title: 'Encode reuse once',
        description: 'Move repeated workflows into instructions and keep skills narrow and task-specific.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'High-impact moves',
      title: 'The upside is less manual orchestration and less replayed context.',
      commands: ['/env', '/research', '/plan', '/delegate', '/review', '/new'],
      notes: [
        'Start with /env to confirm active skills, instructions, and LSPs.',
        'Pair /research with /share when the result should live outside the main thread.',
        'Move repeated triage into instructions; keep skills small and task-specific.',
      ],
    },
  },
  context: {
    eyebrow: 'Track 2 — Context',
    title: 'Less context is usually better context',
    subtitle:
      'Treat the context window as a budget, not a backpack. Open the few things the agent actually needs.',
    items: [
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
    ],
  },
  promptFrame: {
    eyebrow: 'Track 3 — Prompt strategy',
    title: 'Goal + Context + Constraints + Done when',
    subtitle:
      'A small structure turns vague asks into executable prompts — and shrinks the tokens spent on guessing.',
    pillLabel: 'Prompt frame',
    centerTitle: 'Treat the agent like a junior engineer',
    centerBody:
      'Tell it the goal, the relevant context, the rules it must follow, and how you will know it is done.',
    pills: [
      { label: 'Goal', color: promptFrameColors[0], positionClass: promptFramePositions[0] },
      { label: 'Context', color: promptFrameColors[1], positionClass: promptFramePositions[1] },
      { label: 'Constraints', color: promptFrameColors[2], positionClass: promptFramePositions[2] },
      { label: 'Done when', color: promptFrameColors[3], positionClass: promptFramePositions[3] },
    ],
  },
  prd: {
    eyebrow: 'Track 3 — Prompt strategy',
    title: 'Give the agent a PRD, not a wish',
    subtitle: 'Success criteria up front means fewer wasted turns and a clearer review.',
    pillLabel: 'Prompt checklist',
    body:
      'Name the scope, the non-goals, and the acceptance signal. If the answer could change architecture, state the guardrails before the ask.',
    footer:
      'A 30-second PRD beats a five-minute back-and-forth — and burns far fewer tokens along the way.',
    code: `Goal:
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
- Diff is under ~80 lines.`,
  },
  prdSample: {
    eyebrow: 'Track 3 — Prompt strategy',
    title: 'Sample PRD prompt',
    subtitle: 'The task changes. The structure usually should not.',
    pillLabel: 'Paste-ready shape',
    intro:
      'Ask for one bounded change, the files that matter, the guardrails, and the proof you expect back.',
    checklist: [
      'One task, clear scope, one acceptance signal.',
      'State non-goals before the agent improvises.',
      'Ask for tests and a short summary with changed files.',
    ],
    code: `Task:
Add a dark mode toggle to the settings page.

Goal:
Let users switch themes and persist the choice.

Context:
- UI: src/pages/settings.tsx
- Theme state: src/theme/theme-context.tsx
- Stack: React + TypeScript

Constraints:
- Reuse existing tokens and button styles.
- No route or navigation changes.
- No new dependencies.

Output:
- Start with a 3-step plan.
- Then implement.
- End with changed files + risks.

Done when:
- Toggle works after reload.
- Existing layout stays unchanged.
- 'npm run build' and relevant tests pass.`,
  },
  cliIntro: {
    eyebrow: 'Track 4 — CLI command map',
    title: 'Use the right CLI command for the job',
    subtitle:
      'Make the CLI section command-first: inspect with /env, frame with /plan, investigate with /research, then choose the right execution path.',
    cards: [
      {
        title: '/env',
        description: 'Shows loaded instructions, MCP servers, skills, agents, plugins, LSPs, and extensions.',
        color: '#60a5fa',
      },
      {
        title: '/plan',
        description: 'Creates an implementation plan before coding. Plan mode is also available with Shift+Tab.',
        color: '#22d3ee',
      },
      {
        title: '/research',
        description: 'Runs deep investigation across your codebase, GitHub, and the web, then saves a cited report.',
        color: '#a78bfa',
      },
      {
        title: '/delegate',
        description: 'Hands work to Copilot cloud agent, which creates a branch, opens a draft PR, and continues remotely.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'Current command reality',
      title: 'Use official current names; not every older or internal label is a top-level slash command.',
      commands: [
        '/env',
        '/plan',
        '/research TOPIC',
        '/delegate PROMPT',
      ],
      notes: [
        '/squad is not a current official slash command in the docs — use /fleet for parallel subagents.',
        '/pr fix is official, but it lives under /pr rather than as a top-level command.',
        'Use /help or / to inspect the exact surface of your installed version.',
      ],
    },
  },
  chronicle: {
    eyebrow: 'Track 4 — Chronicle',
    title: 'Chronicle turns session history into shortcuts',
    subtitle:
      'Enable experimental mode first, then use Chronicle for standups, personalized tips, instruction tuning, and index repair.',
    items: [
      {
        title: 'Enable it first',
        description: 'Chronicle is experimental. Start with /experimental on.',
        color: '#60a5fa',
      },
      {
        title: 'Standup',
        description: 'Summarizes recent work. The default window is the last 24 hours.',
        color: '#22d3ee',
      },
      {
        title: 'Tips',
        description: 'Generates 3-5 personalized recommendations from your real usage patterns.',
        color: '#a78bfa',
      },
      {
        title: 'Improve',
        description: 'Suggests repo-specific updates for .github/copilot-instructions.md.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'Chronicle commands',
      title: 'Use the picker for discovery or call subcommands directly.',
      commands: [
        '/chronicle',
        '/chronicle standup for the last 3 days',
        '/chronicle tips for better prompting',
        '/chronicle improve',
        '/chronicle reindex',
      ],
      notes: [
        'Enable it first with /experimental on.',
        '/chronicle opens a picker of available subcommands.',
        'standup summarizes recent work, branches, and linked PRs/issues.',
        'tips analyzes prompts, tools, and features you are underusing.',
        'improve proposes instruction updates; reindex rebuilds the session-store index.',
      ],
    },
  },
  cliDiscovery: {
    eyebrow: 'Track 4 — CLI discovery',
    title: 'Inspect and frame the work first',
    subtitle:
      'Use /env, /plan, and /research when you need context, structure, or evidence before code changes.',
    items: [
      {
        title: '/env',
        description: 'Check what Copilot is already loading before you assume which instructions or skills are active.',
        color: '#60a5fa',
      },
      {
        title: '/plan',
        description: 'Use it for multi-step work, architecture-sensitive changes, or anything you want decomposed first.',
        color: '#22d3ee',
      },
      {
        title: '/research',
        description: 'Use it when you want a shareable Markdown report with citations, not immediate code edits.',
        color: '#a78bfa',
      },
    ],
    cmd: {
      label: 'Discovery commands',
      title: 'These commands are for understanding and shaping the work before implementation.',
      commands: [
        '/env',
        '/plan add retry logic around checkout failures',
        '/research How is session management implemented in this repo?',
        '/share file research',
      ],
      notes: [
        '/env confirms which instructions, skills, agents, and LSPs are actually in play.',
        '/plan also exists as a mode via Shift+Tab, not just as a slash command.',
        '/research writes a saved report; pair it with /share when findings should become an artifact.',
      ],
    },
  },
  cliMcp: {
    eyebrow: 'Track 4 — MCP hygiene',
    title: 'Avoid MCP sprawl: enable only the servers and tools you need',
    subtitle:
      'Every extra server widens the tool surface. Start with the built-in GitHub MCP server, then add and expose tools intentionally.',
    items: [
      {
        title: 'Don’t collect servers',
        description:
          'GitHub MCP is already built in. Add another server only for a real recurring need, not just because it exists in a registry.',
        color: '#60a5fa',
      },
      {
        title: 'Scope the tool list',
        description:
          'During `/mcp add` or `/mcp edit`, prefer a small comma-separated tool list instead of `*`.',
        color: '#22d3ee',
      },
      {
        title: 'Disable by session',
        description:
          'If a server is irrelevant for the task, turn it off with `/mcp disable SERVER-NAME` and bring it back only when needed.',
        color: '#f59e0b',
      },
    ],
    cmd: {
      label: 'Intentional MCP commands',
      title: 'Treat MCP like permissions and context budget, not a sticker collection.',
      commands: [
        '/mcp show',
        '/mcp add',
        '/mcp edit SERVER-NAME',
        '/mcp disable SERVER-NAME',
        '/mcp enable SERVER-NAME',
      ],
      notes: [
        'GitHub MCP server is already available in Copilot CLI — you do not need to add it yourself.',
        'In `/mcp add` or `/mcp edit`, the Tools field accepts `*` or a comma-separated list; prefer the smaller list.',
        'Use `/mcp show` or `/env` before starting work so you know which servers and tool surfaces are actually active.',
      ],
    },
  },
  cliExecution: {
    eyebrow: 'Track 4 — CLI execution',
    title: 'Choose local, remote, or parallel execution',
    subtitle:
      'Use /delegate, /fleet, and /review when work is implementation-heavy, parallelizable, or needs a safety pass.',
    items: [
      {
        title: '/delegate',
        description: 'Pushes work to Copilot cloud agent, which creates a branch and draft PR and runs remotely.',
        color: '#34d399',
      },
      {
        title: '/fleet',
        description: 'Runs independent parts of a task in parallel subagents once a plan can be split safely.',
        color: '#f59e0b',
      },
      {
        title: '/review',
        description: 'Runs the code review agent and can be narrowed with a prompt, path, or file pattern.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'Implement with guardrails',
      title: 'These commands act on code or changes, so use them deliberately.',
      commands: [
        '/delegate complete the API integration tests and fix any failing edge cases',
        '/fleet implement the approved plan',
        '/review src/checkout/**',
      ],
      notes: [
        '/delegate is remote; autopilot is local.',
        '/fleet works best after a plan exists and tasks are genuinely independent.',
        '/review is a fast quality pass before commit or after a large refactor.',
      ],
    },
  },
  cliPr: {
    eyebrow: 'Track 4 — PR workflows',
    title: 'Use /pr for pull-request loops',
    subtitle:
      'PR creation, feedback fixes, conflict resolution, and CI repair all live under /pr for the current branch.',
    items: [
      {
        title: '/pr create',
        description: 'Creates or updates the pull request for the current branch.',
        color: '#60a5fa',
      },
      {
        title: '/pr fix feedback',
        description: 'Reads review threads and applies actionable requested changes.',
        color: '#22d3ee',
      },
      {
        title: '/pr fix ci',
        description: 'Diagnoses failing CI checks, applies targeted fixes, and repeats until green or blocked.',
        color: '#a78bfa',
      },
    ],
    cmd: {
      label: 'PR workflow commands',
      title: 'The /pr family covers view, create, fix, and end-to-end automation.',
      commands: [
        '/pr',
        '/pr create',
        '/pr fix feedback',
        '/pr fix conflicts',
        '/pr fix ci',
        '/pr fix',
        '/pr auto',
      ],
      notes: [
        '/pr fix runs feedback, conflicts, then CI in order.',
        '/pr auto creates the PR if needed, then loops until there are no more comments, conflicts, or failing checks.',
        'All /pr commands operate on the pull request for the current branch and may commit and push.',
      ],
    },
  },
  skills: {
    eyebrow: 'Track 4 — Skills',
    title: 'Add skills in the repo or in ~/.copilot, then use them on demand',
    subtitle:
      'A skill is a folder with `SKILL.md` plus optional scripts or examples. Copilot matches the description, loads it when relevant, and you can still invoke it explicitly.',
    items: [
      {
        title: 'Project skill',
        description:
          'Create `.github/skills/my-skill/SKILL.md`. Keep the folder name and `name` frontmatter identical; use `description` to tell Copilot when the skill should load.',
        color: '#60a5fa',
      },
      {
        title: 'Personal skill',
        description:
          'Create `~/.copilot/skills/my-skill/SKILL.md` to reuse it across repos. Put scripts, templates, and examples next to it and link them from `SKILL.md`.',
        color: '#22d3ee',
      },
      {
        title: 'Use it on demand',
        description:
          'Copilot can auto-load a matching skill, or you can call `/my-skill` directly. In the CLI, use `/skills list`, `/skills info`, and `/skills reload`.',
        color: '#34d399',
      },
    ],
    footerLead: 'Rule of thumb:',
    footerBody:
      ' keep always-on repo guidance in custom instructions, and reserve skills for task-specific workflows. Review third-party skills before trusting scripts or pre-approved tools.',
  },
  skillsRisks: {
    eyebrow: 'Important — Third-party skills',
    title: 'Treat community skills like code you install',
    subtitle:
      'Repo-owned and official skills are useful. Community skills can add instructions, scripts, and external resources, so review them before you trust them.',
    items: [
      {
        title: 'Inspect what they add',
        description: 'Read the skill files, scripts, and linked resources before first use.',
        color: '#fb7185',
      },
      {
        title: 'Check the source',
        description: 'Prefer official orgs or maintainers with clear ownership and recent activity.',
        color: '#f59e0b',
      },
      {
        title: 'Pin and trial first',
        description: 'Lock a version, test in a safe workspace, and remove it if it adds no value.',
        color: '#fbbf24',
      },
    ],
    checklistLabel: 'Review checklist',
    checklistTitle: 'Before a third-party skill becomes part of your workflow',
    checklist: [
      'Start from official docs or trusted repos.',
      'Read the skill files and any scripts/resources it ships.',
      'Pin a version before you share it with a team.',
      'Trial first in a sandbox or throwaway workspace.',
      'Keep skills small, audited, and removable.',
    ],
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Where to look next',
    subtitle:
      'Start with official docs, then borrow community patterns selectively.',
    awesome: {
      label: 'GitHub Docs',
      title: 'Official CLI, billing, and skills docs',
      description:
        'The authoritative source for current commands, rollout details, and pricing behavior.',
      domain: 'docs.github.com/copilot',
    },
    skillsRegistry: {
      label: 'Community resources',
      title: 'skills.sh and Awesome Copilot',
      description:
        'Useful for discovery, but community content can drift. Check freshness and manifests before adoption.',
      domain: 'skills.sh • awesome-copilot.github.com',
      note: 'Start from docs, then borrow selectively.',
    },
  },
  imageTemplate: {
    title: 'Example snapshot: April usage estimate',
    imageAlt: 'Estimated price image',
  },
  closing: {
    eyebrow: 'Closing',
    title: 'What to remember tomorrow',
    subtitle: 'The shift to usage-based pricing rewards the habits good engineers already wanted to build.',
    items: [
      {
        title: 'Use the meter',
        description:
          'Check /usage, /context, and /chronicle so you know where cost lives.',
        color: '#60a5fa',
      },
      {
        title: 'Spend on signal',
        description:
          'Narrow context, structured prompts, and clear done-when criteria pay for themselves.',
        color: '#c084fc',
      },
      {
        title: 'Review what you load',
        description: 'Built-ins are powerful, and third-party additions deserve review before you trust them.',
        color: '#34d399',
      },
    ],
    callout: 'Narrow context. Sharper prompts. Right built-ins.',
    thanks: 'Thank you.',
  },
};

export default en;
