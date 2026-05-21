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
  cliIntro: Heading & {
    cards: Feature[];
    cmd: CommandBlock;
  };
  cliDiscovery: Heading & {
    items: Feature[];
    cmd: CommandBlock;
  };
  cliExecution: Heading & {
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
      'The move from request-based to token-based pricing changes how every developer should be using Copilot — in the IDE, in the CLI, and with skills.',
    badges: [
      { label: 'Tokens', color: '#60a5fa' },
      { label: 'Context', color: '#22d3ee' },
      { label: 'Prompts', color: '#a78bfa' },
      { label: 'CLI + Skills', color: '#34d399' },
    ],
    cmd: {
      label: 'The new mental model',
      title: 'Every token of context you attach is now on the bill.',
      commands: [
        'copilot "explain why this PR is failing" --files src/checkout.ts,logs/run-2031',
      ],
      notes: [
        'Bigger workspace context → bigger token bill, every single turn.',
        'Premium models multiply the cost — use them when the task earns it.',
        'Agent logs show tokens, model, tools. Read them.',
      ],
    },
  },
  pricing: {
    eyebrow: 'What changed',
    title: 'From premium requests to token consumption',
    subtitle:
      "Copilot's billing now reflects the real cost of work: input + output tokens for every turn.",
    before: {
      label: 'Before',
      title: 'Request-based',
      bullets: [
        'One chat or agent action ≈ one premium request.',
        'A short prompt and a huge one cost the same.',
        'Loose context had no direct price tag.',
        'Budgeting meant counting requests, not work.',
      ],
      footer: 'Easy to reason about, but it hid the real cost of bloated context.',
    },
    now: {
      label: 'Now',
      title: 'Token-based',
      bullets: [
        'Input tokens (your context) + output tokens (the answer) are billed.',
        'Bigger context, bigger bill — even if the model ignores most of it.',
        'Premium models charge more per token; agent loops compound it.',
        'Budgeting tracks tokens per task, not requests per day.',
      ],
      footer: 'Specificity and trimmed context are no longer style — they are cost control.',
    },
  },
  impact: {
    eyebrow: 'What it means for you',
    title: 'Context discipline is now cost discipline',
    subtitle: 'The habits that already make Copilot smarter also make it cheaper.',
    items: [
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
    ],
    pills: [
      { label: 'Narrow context', color: '#60a5fa' },
      { label: 'Structured prompts', color: '#c084fc' },
      { label: 'Pick the right model', color: '#fb7185' },
    ],
  },
  agenda: {
    eyebrow: 'Agenda',
    title: 'Four habits for the new pricing model',
    subtitle: 'Move from blind chat to a cost-aware workflow with clear signals at every step.',
    items: [
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
    ],
  },
  visibility: {
    eyebrow: 'Track 1 — Your usage',
    title: 'Your usage says: use more built-ins',
    subtitle:
      'You already use Copilot well for debugging and UI iteration. The next gain is orchestration: more slash workflows, less replayed context.',
    items: [
      {
        title: 'Use slash workflows',
        description: 'Let /research, /plan, /delegate, and /review handle the orchestration.',
        color: '#60a5fa',
      },
      {
        title: 'Front-load the spec',
        description: 'Put constraints, keep/remove rules, and acceptance criteria in turn one.',
        color: '#22d3ee',
      },
      {
        title: 'Reset after setup',
        description: 'After research or setup, continue in a fresh thread so polish stays cheap.',
        color: '#a78bfa',
      },
      {
        title: 'Reuse context once',
        description: 'Move repeat workflows into instructions, not huge pasted blobs or giant skills.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'High-impact moves',
      title: 'Your biggest upside is less manual orchestration and less context replay.',
      commands: ['/research', '/plan', '/delegate', '/review', '/chronicle tips', '/chronicle cost-tips'],
      notes: [
        'Start with /env to confirm active skills, instructions, and LSP support.',
        'Use /new after research so screenshot and polish loops stay in a short thread.',
        'Move SonarQube rules into copilot-instructions and split the large revealjs skill.',
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
  cliIntro: {
    eyebrow: 'Track 4 — CLI',
    title: 'GitHub Copilot CLI',
    subtitle:
      'An agentic terminal that searches, edits, runs, and explains — all in one thread, with token logs you can actually read.',
    cards: [
      {
        title: 'Stays in the terminal',
        description: 'No tab-flipping. Search, patch, run tests, and explain — without leaving the shell.',
        color: '#60a5fa',
      },
      {
        title: 'Reads its own logs',
        description: 'Chronicle shows you tokens, tools, and steps for every session you run.',
        color: '#22d3ee',
      },
      {
        title: 'Composes with git',
        description:
          'Lines up cleanly with branches, PRs, and CI — the agent works where your workflow lives.',
        color: '#a78bfa',
      },
      {
        title: 'Token-aware',
        description: 'Sessions are scoped, so context does not silently balloon across unrelated tasks.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'One ask, many useful moves',
      title: 'Let the CLI do investigation, patching, and validation in the same flow.',
      commands: ['copilot "fix the failing checkout workflow and explain the root cause"'],
      notes: [
        'Start with the failing run, touched files, and constraints to keep the search small.',
        'Land the fix and run checks from the same thread — no context handoff between tools.',
        'Watch chronicle to see how many tokens each step actually cost.',
      ],
    },
  },
  cliDiscovery: {
    eyebrow: 'Track 4 — CLI features (1/2)',
    title: 'Discover before you change',
    subtitle:
      'Fleet, Research, and Chronicle build the context — and the visibility — before any code moves.',
    items: [
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
    ],
    cmd: {
      label: 'Investigate first',
      title: 'Pull evidence into the working thread before you touch code.',
      commands: ['copilot research "why is the nightly job timing out?" --use logs,issues,diff'],
      notes: [
        'Fleet keeps multiple investigations alive without dropping the main thread.',
        'Research stitches code, issues, and web evidence into one working view.',
        'Chronicle lets you resume from a known good checkpoint — and audit token cost.',
      ],
    },
  },
  cliExecution: {
    eyebrow: 'Track 4 — CLI features (2/2)',
    title: 'Land the change without losing flow',
    subtitle:
      'Remote, Squad Mode, and PR Fix close the loop from patch to passing CI in one thread.',
    items: [
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
    ],
    cmd: {
      label: 'Patch and validate',
      title: 'Same thread: patch, run, explain, and push the PR fix.',
      commands: ['copilot pr fix --run "npm test" --explain --push'],
      notes: [
        'Remote runs in cloud or sandboxed envs when the local repo is not enough.',
        'Squad Mode splits work across focused agents — merge only the useful outcomes.',
        'PR Fix triages failing checks, patches, and pushes — with a written rationale.',
      ],
    },
  },
  skills: {
    eyebrow: 'Track 4 — Skills',
    title: 'Skills extend what Copilot can do',
    subtitle:
      'A skill is a reusable playbook — prompts, tools, and steps the agent should follow for a recurring task.',
    items: [
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
    ],
    footerLead: 'Use skills',
    footerBody:
      ' for the boring, repeated stuff: code review checklists, on-call runbooks, migration steps, PR templates. The agent stops re-learning and you stop re-typing.',
  },
  skillsRisks: {
    eyebrow: 'Important — Security',
    title: 'Be extremely careful installing skills',
    subtitle:
      'A skill runs with your local permissions. Treat every install like running a script from a stranger — because that is exactly what it is.',
    items: [
      {
        title: 'Run arbitrary commands',
        description: 'A skill can call shell, scripts, and tools with your local permissions.',
        color: '#fb7185',
      },
      {
        title: 'Read your files',
        description:
          'Anything in the workspace is reachable — secrets, tokens, customer data included.',
        color: '#f59e0b',
      },
      {
        title: 'Reach the network',
        description:
          'Skills can fetch and exfiltrate. A malicious one will look helpful on the way out.',
        color: '#fbbf24',
      },
    ],
    checklistLabel: 'Vetting checklist',
    checklistTitle: 'Before any skill runs in your repo',
    checklist: [
      'Trust the source: official org, known maintainer, real activity.',
      'Read the manifest — every tool, command, and network call it declares.',
      'Pin a version. Never auto-update skills from the internet.',
      'Run new skills inside a sandbox or throwaway workspace first.',
      'Treat it like a dependency: review, log, and remove if unused.',
    ],
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Where to look next',
    subtitle:
      'A curated starting point — plus a reminder that skills are powerful and deserve scrutiny.',
    awesome: {
      label: 'Awesome Copilot',
      title: 'Patterns, prompts, and tools from the community',
      description:
        'A curated index of Copilot tips, prompts, configs, and extensions worth borrowing.',
      domain: 'awesome-copilot.github.com',
    },
    skillsRegistry: {
      label: 'skills.sh',
      title: 'A registry of community skills — handle with care',
      description:
        'Useful for discovery, but anyone can publish. Vet every skill before you let it run in your repo or terminal.',
      domain: 'skills.sh',
      note: 'Read the manifest. Pin the version. Sandbox the first run.',
    },
  },
  imageTemplate: {
    title: 'Estimated price based on April usage',
    imageAlt: 'Estimated price image',
  },
  closing: {
    eyebrow: 'Closing',
    title: 'What to remember tomorrow',
    subtitle: 'Token-based pricing rewards the habits good engineers already wanted to build.',
    items: [
      {
        title: 'Watch the meter',
        description:
          'Read agent logs every day. Tokens, model, and tool calls tell you where the cost lives.',
        color: '#60a5fa',
      },
      {
        title: 'Spend on signal',
        description:
          'Narrow context, structured prompts, and clear done-when criteria pay for themselves.',
        color: '#c084fc',
      },
      {
        title: 'Trust, then verify',
        description: 'CLI and skills are powerful — vet every skill before it runs in your repo.',
        color: '#34d399',
      },
    ],
    callout: 'Narrow context. Sharper prompts. Vetted tools.',
    thanks: 'Thank you.',
  },
};

const tr: Translation = {
  toggle: { aria: 'Dili değiştir', en: 'EN', tr: 'TR' },
  hero: {
    badge: 'Webinar sunumu',
    title: 'GitHub Copilot: Token, Araçlar ve Disiplin',
    subtitle:
      'İstek bazlı fiyatlandırmadan token bazlı fiyatlandırmaya geçiş, her geliştiricinin Copilot\'u nasıl kullanması gerektiğini değiştiriyor — IDE\'de, CLI\'da ve skill\'lerde.',
    badges: [
      { label: 'Tokenlar', color: '#60a5fa' },
      { label: 'Bağlam', color: '#22d3ee' },
      { label: 'Promptlar', color: '#a78bfa' },
      { label: 'CLI + Skill\'ler', color: '#34d399' },
    ],
    cmd: {
      label: 'Yeni zihinsel model',
      title: 'Eklediğiniz her token bağlam artık faturanızda.',
      commands: [
        'copilot "bu PR neden başarısız oluyor açıkla" --files src/checkout.ts,logs/run-2031',
      ],
      notes: [
        'Daha büyük workspace bağlamı → her turda daha büyük token faturası.',
        'Premium modeller maliyeti katlar — sadece görev hak ettiğinde kullanın.',
        'Agent logları tokenları, modeli, araçları gösterir. Onları okuyun.',
      ],
    },
  },
  pricing: {
    eyebrow: 'Ne değişti',
    title: 'Premium isteklerden token tüketimine',
    subtitle:
      'Copilot\'un faturalandırması artık işin gerçek maliyetini yansıtıyor: her tur için giriş + çıkış tokenları.',
    before: {
      label: 'Önce',
      title: 'İstek bazlı',
      bullets: [
        'Bir sohbet veya agent eylemi ≈ bir premium istek.',
        'Kısa bir prompt ile devasa bir prompt aynı fiyata mal oluyordu.',
        'Gevşek bağlamın doğrudan bir fiyat etiketi yoktu.',
        'Bütçeleme, iş değil, istek saymaktı.',
      ],
      footer: 'Anlaması kolaydı, ancak şişirilmiş bağlamın gerçek maliyetini gizliyordu.',
    },
    now: {
      label: 'Şimdi',
      title: 'Token bazlı',
      bullets: [
        'Giriş tokenları (bağlamınız) + çıkış tokenları (cevap) faturalandırılır.',
        'Daha büyük bağlam, daha büyük fatura — model çoğunu görmezden gelse bile.',
        'Premium modeller token başına daha pahalı; agent döngüleri bunu katlar.',
        'Bütçeleme artık günlük istekleri değil, görev başına tokenları takip eder.',
      ],
      footer: 'Belirlilik ve sade bağlam artık stil değil — maliyet kontrolü.',
    },
  },
  impact: {
    eyebrow: 'Sizin için anlamı',
    title: 'Bağlam disiplini artık maliyet disiplinidir',
    subtitle: 'Copilot\'u daha akıllı yapan alışkanlıklar onu aynı zamanda daha ucuz da yapar.',
    items: [
      {
        title: 'Bağlam = maliyet',
        description:
          'Eklediğiniz her dosya, log ve sekme giriş tokeni olarak faturalandırılır — model neredeyse hiç kullanmasa bile.',
        color: '#60a5fa',
      },
      {
        title: 'Özensiz promptlar iki kat pahalı',
        description:
          'Belirsiz bir istek önce tahmin için, sonra düzeltme için tokenları yakar. Belirlilik artık bir bütçe aracıdır.',
        color: '#c084fc',
      },
      {
        title: 'Premium modeller katlar',
        description:
          'Agent modu ve frontier modeller tur başına daha fazla token tüketir. Sadece görev hak ettiğinde kullanın.',
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
    title: 'Yeni fiyatlandırma modeli için dört alışkanlık',
    subtitle:
      'Kör sohbetten her adımda net sinyallere sahip maliyet bilinçli bir iş akışına geçin.',
    items: [
      {
        title: 'Sayacı görün',
        description: 'Agent loglarını okuyun: kaç token, hangi model, hangi araçlar, hangi dosyalar.',
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
        description: 'Fleet, research, squad mode, PR fix — ve skill\'ler etrafında doğru disiplin.',
        color: '#34d399',
      },
    ],
  },
  visibility: {
    eyebrow: 'Adım 1 — Kendi kullanımın',
    title: 'Kullanımın şunu söylüyor: yerleşik akışları daha çok kullan',
    subtitle:
      'Debug ve UI iterasyonunda zaten iyisin. Sıradaki kazanç orkestrasyonda: daha çok slash akışı, daha az tekrar eden bağlam.',
    items: [
      {
        title: 'Slash akışlarını kullan',
        description: '/research, /plan, /delegate ve /review ile orkestrasyonu prompt dışına çıkar.',
        color: '#60a5fa',
      },
      {
        title: 'Spesifikasyonu öne çek',
        description: 'Kısıtları, korunacak/çıkarılacak kuralları ve kabul kriterini ilk turda ver.',
        color: '#22d3ee',
      },
      {
        title: 'Kurulumdan sonra sıfırla',
        description: 'Araştırma veya kurulumdan sonra yeni bir iş parçacığında devam et; rötuş turları ucuz kalsın.',
        color: '#a78bfa',
      },
      {
        title: 'Bağlamı bir kez kodla',
        description: 'Tekrarlanan akışları talimatlara taşı; dev skill ve yapıştırılan raporlarla taşıma.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'En yüksek getirili hamleler',
      title: 'En büyük fırsat: daha az elle orkestrasyon, daha az bağlam tekrarı.',
      commands: ['/research', '/plan', '/delegate', '/review', '/chronicle tips', '/chronicle cost-tips'],
      notes: [
        'Başta /env ile aktif skill, talimat ve LSP desteğini kontrol et.',
        'Araştırmadan sonra /new kullan; ekran görüntüsü ve rötuş döngülerini kısa bir iş parçacığında tut.',
        'SonarQube kurallarını copilot-instructions\'a taşı; büyük revealjs skill\'ini böl.',
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
  cliIntro: {
    eyebrow: 'Adım 4 — CLI',
    title: 'GitHub Copilot CLI',
    subtitle:
      'Arayan, düzenleyen, çalıştıran ve açıklayan agentik bir terminal — hepsi tek bir konuşmada, gerçekten okuyabileceğiniz token loglarıyla.',
    cards: [
      {
        title: 'Terminalde kalır',
        description: 'Sekme değiştirme yok. Arayın, yamala, testleri çalıştırın ve açıklayın — shell\'den çıkmadan.',
        color: '#60a5fa',
      },
      {
        title: 'Kendi loglarını okur',
        description: 'Chronicle, çalıştırdığınız her oturum için tokenları, araçları ve adımları gösterir.',
        color: '#22d3ee',
      },
      {
        title: 'Git ile birleşir',
        description:
          'Branch\'ler, PR\'lar ve CI ile düzgün uyum sağlar — agent iş akışınızın bulunduğu yerde çalışır.',
        color: '#a78bfa',
      },
      {
        title: 'Token bilinçli',
        description: 'Oturumlar sınırlandırılmış, böylece bağlam ilgisiz görevler arasında sessizce şişmez.',
        color: '#34d399',
      },
    ],
    cmd: {
      label: 'Bir istek, birçok yararlı hamle',
      title: 'CLI\'nın araştırma, yamama ve doğrulamayı aynı akışta yapmasına izin verin.',
      commands: ['copilot "başarısız checkout workflow\'unu düzelt ve kök nedeni açıkla"'],
      notes: [
        'Aramayı küçük tutmak için başarısız çalıştırma, dokunulan dosyalar ve kısıtlarla başlayın.',
        'Düzeltmeyi indirin ve kontrolleri aynı konuşmada çalıştırın — araçlar arası bağlam aktarımı yok.',
        'Her adımın gerçekten kaç tokena mal olduğunu görmek için chronicle\'ı izleyin.',
      ],
    },
  },
  cliDiscovery: {
    eyebrow: 'Adım 4 — CLI özellikleri (1/2)',
    title: 'Değiştirmeden önce keşfedin',
    subtitle:
      'Fleet, Research ve Chronicle herhangi bir kod değişmeden önce bağlamı — ve görünürlüğü — kurar.',
    items: [
      {
        title: 'Fleet',
        description: 'Ana konuşmayı kaybetmeden depolar arası paralel araştırmaları koordine eder.',
        color: '#60a5fa',
      },
      {
        title: 'Research',
        description: 'GitHub geçmişini, issue\'ları ve web kanıtlarını önce çalışma bağlamına çeker.',
        color: '#22d3ee',
      },
      {
        title: 'Chronicle',
        description: 'Oturumları tekrar oynatın, token kullanımını görün ve bilinen iyi bir checkpoint\'ten devam edin.',
        color: '#a78bfa',
      },
    ],
    cmd: {
      label: 'Önce araştırın',
      title: 'Koda dokunmadan önce kanıtları çalışma konuşmasına çekin.',
      commands: ['copilot research "gece çalışan iş neden timeout oluyor?" --use logs,issues,diff'],
      notes: [
        'Fleet, ana konuşmayı bırakmadan birden fazla araştırmayı canlı tutar.',
        'Research, kodu, issue\'ları ve web kanıtlarını tek bir çalışma görünümüne diker.',
        'Chronicle, bilinen iyi bir checkpoint\'ten devam etmenize ve token maliyetini denetlemenize olanak tanır.',
      ],
    },
  },
  cliExecution: {
    eyebrow: 'Adım 4 — CLI özellikleri (2/2)',
    title: 'Akışı kaybetmeden değişikliği bitirin',
    subtitle:
      'Remote, Squad Mode ve PR Fix, yamadan başarılı CI\'ya kadar döngüyü tek bir konuşmada kapatır.',
    items: [
      {
        title: 'Remote',
        description: 'Yerel bağlam yetmediğinde bulut veya sandbox ortamlarda çalışır.',
        color: '#34d399',
      },
      {
        title: 'Squad Mode',
        description: 'Bir problemi uzmanlaşmış agent\'lara böler, sonra sadece yararlı çıktıları birleştirir.',
        color: '#f59e0b',
      },
      {
        title: 'PR Fix',
        description: 'Başarısız kontrolleri triyaj eder, sorunu yamar ve terminalden döngüyü kapatır.',
        color: '#fb7185',
      },
    ],
    cmd: {
      label: 'Yamayın ve doğrulayın',
      title: 'Aynı konuşma: yama, çalıştır, açıkla ve PR fix\'i pushla.',
      commands: ['copilot pr fix --run "npm test" --explain --push'],
      notes: [
        'Remote, yerel repo yeterli olmadığında bulut veya sandbox ortamlarda çalışır.',
        'Squad Mode, işi odaklı agent\'lara böler — sadece yararlı çıktıları birleştirin.',
        'PR Fix, başarısız kontrolleri triyaj eder, yamar ve pushlar — yazılı gerekçesiyle birlikte.',
      ],
    },
  },
  skills: {
    eyebrow: 'Adım 4 — Skill\'ler',
    title: 'Skill\'ler Copilot\'un yapabileceklerini genişletir',
    subtitle:
      'Skill, yeniden kullanılabilir bir oyun kitabıdır — agent\'ın tekrarlayan bir görev için izlemesi gereken promptlar, araçlar ve adımlar.',
    items: [
      {
        title: 'Yeniden kullanılabilir playbook\'lar',
        description: 'Agent\'ın bir görev için her zaman izlemesi gereken promptları, araçları ve adımları paketleyin.',
        color: '#60a5fa',
      },
      {
        title: 'Daha keskin bağlam',
        description: 'Skill\'ler odaklanmış talimatlar enjekte eder, böylece aynı kurulumu tekrar yazmazsınız.',
        color: '#22d3ee',
      },
      {
        title: 'Ekiple paylaşılabilir',
        description: 'Skill\'ler repo üzerinden taşınır — onboarding ve kurallar artık kafalarda yaşamaz.',
        color: '#34d399',
      },
    ],
    footerLead: 'Skill\'leri kullanın',
    footerBody:
      ' sıkıcı, tekrarlanan şeyler için: kod inceleme kontrol listeleri, on-call runbook\'ları, migration adımları, PR şablonları. Agent yeniden öğrenmeyi bırakır ve siz yeniden yazmayı bırakırsınız.',
  },
  skillsRisks: {
    eyebrow: 'Önemli — Güvenlik',
    title: 'Skill yüklerken son derece dikkatli olun',
    subtitle:
      'Bir skill yerel izinlerinizle çalışır. Her kurulumu bir yabancıdan bir script çalıştırmak gibi görün — çünkü tam olarak budur.',
    items: [
      {
        title: 'Keyfi komutları çalıştırır',
        description: 'Bir skill, yerel izinlerinizle shell\'i, scriptleri ve araçları çağırabilir.',
        color: '#fb7185',
      },
      {
        title: 'Dosyalarınızı okur',
        description:
          'Workspace\'teki her şey erişilebilir — secret\'lar, tokenlar ve müşteri verileri dahil.',
        color: '#f59e0b',
      },
      {
        title: 'Ağa erişir',
        description:
          'Skill\'ler veri çekebilir ve sızdırabilir. Kötü niyetli olan, çıkışa kadar yardımcı görünecektir.',
        color: '#fbbf24',
      },
    ],
    checklistLabel: 'Kontrol listesi',
    checklistTitle: 'Repo\'nuzda herhangi bir skill çalıştırmadan önce',
    checklist: [
      'Kaynağa güvenin: resmi organizasyon, bilinen maintainer, gerçek aktivite.',
      'Manifest\'i okuyun — bildirdiği her aracı, komutu ve ağ çağrısını.',
      'Bir sürümü sabitleyin. Skill\'leri internetten asla otomatik güncellemeyin.',
      'Yeni skill\'leri önce sandbox veya geçici bir workspace\'te çalıştırın.',
      'Bunu bir bağımlılık gibi görün: inceleyin, loglayın ve kullanılmıyorsa kaldırın.',
    ],
  },
  resources: {
    eyebrow: 'Kaynaklar',
    title: 'Bundan sonra nereye bakmalı',
    subtitle:
      'Seçilmiş bir başlangıç noktası — artı skill\'lerin güçlü olduğu ve incelemeyi hak ettiği hatırlatması.',
    awesome: {
      label: 'Awesome Copilot',
      title: 'Topluluktan kalıplar, promptlar ve araçlar',
      description:
        'Ödünç almaya değer Copilot ipuçları, promptları, konfigürasyonları ve eklentilerinin seçilmiş bir dizini.',
      domain: 'awesome-copilot.github.com',
    },
    skillsRegistry: {
      label: 'skills.sh',
      title: 'Topluluk skill\'lerinin bir kaydı — dikkatli kullanın',
      description:
        'Keşif için yararlı, ancak herkes yayınlayabilir. Repo\'nuzda veya terminalde çalıştırmadan önce her skill\'i inceleyin.',
      domain: 'skills.sh',
      note: 'Manifest\'i okuyun. Sürümü sabitleyin. İlk çalıştırmayı sandbox\'layın.',
    },
  },
  imageTemplate: {
    title: 'Nisan kullanımına dayalı tahmini fiyat',
    imageAlt: 'Tahmini fiyat görseli',
  },
  closing: {
    eyebrow: 'Kapanış',
    title: 'Yarın hatırlanacak şeyler',
    subtitle:
      'Token bazlı fiyatlandırma, iyi mühendislerin zaten geliştirmek istediği alışkanlıkları ödüllendirir.',
    items: [
      {
        title: 'Sayacı izleyin',
        description:
          'Agent loglarını her gün okuyun. Tokenlar, model ve araç çağrıları maliyetin nerede olduğunu söyler.',
        color: '#60a5fa',
      },
      {
        title: 'Sinyale harcayın',
        description:
          'Dar bağlam, yapılı promptlar ve net bitiş kriterleri kendi maliyetini öder.',
        color: '#c084fc',
      },
      {
        title: 'Güvenin, sonra doğrulayın',
        description: 'CLI ve skill\'ler güçlüdür — repo\'nuzda çalıştırmadan önce her skill\'i inceleyin.',
        color: '#34d399',
      },
    ],
    callout: 'Dar bağlam. Keskin promptlar. İncelenmiş araçlar.',
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
