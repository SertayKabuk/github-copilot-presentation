import type { Translation } from '../types';
import { promptFrameColors, promptFramePositions } from '../content-shared';

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
        description: 'Daha net, daha nokta atışı. Bağlam penceresini sırt çantası değil bütçe olarak görün.',
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
    callout: 'Dar bağlam. Keskin promptlar. Doğru araçlar.',
    thanks: 'Teşekkürler.',
  },
};

export default tr;
