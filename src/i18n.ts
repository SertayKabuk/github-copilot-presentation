import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'tr';

const STORAGE_KEY = 'presentation.lang';
const DEFAULT_LANG: Lang = 'tr';

export type Feature = {
  title: string;
  description: string;
  color: string;
};

export type OrbitPill = {
  label: string;
  color: string;
  positionClass: string;
};

export type Badge = {
  label: string;
  color: string;
};

export type CommandBlock = {
  label: string;
  title: string;
  commands: string[];
  notes: string[];
};

export type ComparePanel = {
  label: string;
  title: string;
  bullets: string[];
  footer: string;
};

export type Heading = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ResourceCard = {
  label: string;
  title: string;
  description: string;
  domain: string;
  note?: string;
};

export type Translation = {
  toggle: {
    aria: string;
    en: string;
    tr: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    badges: Badge[];
    cmd: CommandBlock;
  };
  pricing: Heading & {
    before: ComparePanel;
    now: ComparePanel;
  };
  impact: Heading & {
    items: Feature[];
    pills: Badge[];
  };
  agenda: Heading & {
    items: Feature[];
  };
  visibility: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  context: Heading & {
    items: Feature[];
  };
  promptFrame: Heading & {
    pillLabel: string;
    centerTitle: string;
    centerBody: string;
    pills: OrbitPill[];
  };
  prd: Heading & {
    pillLabel: string;
    body: string;
    footer: string;
    code: string;
  };
  prdSample: Heading & {
    pillLabel: string;
    intro: string;
    checklist: string[];
    code: string;
  };
  cliIntro: Heading & {
    cards: Feature[];
    cmd: CommandBlock;
  };
  chronicle: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  cliDiscovery: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  cliMcp: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  cliExecution: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  cliPr: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  skills: Heading & {
    items: Feature[];
    footerLead: string;
    footerBody: string;
  };
  skillsRisks: Heading & {
    items: Feature[];
    checklistLabel: string;
    checklistTitle: string;
    checklist: string[];
  };
  resources: Heading & {
    awesome: ResourceCard;
    skillsRegistry: ResourceCard;
  };
  imageTemplate: {
    title: string;
    imageAlt: string;
  };
  closing: Heading & {
    items: Feature[];
    callout: string;
    thanks: string;
  };
};

const promptFramePositions = ['left-8 top-7', 'right-10 top-10', 'left-10 bottom-10', 'right-8 bottom-7'];
const promptFrameColors = ['#60a5fa', '#38bdf8', '#c084fc', '#34d399'];

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

