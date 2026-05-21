export type Lang = 'en' | 'tr';

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