const tr: Translation = {
  toggle: { aria: 'Dili değiştir', en: 'EN', tr: 'TR' },
  hero: {
    badge: 'Webinar sunumu',
    title: 'GitHub Copilot: Token, Araçlar ve Disiplin',
    subtitle:
      'Premium isteklerden kullanım bazlı fiyatlandırmaya geçiş, her geliştiricinin Copilot\'u nasıl kullanması gerektiğini değiştiriyor — IDE\'de, CLI\'da ve skill\'lerde.',
    badges: [
      { label: 'Tokenlar', color: '#60a5fa' },
      { label: 'Bağlam', color: '#22d3ee' },
      { label: 'Promptlar', color: '#a78bfa' },
      { label: 'CLI + Skill\'ler', color: '#34d399' },
    ],
    cmd: {
      label: 'Yeni zihinsel model',
      title: 'Bağlam boyutu, model seçimi ve iterasyon stili doğrudan maliyete yansır.',
      commands: ['Bu PR neden başarısız oluyor? Bağlam: @src/checkout.ts @logs/run-2031.log'],
      notes: [
        'Eklenen her bağlam parçası, her turda maliyet baskısını artırır.',
        'Büyük modeller güçlüdür — sadece görev hak ettiğinde kullanın.',
        '/usage, /context ve /chronicle ile kullanımı takip edin.',
      ],
    },
  },
  pricing: {
    eyebrow: 'Ne değişti',
    title: 'Premium isteklerden kullanım bazlı faturalandırmaya',
    subtitle:
      'Copilot, gerçek işi yansıtan bir modele geçiyor: giriş, çıkış ve cache tokenları AI kredilerine dönüşüyor.',
    before: {
      label: 'Eski model',
      title: 'Premium istekler',
      bullets: [
        'Bir sohbet veya agent eylemi premium istek olarak sayılıyordu.',
        'Kısa bir prompt ile devasa bir prompt benzer maliyete sahip olabiliyordu.',
        'Gevşek bağlamın doğrudan bir fiyat etiketi yoktu.',
        'Bütçeleme, gerçek iş yerine istek saymaktı.',
      ],
      footer: 'Basitti, ama şişirilmiş bağlamın maliyetini gizliyordu.',
    },
    now: {
      label: 'Kullanım bazlı model',
      title: 'Tokenlar → AI kredileri',
      bullets: [
        'Giriş, çıkış ve cache tokenları AI kredilerine dönüşür.',
        'Büyük bağlam, azı işe yarasa bile maliyet baskısını artırır.',
        'Daha büyük modeller aynı görev için daha pahalıdır.',
        'Bütçeleme, günlük istekten görev başı maliyete kayar.',
      ],
      footer: 'Belirlilik ve sade bağlam maliyet kontrolüne dönüşür.',
    },
  },
  impact: {
    eyebrow: 'Sizin için anlamı',
    title: 'Bağlam disiplini maliyet disiplinine dönüşür',
    subtitle: 'Copilot\'u daha akıllı yapan alışkanlıklar, kullanım bazlı dünyada maliyeti de kontrol eder.',
    items: [
      {
        title: 'Bağlam = maliyet',
        description:
          'Eklediğiniz her dosya, log ve sekme giriş tokeni olarak faturalandırılır — model neredeyse hiç kullanmasa bile.',
        color: '#60a5fa',
      },
      {
        title: 'Belirsiz promptlar iki kez yaktırır',
        description:
          'Bir tur tahmine, bir tur düzeltmeye gider. Belirlilik hem maliyeti hem sapmayı azaltır.',
        color: '#c084fc',
      },
      {
        title: 'Model seçimi önemlidir',
        description:
          'Daha büyük modeller ve uzun agent döngüleri güçlüdür — ama fazla harcamak daha kolaydır.',
        color: '#fb7185',
      },
    ],
    pills: [
      { label: 'Dar bağlam', color: '#60a5fa' },
      { label: 'Yapılı promptlar', color: '#c084fc' },
      { label: 'Doğru modeli seç', color: '#fb7185' },
    ],
  },
  agenda: {
    eyebrow: 'Gündem',
    title: 'Kullanım bazlı Copilot için dört alışkanlık',
    subtitle:
      'Kör sohbetten net sinyalleri, dar bağlamı ve düşük yeniden işi olan bir iş akışına geçin.',
    items: [
      {
        title: 'Kullanımı görün',
        description: '/usage, /context ve /chronicle ile token, model, araç ve dosyaları görün.',
        color: '#60a5fa',
      },
      {
        title: 'Bağlamı ayarlayın',
        description: 'Daha az açın, daha keskin gösterin. Bağlam penceresini sırt çantası değil bütçe olarak görün.',
        color: '#22d3ee',
      },
      {
        title: 'Promptu şekillendirin',
        description: 'Hedef, bağlam, kısıtlar, bitiş kriteri. Agent\'a dilek değil PRD verin.',
        color: '#c084fc',
      },
      {
        title: 'CLI\'yı iyi kullanın',
        description: '/env ile bakın, /plan ve /research ile çerçeveleyin; sonra /delegate, /fleet, /review ve /pr ile teslim edin.',
        color: '#34d399',
      },
    ],
  },
  visibility: {
    eyebrow: 'Adım 1 — Vaka çalışması',
    title: 'Kendi oturumların ne söylüyor?',
    subtitle:
      'Geçmişin zaten güçlü debug ve UI iterasyonu gösteriyor. Sıradaki kazanç orkestrasyon ve bağlam kontrolü.',
    items: [
      {
        title: 'Önce yerleşik akışlara git',
        description: 'Akışı uzun promptlara dökmeden önce /research, /plan, /delegate ve /review kullan.',
        color: '#60a5fa',
      },
      {
        title: 'Spesifikasyonu öne çek',
        description: 'Kısıtları, korunacak/çıkarılacak kuralları ve kabul kriterini ilk turda ver.',
        color: '#22d3ee',
      },
      {
        title: 'Kurulumdan sonra sıfırla',
        description: 'Araştırma veya kurulumdan sonra /new ya da /compact kullan; rötuş turları ucuz kalsın.',
        color: '#a78bfa',
      },
      {
        title: 'Tekrarı bir kez kodla',
        description: 'Tekrarlanan akışları talimatlara taşı; skill\'leri dar ve görev odaklı tut.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'En yüksek getirili hamleler',
      title: 'Kazanç: daha az elle orkestrasyon ve daha az bağlam tekrarı.',
      commands: ['/env', '/research', '/plan', '/delegate', '/review', '/new'],
      notes: [
        'Başta /env ile aktif skill, talimat ve LSP\'leri kontrol et.',
        'Araştırma çıktısı konuşma dışında yaşamalıysa /research sonrası /share kullan.',
        'Tekrarlanan triyajı talimatlara taşı; skill\'leri küçük ve görev odaklı tut.',
      ],
    },
  },
  context: {
    eyebrow: 'Adım 2 — Bağlam',
    title: 'Daha az bağlam genellikle daha iyi bağlamdır',
    subtitle:
      'Bağlam penceresini sırt çantası değil bütçe olarak görün. Agent\'ın gerçekten ihtiyacı olan birkaç şeyi açın.',
    items: [
      {
        title: 'Niyetle başlayın',
        description: 'Sadece görevin gerçekten ihtiyaç duyduğu dosyaları, hataları ve kısıtları açın.',
        color: '#60a5fa',
      },
      {
        title: 'Gürültüyü kesin',
        description: 'Tüm workspace\'i dump etmekten kaçının. Fonksiyonu, seçimi veya sembolü adıyla referans verin.',
        color: '#38bdf8',
      },
      {
        title: 'Spesifikliklere bağlanın',
        description: '"Bug"a değil — başarısız teste, tam log satırına, commit SHA\'sına işaret edin.',
        color: '#c084fc',
      },
      {
        title: 'Sapınca sıfırlayın',
        description: 'Agent kendi önceki hatalarını kovalamaya başladığında yeni bir konuşma başlatın.',
        color: '#34d399',
      },
    ],
  },
  promptFrame: {
    eyebrow: 'Adım 3 — Prompt stratejisi',
    title: 'Hedef + Bağlam + Kısıtlar + Bitiş kriteri',
    subtitle:
      'Küçük bir yapı, belirsiz istekleri uygulanabilir promptlara dönüştürür — ve tahmine harcanan tokenları azaltır.',
    pillLabel: 'Prompt çerçevesi',
    centerTitle: 'Agent\'a junior bir mühendis gibi davranın',
    centerBody:
      'Hedefi, ilgili bağlamı, uyması gereken kuralları ve bittiğini nasıl anlayacağınızı söyleyin.',
    pills: [
      { label: 'Hedef', color: promptFrameColors[0], positionClass: promptFramePositions[0] },
      { label: 'Bağlam', color: promptFrameColors[1], positionClass: promptFramePositions[1] },
      { label: 'Kısıtlar', color: promptFrameColors[2], positionClass: promptFramePositions[2] },
      { label: 'Bitiş kriteri', color: promptFrameColors[3], positionClass: promptFramePositions[3] },
    ],
  },
  prd: {
    eyebrow: 'Adım 3 — Prompt stratejisi',
    title: 'Agent\'a dilek değil PRD verin',
    subtitle: 'Önden başarı kriterleri daha az boşa harcanan tur ve daha net inceleme demektir.',
    pillLabel: 'Prompt kontrol listesi',
    body:
      'Kapsamı, hedef olmayanları ve kabul sinyalini adlandırın. Cevap mimariyi değiştirebilirse, istekten önce sınırları belirtin.',
    footer:
      '30 saniyelik bir PRD, beş dakikalık bir gidip gelmeyi yener — ve yol boyunca çok daha az token yakar.',
    code: `Hedef:
Yeni checkout retry mantığının etrafına bir feature flag ekle.

Bağlam:
- src/checkout/retry.ts yeni davranışı içeriyor.
- Flag servisi: src/flags/client.ts (boolean döner).
- Stack: React + Vite + TypeScript.

Kısıtlar:
- Public export'ları değiştirme.
- Production'da flag varsayılan olarak KAPALI olsun.
- Yeni bağımlılık ekleme.

Bitiş kriteri:
- Yeni unit test flag AÇIK ve KAPALI durumlarını kapsasın.
- 'npm run build' ve 'npm test' yeşil olsun.
- Diff ~80 satırın altında olsun.`,
  },
  prdSample: {
    eyebrow: 'Adım 3 — Prompt stratejisi',
    title: 'Örnek PRD promptu',
    subtitle: 'İş değişir. Yapı çoğu zaman değişmez.',
    pillLabel: 'Yapıştırmaya hazır yapı',
    intro:
      'Tek bir sınırlı değişiklik, ilgili dosyalar, kısıtlar ve geri beklediğiniz kanıtı açıkça isteyin.',
    checklist: [
      'Tek görev, net kapsam, tek kabul sinyali.',
      'Agent doğaçlamadan önce non-goal\'ları yazın.',
      'Test ve değişen dosyalarla kısa özet isteyin.',
    ],
    code: `Görev:
Ayarlar sayfasına dark mode toggle ekle.

Hedef:
Kullanıcı tema değiştirebilsin ve tercih kalıcı olsun.

Bağlam:
- UI: src/pages/settings.tsx
- Tema state'i: src/theme/theme-context.tsx
- Stack: React + TypeScript

Kısıtlar:
- Mevcut token ve buton stillerini yeniden kullan.
- Route veya navigasyonu değiştirme.
- Yeni bağımlılık ekleme.

Çıktı:
- Önce 3 adımlı plan ver.
- Sonra uygula.
- Sonda değişen dosyaları ve riskleri özetle.

Bitiş kriteri:
- Toggle reload sonrası çalışsın.
- Mevcut layout aynı kalsın.
- 'npm run build' ve ilgili testler geçsin.`,
  },
  cliIntro: {
    eyebrow: 'Adım 4 — CLI komut haritası',
    title: 'İş için doğru CLI komutunu kullan',
    subtitle:
      'CLI bölümünü komut merkezli düşünün: /env ile bakın, /plan ile çerçeveleyin, /research ile araştırın, sonra doğru çalışma yolunu seçin.',
    cards: [
      {
        title: '/env',
        description: 'Yüklü talimatları, MCP sunucularını, skill\'leri, agent\'ları, plugin\'leri, LSP\'leri ve uzantıları gösterir.',
        color: '#60a5fa',
      },
      {
        title: '/plan',
        description: 'Kod yazmadan önce uygulama planı oluşturur. Plan modu Shift+Tab ile de açılabilir.',
        color: '#22d3ee',
      },
      {
        title: '/research',
        description: 'Kod tabanı, GitHub ve web üzerinde derin araştırma yapar; alıntılı bir rapor kaydeder.',
        color: '#a78bfa',
      },
      {
        title: '/delegate',
        description: 'İşi Copilot cloud agent\'a devreder; branch açar, draft PR oluşturur ve uzaktan devam eder.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'Güncel komut gerçekliği',
      title: 'Resmi güncel isimleri kullanın; her eski veya iç isim ayrı bir üst düzey slash komut değildir.',
      commands: [
        '/env',
        '/plan',
        '/research TOPIC',
        '/delegate PROMPT',
      ],
      notes: [
        '/squad şu an dökümanlarda resmi bir slash komut değil — paralel alt-agent için /fleet kullanın.',
        '/pr fix resmidir, ama üst düzey komut değil; /pr altında yaşar.',
        'Kurulu sürümünüzdeki yüzeyi görmek için /help veya / kullanın.',
      ],
    },
  },
  chronicle: {
    eyebrow: 'Adım 4 — Chronicle',
    title: 'Chronicle oturum geçmişini kısayollara çevirir',
    subtitle:
      'Önce experimental modu açın; sonra Chronicle ile standup, kişisel ipuçları, talimat iyileştirme ve indeks onarımı yapın.',
    items: [
      {
        title: 'Önce aç',
        description: 'Chronicle şu anda experimental. /experimental on ile başlayın.',
        color: '#60a5fa',
      },
      {
        title: 'Standup',
        description: 'Son işleri özetler. Varsayılan zaman penceresi son 24 saattir.',
        color: '#22d3ee',
      },
      {
        title: 'Tips',
        description: 'Gerçek kullanım alışkanlıklarınızdan 3-5 kişiselleştirilmiş öneri üretir.',
        color: '#a78bfa',
      },
      {
        title: 'Improve',
        description: 'Bu repo için .github/copilot-instructions.md güncelleme önerileri çıkarır.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'Chronicle komutları',
      title: 'Keşif için picker açın veya alt komutları doğrudan çağırın.',
      commands: [
        '/chronicle',
        '/chronicle standup for the last 3 days',
        '/chronicle tips for better prompting',
        '/chronicle improve',
        '/chronicle reindex',
      ],
      notes: [
        'Önce /experimental on ile etkinleştirin.',
        '/chronicle mevcut alt komutlar için picker açar.',
        'standup son işleri, branchleri ve bağlı PR/issue\'ları özetler.',
        'tips promptları, araçları ve az kullandığınız özellikleri analiz eder.',
        'improve talimat önerir; reindex session-store indeksini yeniden kurar.',
      ],
    },
  },
  cliDiscovery: {
    eyebrow: 'Adım 4 — CLI keşfi',
    title: 'Önce bak ve işi çerçevele',
    subtitle:
      'Kod değişmeden önce bağlam, yapı veya kanıt gerektiğinde /env, /plan ve /research kullan.',
    items: [
      {
        title: '/env',
        description: 'Hangi talimatların ve skill\'lerin aktif olduğunu varsaymadan önce gerçekten ne yüklü bakın.',
        color: '#60a5fa',
      },
      {
        title: '/plan',
        description: 'Çok adımlı işler, mimari hassas değişiklikler ve önce bölmek istediğiniz görevler için kullanın.',
        color: '#22d3ee',
      },
      {
        title: '/research',
        description: 'Hemen kod değil, alıntılı ve paylaşılabilir bir Markdown raporu istediğinizde kullanın.',
        color: '#a78bfa',
      },
    ],
    cmd: {
      label: 'Keşif komutları',
      title: 'Bu komutlar implementasyondan önce anlama ve çerçeveleme içindir.',
      commands: [
        '/env',
        '/plan checkout hatalarına retry logic ekle',
        '/research Bu repoda session management nasıl çalışıyor?',
        '/share file research',
      ],
      notes: [
        '/env, hangi talimatların, skill\'lerin, agent\'ların ve LSP\'lerin gerçekten devrede olduğunu doğrular.',
        '/plan sadece komut değil; Shift+Tab ile açılan bir mod olarak da vardır.',
        '/research rapor yazar; bulgular artefakt olacaksa /share ile dışarı alın.',
      ],
    },
  },
  cliMcp: {
    eyebrow: 'Adım 4 — MCP hijyeni',
    title: 'MCP yayılımını önleyin: sadece gereken sunucu ve araçları açın',
    subtitle:
      'Her ek sunucu araç yüzeyini genişletir. Yerleşik GitHub MCP ile başlayın; yeni sunucu ve araçları bilinçli ekleyin.',
    items: [
      {
        title: 'Sunucu biriktirmeyin',
        description:
          'GitHub MCP zaten yerleşik. Registry\'de var diye her sunucuyu eklemeyin; sadece tekrarlayan gerçek ihtiyaçlar için ekleyin.',
        color: '#60a5fa',
      },
      {
        title: 'Araç listesini daraltın',
        description:
          '`/mcp add` veya `/mcp edit` sırasında `*` yerine sadece gereken birkaç araç adını virgülle yazın.',
        color: '#22d3ee',
      },
      {
        title: 'Oturum bazlı kapatın',
        description:
          'Görevle ilgisiz sunucuları `/mcp disable SERVER-NAME` ile kapatın; gerçekten gerekince tekrar açın.',
        color: '#f59e0b',
      },
    ],
    cmd: {
      label: 'Bilinçli MCP komutları',
      title: 'MCP\'yi rozet koleksiyonu değil, izin ve bağlam bütçesi gibi yönetin.',
      commands: [
        '/mcp show',
        '/mcp add',
        '/mcp edit SERVER-NAME',
        '/mcp disable SERVER-NAME',
        '/mcp enable SERVER-NAME',
      ],
      notes: [
        'GitHub MCP sunucusu Copilot CLI içinde zaten hazır gelir; ayrıca eklemeniz gerekmez.',
        '`/mcp add` veya `/mcp edit` içindeki Tools alanı `*` ya da virgülle ayrılmış araç listesi kabul eder; dar seçin.',
        'İşe başlamadan önce `/mcp show` veya `/env` ile gerçekten hangi sunucu ve araç yüzeyinin aktif olduğunu görün.',
      ],
    },
  },
  cliExecution: {
    eyebrow: 'Adım 4 — CLI yürütme',
    title: 'Yerel, uzak veya paralel yürütmeyi seç',
    subtitle:
      'İş implementasyon ağırlıklıysa, paralelleşebiliyorsa veya güvenlik kontrolü istiyorsa /delegate, /fleet ve /review kullan.',
    items: [
      {
        title: '/delegate',
        description: 'İşi Copilot cloud agent\'a yollar; branch ve draft PR açar, uzaktan çalışır.',
        color: '#34d399',
      },
      {
        title: '/fleet',
        description: 'Bir görev güvenle bölünebiliyorsa bağımsız parçaları paralel alt-agent\'larla çalıştırır.',
        color: '#f59e0b',
      },
      {
        title: '/review',
        description: 'Kod inceleme agent\'ını çalıştırır; prompt, path veya file pattern ile daraltılabilir.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'Korumalı ilerle',
      title: 'Bu komutlar koda veya değişikliklere dokunur; bilinçli kullanın.',
      commands: [
        '/delegate API integration testlerini tamamla ve uç durumları düzelt',
        '/fleet onaylanan planı uygula',
        '/review src/checkout/**',
      ],
      notes: [
        '/delegate uzaktır; autopilot yereldir.',
        '/fleet en iyi, ortada plan varken ve görevler gerçekten bağımsızken çalışır.',
        '/review commit öncesi veya büyük refactor sonrası hızlı kalite geçişidir.',
      ],
    },
  },
  cliPr: {
    eyebrow: 'Adım 4 — PR iş akışları',
    title: '/pr ile pull request döngüsünü yönetin',
    subtitle:
      'PR oluşturma, review geri bildirimi, conflict çözümü ve CI onarımı mevcut branch için /pr altında yaşar.',
    items: [
      {
        title: '/pr create',
        description: 'Mevcut branch için pull request oluşturur veya günceller.',
        color: '#60a5fa',
      },
      {
        title: '/pr fix feedback',
        description: 'Review thread\'lerini okur ve uygulanabilir istekleri koda işler.',
        color: '#22d3ee',
      },
      {
        title: '/pr fix ci',
        description: 'Başarısız CI kontrollerini teşhis eder, hedefli düzeltmeler yapar ve yeniden dener.',
        color: '#a78bfa',
      },
    ],
    cmd: {
      label: 'PR iş akışı komutları',
      title: '/pr ailesi görüntüleme, oluşturma, düzeltme ve uçtan uca otomasyonu kapsar.',
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
        '/pr fix sırasıyla feedback, conflicts ve CI aşamalarını çalıştırır.',
        '/pr auto gerekirse PR oluşturur; sonra yorum, conflict ve CI kalmayana kadar döngüye devam eder.',
        'Tüm /pr komutları mevcut branch\'in PR\'ı üzerinde çalışır ve commit/push yapabilir.',
      ],
    },
  },
  skills: {
    eyebrow: 'Adım 4 — Skill\'ler',
    title: 'Skill\'leri repoya veya ~/.copilot altına ekleyin, gerektiğinde çağırın',
    subtitle:
      'Skill, `SKILL.md` ve isteğe bağlı script ya da örnek dosyaları içeren bir klasördür. Copilot açıklamaya göre eşleştirir, ilgiliyse yükler; isterseniz açıkça siz de çağırabilirsiniz.',
    items: [
      {
        title: 'Repo skill\'i',
        description:
          '`.github/skills/my-skill/SKILL.md` oluşturun. Klasör adı ile frontmatter içindeki `name` aynı olsun; `description`, Copilot\'a skill\'in ne zaman yüklenmesi gerektiğini söyler.',
        color: '#60a5fa',
      },
      {
        title: 'Kişisel skill',
        description:
          '`~/.copilot/skills/my-skill/SKILL.md` oluşturarak tüm repolarda yeniden kullanın. Script, şablon ve örnekleri yanına koyun; `SKILL.md` içinden link verin.',
        color: '#22d3ee',
      },
      {
        title: 'İsteyince kullan',
        description:
          'Copilot uygun skill\'i otomatik yükleyebilir; isterseniz `/my-skill` ile doğrudan çağırın. CLI tarafında `/skills list`, `/skills info` ve `/skills reload` kullanın.',
        color: '#34d399',
      },
    ],
    footerLead: 'Pratik kural:',
    footerBody:
      ' repo çapında her zaman geçerli kuralları özel talimatlarda tutun; skill\'leri görev-özel akışlar için ayırın. Script veya ön onaylı araç içeren üçüncü taraf skill\'lere incelemeden güvenmeyin.',
  },
  skillsRisks: {
    eyebrow: 'Önemli — Üçüncü taraf skill\'ler',
    title: 'Topluluk skill\'lerini kurduğunuz kod gibi görün',
    subtitle:
      'Repo sahipli ve resmi skill\'ler yararlıdır. Topluluk skill\'leri talimat, script ve dış kaynak ekleyebilir; güvenmeden önce inceleyin.',
    items: [
      {
        title: 'Ne eklediğini incele',
        description: 'İlk kullanımdan önce skill dosyalarını, scriptleri ve bağlı kaynakları okuyun.',
        color: '#fb7185',
      },
      {
        title: 'Kaynağı kontrol et',
        description: 'Sahipliği net, aktif resmi organizasyonları veya maintainer\'ları tercih edin.',
        color: '#f59e0b',
      },
      {
        title: 'Önce sabitle ve dene',
        description: 'Sürümü kilitleyin, güvenli bir workspace\'te deneyin ve değer katmıyorsa kaldırın.',
        color: '#fbbf24',
      },
    ],
    checklistLabel: 'İnceleme listesi',
    checklistTitle: 'Üçüncü taraf bir skill iş akışınıza girmeden önce',
    checklist: [
      'Resmi dökümantasyon veya güvenilir repolardan başlayın.',
      'Skill dosyalarını ve taşıdığı script/kaynakları okuyun.',
      'Ekiple paylaşmadan önce sürümü sabitleyin.',
      'Önce sandbox veya geçici workspace\'te deneyin.',
      'Skill\'leri küçük, denetlenmiş ve çıkarılabilir tutun.',
    ],
  },
  resources: {
    eyebrow: 'Kaynaklar',
    title: 'Bundan sonra nereye bakmalı',
    subtitle:
      'Önce resmi dökümantasyondan başlayın, sonra topluluk kalıplarını seçerek alın.',
    awesome: {
      label: 'GitHub Docs',
      title: 'Resmi CLI, faturalandırma ve skill dökümanları',
      description:
        'Güncel komutlar, geçiş detayları ve fiyatlandırma davranışı için yetkili kaynak.',
      domain: 'docs.github.com/copilot',
    },
    skillsRegistry: {
      label: 'Topluluk kaynakları',
      title: 'skills.sh ve Awesome Copilot',
      description:
        'Keşif için faydalıdır, ama topluluk içeriği eskimeye açıktır. Benimsemeden önce tazeliği ve manifestleri kontrol edin.',
      domain: 'skills.sh • awesome-copilot.github.com',
      note: 'Önce docs, sonra seçerek ödünç alın.',
    },
  },
  imageTemplate: {
    title: 'Örnek görüntü: Nisan kullanım tahmini',
    imageAlt: 'Tahmini fiyat görseli',
  },
  closing: {
    eyebrow: 'Kapanış',
    title: 'Yarın hatırlanacak şeyler',
    subtitle:
      'Kullanım bazlı fiyatlandırmaya geçiş, iyi mühendislerin zaten kurmak istediği alışkanlıkları ödüllendirir.',
    items: [
      {
        title: 'Sayacı kullan',
        description:
          '/usage, /context ve /chronicle ile maliyetin nerede yaşadığını görün.',
        color: '#60a5fa',
      },
      {
        title: 'Sinyale harcayın',
        description:
          'Dar bağlam, yapılı promptlar ve net bitiş kriterleri kendi maliyetini öder.',
        color: '#c084fc',
      },
      {
        title: 'Yüklediklerini gözden geçir',
        description: 'Yerleşik akışlar güçlüdür; üçüncü taraf eklentiler güvenmeden önce inceleme ister.',
        color: '#34d399',
      },
    ],
    callout: 'Dar bağlam. Keskin promptlar. Doğru yerleşikler.',
    thanks: 'Teşekkürler.',
  },
};

export const translations: Record<Lang, Translation> = { en, tr };

type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggle: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'tr') return stored;
  } catch {
    // ignore
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(() => setLangState((prev) => (prev === 'tr' ? 'en' : 'tr')), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle],
  );

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
