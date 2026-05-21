---
name: revealjs
description: revealjs developer-facing guidance, including setup, authoring, styling, plugins, runtime APIs, presenter tools, navigation patterns, upgrade paths, and React integration.
---

# reveal.js Developer Guide

> Synthesized from the Markdown files in `reveal/revealjs.com`, primarily the English docs under `src/`, plus the working HTML demos in `examples/`, and intended as a practical development reference.

This guide consolidates the main developer-facing guidance from the official docs, including setup, authoring, styling, plugins, runtime APIs, presenter tools, navigation patterns, upgrade paths, React integration, and the concrete patterns shown by the upstream `examples/*.html` gallery. It includes the pages that are easy to miss when skimming the repo, such as `transitions.md`, `keyboard.md`, `overview.md`, `presentation-state.md`, `touch-navigation.md`, `links.md`, `fullscreen.md`, `jump-to-slide.md`, and `upgrading.md`. The `src/zh-Hant/` pages mirror the same docs in translation, so this reference focuses on the English originals.

## Source coverage

Repository markdown inventory reviewed for this guide:

- Repo-level context: `README.md`, `translation-guide.md`
- Foundation and structure: `installation.md`, `initialization.md`, `markup.md`, `vertical-slides.md`, `layout.md`, `presentation-size.md`, `transitions.md`, `backgrounds.md`
- Authoring and slide content: `markdown.md`, `code.md`, `math.md`, `media.md`, `links.md`, `fragments.md`, `auto-animate.md`, `auto-slide.md`, `slide-visibility.md`
- Runtime and control: `config.md`, `keyboard.md`, `api.md`, `events.md`, `postmessage.md`, `presentation-state.md`, `overview.md`, `fullscreen.md`, `touch-navigation.md`, `jump-to-slide.md`, `slide-numbers.md`
- Ecosystem and delivery: `themes.md`, `plugins.md`, `creating-plugins.md`, `speaker-view.md`, `pdf-export.md`, `react.md`, `react-legacy.md`, `scroll-view.md`, `lightbox.md`, `multiplex.md`, `upgrading.md`
- Site and translation pages: `src/index.md`, `src/course.md`, and `src/zh-Hant/*.md` were checked for coverage context; the guide synthesizes the English docs to avoid duplicating translated content
- Example gallery: all upstream HTML files currently in `examples/`: `500-slides.html`, `auto-animate.html`, `backgrounds.html`, `barebones.html`, `layout-helpers.html`, `lightbox.html`, `markdown.html`, `math.html`, `media.html`, `multiple-presentations.html`, `scroll.html`, and `transitions.html`

## Documentation map

| Area | What the docs cover |
| --- | --- |
| Setup and bootstrap | Installation modes, initialization, markup, embedded decks, teardown |
| Content authoring | HTML slides, Markdown, code, math, media, links, notes |
| Structure and animation | Layout, backgrounds, transitions, fragments, auto-animate, slide visibility |
| Configuration and runtime | Config options, keyboard control, touch, presentation state, auto-slide, JavaScript API, events, postMessage |
| Presenter workflow | Overview mode, fullscreen, jump-to-slide, slide numbers, speaker view, PDF export |
| Examples gallery | Barebones setup, large decks, multi-deck embeds, lightboxes, scroll mode, and known-good feature snippets |
| Modern integrations | Scroll view, lightbox, React bindings, multiplex, upgrading |

## Examples directory walkthrough

The upstream `examples/` folder is executable documentation. These HTML files are the fastest way to copy a known-good pattern:

| File | What it demonstrates | Reach for it when you need |
| --- | --- | --- |
| `500-slides.html` | A stress-test deck with hundreds of simple horizontal slides | sanity-checking performance or generated decks |
| `auto-animate.html` | `data-id`-driven morphs, unmatched fade-outs, grouped animations, code diffs, list reordering | complex state-to-state motion |
| `backgrounds.html` | color, image, repeated, video, iframe, and inherited stack backgrounds | slide backgrounds beyond a single hero image |
| `barebones.html` | the smallest possible reveal.js deck with no theme | debugging setup or building a deck from scratch |
| `layout-helpers.html` | `r-fit-text`, `r-stretch`, `r-stack`, `r-hstack`, `r-vstack`, and alignment utilities | fast slide layout composition |
| `lightbox.html` | preview overlays and lightbox flows for images, video, and iframe links | opt-in previews without leaving the deck |
| `markdown.html` | external Markdown, regex separators, attributes, code fences, images, math, smartypants | advanced Markdown authoring |
| `math.html` | MathJax/KaTeX usage, macros, fragments, and display modes | equation-heavy decks or migrations |
| `media.html` | autoplaying iframes, video, audio, background media, and interactive iframe backgrounds | embedded media behavior |
| `multiple-presentations.html` | two independent embedded decks with different plugin sets and focus handling | multi-deck dashboards or docs pages |
| `scroll.html` | `view: 'scroll'` plus fragments, auto-animate, code highlights, gradients, and background media | article-style or mobile-friendly decks |
| `transitions.html` | per-slide transition overrides, mixed in/out transitions, and vertical transition variations | tuning slide motion |

### What the HTML demos add beyond the prose docs

- `500-slides.html` confirms that a huge deck can stay fast when the markup is intentionally simple and the transition is low-overhead.
- `auto-animate.html` proves auto-animate is not limited to text morphs: it covers code diffs, list reorders, text metric interpolation, absolute-position morphs, grouped sequences with `data-auto-animate-id`, and deep-linked vertical stacks.
- `backgrounds.html` shows shorthand `data-background`, stack-level inheritance, background reuse across consecutive slides, and the auto-applied `has-dark-background` / `has-light-background` classes.
- `layout-helpers.html` shows the helpers in realistic combinations: `r-stack` plus fragments, `r-fit-text` on multiple headings, `r-stretch` with fixed caption content, and `r-hstack` / `r-vstack` inside auto-animated slides.
- `markdown.html` demonstrates all three authoring styles in one place: external files, inline `<script type="text/template">`, and raw Markdown directly inside `<section data-markdown>`.
- `math.html` goes beyond toy equations by showing fragments, legacy math script tags, and a practical `mathjax4` configuration with macros and line wrapping.
- `media.html` and `lightbox.html` show autoplay iframes, interactive iframe backgrounds, fragment-scoped audio, explicit preview URLs, and opt-in link previews.
- `multiple-presentations.html` shows two embedded decks with separate plugin sets, focus-scoped keyboard control, and imperative navigation after async initialization.
- `scroll.html` proves scroll view still supports fragments, auto-animate, code walkthroughs, gradients, image backgrounds, and muted background video, while also showing custom easing and staggered `data-auto-animate-delay`.
- `transitions.html` shows mixed in/out transitions, per-slide overrides inside vertical stacks, and when `data-transition="none"` is useful.

## Recommended default path

If you are starting a new deck today, the safest default is:

1. Use `npm install reveal.js` for a normal web project, or `@revealjs/react` for React.
2. Import `reveal.js/reveal.css` and one theme CSS file explicitly.
3. Register features through `plugins: []`, not the deprecated `dependencies: []` array.
4. Enable `hash: true` so slide position is URL-addressable.
5. Use a local HTTP server whenever you rely on external Markdown, notes, or export workflows.

### Minimal ES module setup

```ts
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'

const deck = new Reveal({
  hash: true,
  slideNumber: 'c/t',
  transition: 'slide',
  plugins: [Markdown],
})

await deck.initialize()
```

### Barebones HTML example

`examples/barebones.html` is the smallest working reveal.js deck:

```html
<link rel="stylesheet" href="../dist/reveal.css" />

<div class="reveal">
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>

<script src="../dist/reveal.js"></script>
<script>
  Reveal.initialize()
</script>
```

- No theme is loaded, so you see browser defaults.
- It is the best baseline when debugging markup, CSS, or plugin loading issues.

## Core deck structure

reveal.js expects a strict HTML shape:

```html
<div class="reveal">
  <div class="slides">
    <section>Horizontal slide</section>
    <section>
      <section>Vertical 1</section>
      <section>Vertical 2</section>
    </section>
  </div>
</div>
```

### Rules that matter

- The required hierarchy is `.reveal > .slides > section`.
- Top-level `<section>` elements are horizontal slides.
- Nested `<section>` elements create vertical stacks.
- `data-state="some-state"` adds a class to the reveal viewport and emits a matching event hook.
- `Reveal.initialize()` returns a promise; wait for it before interacting with the deck.
- `Reveal.destroy()` is the supported teardown path for SPA-style integrations.

### Embedded and multi-deck usage

If you place multiple decks on one page, use:

- `embedded: true`
- `keyboardCondition: 'focused'`
- explicit CSS sizing on each `.reveal` container

Without that, decks tend to size to the full viewport and compete for keyboard control.

The official multi-deck example (`examples/multiple-presentations.html`) uses one `Reveal` instance per root element:

```js
const deck1 = new Reveal(document.querySelector('.deck1'), {
  embedded: true,
  progress: false,
  keyboardCondition: 'focused',
  plugins: [RevealHighlight],
})

const deck2 = new Reveal(document.querySelector('.deck2'), {
  embedded: true,
  progress: false,
  keyboardCondition: 'focused',
  plugins: [RevealMarkdown, RevealMath],
})

await deck1.initialize()
await deck2.initialize()
```

- Each deck can register its own plugins and event handlers.
- The active deck root receives a `focused` class, which the example uses for focus styling.
- Promise-based initialization is handy when you want to move a secondary deck immediately after startup.

## Configuration that matters most

| Option | Why it matters |
| --- | --- |
| `hash: true` | Makes slides deep-linkable |
| `history: true` | Pushes slide changes into browser history |
| `transition` | Sets deck-wide slide transition style |
| `navigationMode` | Controls default, linear, or grid navigation behavior |
| `embedded: true` | Required for non-fullscreen or multi-deck layouts |
| `disableLayout: true` | Turns off reveal.js scaling and centering so you control layout fully |
| `width`, `height`, `margin` | Define the base deck canvas and layout breathing room |
| `minScale`, `maxScale` | Bound how far reveal.js may scale the presentation |
| `autoAnimate` | Global toggle for auto-animate |
| `autoSlide` | Advances slides automatically on a timer |
| `fragments` | Global toggle for fragments |
| `postMessage` | Enables cross-window messaging for embedded decks |
| `preloadIframes` | Controls iframe loading strategy |

reveal.js also supports runtime config updates:

```js
Reveal.configure({
  navigationMode: 'linear',
  autoAnimate: true,
})
```

### Large deck stress example

`examples/500-slides.html` is the upstream proof that reveal.js can handle very large horizontal decks when the slides stay simple.

- It keeps the deck intentionally bare: one theme, no plugins, and repeated `<section><h1>...</h1></section>` slides.
- It uses `transition: 'linear'`, which is a good low-overhead starting point for generated or high-count decks.
- If a generated deck performs poorly, compare it against this example before blaming reveal.js itself.

### Auto-slide and pacing

Auto-slide is useful for kiosks, unattended loops, and timed demos.

- `autoSlide` sets the slide interval.
- `data-autoslide` overrides timing per slide.
- `autoSlideStoppable` controls whether user input can pause the timer.
- `loop: true` is the common pairing for unattended decks.
- Auto-sliding decks get a play/pause control automatically, and users can pause or resume with `A`.
- `autoSlideMethod` lets you replace the default navigation behavior, for example by forcing top-level horizontal progression only.
- Events such as `autoslideresumed` and `autoslidepaused` fire when playback changes.
- `defaultTiming` and `totalTime` are more relevant to speaker pacing than unattended loops.

### Transitions

Slide transitions and background transitions are configured separately.

- `transition` controls the deck-wide slide transition, while `data-transition` overrides it per slide.
- Available transition styles are `none`, `fade`, `slide`, `convex`, `concave`, and `zoom`.
- `data-transition-speed="default|fast|slow"` lets a slide override transition speed.
- You can combine in/out behavior with values like `slide-in fade-out` or `fade-in slide-out`.
- `backgroundTransition` changes background motion globally, and `data-background-transition` overrides it per slide.
- `examples/transitions.html` is the quickest sanity check for mixed pairs such as `zoom-in fade-out` and `convex-in concave-out`, including inside vertical stacks.
- The same example also includes `data-transition="none"`, which is useful for static comparison slides and performance-sensitive generated decks.

### Keyboard bindings

reveal.js lets you override or extend keyboard behavior without patching core.

- Use the `keyboard` config map to remap a key code to a function, a reveal.js API method name, or `null` to disable the default behavior.
- Example: map `13` to `'next'`, bind `27` to a custom callback, or set `32` to `null` to suppress the default spacebar behavior.
- `Reveal.addKeyBinding()` and `Reveal.removeKeyBinding()` let apps and plugins manage bindings dynamically.
- If you supply `key` and `description`, the binding can appear in the built-in help overlay.

### Touch, overview, and fullscreen

- Swipe navigation is enabled by default on touch devices; set `touch: false` to disable it.
- Add `data-prevent-swipe` to scrollable or interactive elements that should keep receiving touch gestures.
- Overview mode is available with `Esc` or `O`, or programmatically through `Reveal.toggleOverview()`.
- `overviewshown` and `overviewhidden` fire when overview mode changes.
- Fullscreen support is built in: focus the deck and press `F`, then use `Esc` to exit.

## Markdown authoring

The Markdown plugin is more capable than a simple Markdown-to-HTML converter. It supports inline slides, external files, speaker notes, and attribute injection.

### Inline Markdown

```html
<section data-markdown>
  <textarea data-template>
    ## Slide one

    ---

    ## Slide two
  </textarea>
</section>
```

### External Markdown

```html
<section
  data-markdown="deck.md"
  data-separator="^\r?\n---\r?\n$"
  data-separator-vertical="^\r?\n--\r?\n$"
  data-separator-notes="^Note:"
></section>
```

### Key Markdown capabilities

- Inline or external Markdown authoring.
- Separate horizontal, vertical, and notes delimiters.
- Slide attributes via comments such as `<!-- .slide: data-background="#0f172a" -->`.
- Element attributes via comments such as `<!-- .element: class="fragment" -->`.
- Markdown code fences can drive reveal.js code line highlighting.
- `markdown: { smartypants: true }` passes options through to the Markdown parser.

### Markdown caveats

- External Markdown requires an HTTP server. Opening `index.html` directly from disk is not enough.
- Indentation matters. Mixed tabs/spaces and extra blank lines can produce surprising results.
- External notes and external Markdown are especially sensitive to local file restrictions.

### Example-driven Markdown patterns

- `examples/markdown.html` uses all three authoring modes: external `data-markdown`, inline `<script type="text/template">`, and raw Markdown directly in the section body.
- `examples/markdown.html` shows custom external separators using blank-line regexes, not just the default `---`.
- Setting `data-separator="$x"` is a deliberate no-match that lets literal `---` remain Markdown horizontal rules.
- The code fence syntax can combine starting line offsets with stepped highlights when you are quoting real source files.
- The example also confirms that slide attributes, element attributes, images, math, and `smartypants` work inside Markdown-authored slides.
- The official example initializes Markdown alongside Highlight, Notes, and KaTeX, so those plugins can coexist in one deck without special handling.

## Presenting code

Syntax highlighting is powered by the highlight plugin plus a CSS theme such as Monokai.

### Typical setup

```js
import RevealHighlight from 'reveal.js/plugin/highlight'
import 'reveal.js/plugin/highlight/monokai.css'

const deck = new Reveal({
  plugins: [RevealHighlight],
})
```

### Useful code features

- `data-trim` removes shared indentation.
- `data-noescape` avoids HTML escaping when needed.
- `class="language-ts"` or similar overrides language detection.
- `data-line-numbers="3,8-10"` highlights fixed lines.
- `data-line-numbers="3-5|8-10|13-15"` creates step-through code walkthroughs.
- `data-ln-start-from="7"` offsets visible line numbers.
- In Markdown code fences, you can combine a starting line offset with stepped highlights when quoting source snippets from real files.

### Example

```html
<pre><code class="language-ts" data-trim data-line-numbers="1|2-4|6">
const deck = new Reveal()
await deck.initialize()

Reveal.on('slidechanged', syncState)
</code></pre>
```

## Math and formulas

The Math plugin covers both HTML-authored and Markdown-authored decks.

- reveal.js supports `RevealMath.KaTeX`, `RevealMath.MathJax2`, `RevealMath.MathJax3`, and `RevealMath.MathJax4`.
- The docs recommend KaTeX if you do not have a strong preference.
- Math can be written directly in slide HTML or in Markdown using delimiters like `$...$` and `$$...$$`.
- Library-specific config lives under `katex`, `mathjax2`, `mathjax3`, or `mathjax4`.
- KaTeX and MathJax default to CDN-backed assets unless you pin versions or point to a local copy.
- Offline decks should use `katex.local` or a local `mathjax` path rather than relying on the default CDN URLs.
- `examples/math.html` shows a full `mathjax4` setup with `tex.macros`, `displayOverflow: 'linebreak'`, and `skipHtmlTags`, which is a strong template for real-world math-heavy decks.
- The example also demonstrates math inside fragments and legacy `<script type="math/tex; mode=display">` blocks, both of which are useful when migrating older content.

## Fragments and auto-animate

### Fragments

Fragments let you reveal slide content progressively.

- Add `class="fragment"` to any element.
- Control order with `data-fragment-index`.
- Common fragment styles include:
  - `fade-up`
  - `fade-down`
  - `fade-left`
  - `fade-right`
  - `fade-in-then-out`
  - `fade-out`
  - `current-visible`
  - `grow`
  - `shrink`
  - `highlight-red`
  - `highlight-green`

Custom fragment effects are also supported by styling `.fragment.custom-name` and `.fragment.custom-name.visible`.

### Auto-animate

Auto-animate matches elements across adjacent slides and animates the transition.
The dedicated `examples/auto-animate.html` deck is worth reading alongside the docs because it covers several edge cases in one place.

- Add `data-auto-animate` to adjacent slides.
- Use `data-id` when you want reliable matching.
- Per-sequence and per-element tuning is available through:
  - `data-auto-animate-delay`
  - `data-auto-animate-duration`
  - `data-auto-animate-easing`
- `data-auto-animate-unmatched="fade"` softens enter/exit behavior for unmatched elements.
- `data-auto-animate-id` scopes separate animation groups so nearby sequences do not cross-match.
- For code blocks, matching `data-id` values on `<pre>` elements work especially well.
- The official demos show CSS interpolation for position, size, colors, border radius, opacity, line-height, and letter-spacing.
- `scroll.html` adds slide-level easing plus per-element delays for staggered auto-animations.
- The example gallery uses the same primitives for code diffs, list reordering, style interpolation, absolute-position morphs, and deep-linked stacked slides inside vertical stacks.

```html
<section data-auto-animate data-auto-animate-unmatched="fade">
  <h2 data-id="title">Example</h2>
  <pre data-id="code"><code>const count = 0</code></pre>
</section>

<section data-auto-animate data-auto-animate-unmatched="fade">
  <h2 data-id="title" style="margin-top: 3rem">Example</h2>
  <pre data-id="code"><code>const count = 1</code></pre>
</section>

<section data-auto-animate data-auto-animate-id="chart-step">
  <div data-id="bar-1" style="height: 40px"></div>
</section>

<section data-auto-animate data-auto-animate-id="chart-step">
  <div data-id="bar-1" data-auto-animate-delay="0.1" style="height: 140px"></div>
</section>
```

### Auto-animate caveat

Do not rely on DOM order alone for important transitions. Use `data-id` explicitly, especially for non-text elements.

## Themes, backgrounds, layout, and media

### Built-in themes

The docs cover built-in themes such as:

- `black`
- `white`
- `league`
- `beige`
- `night`
- `serif`
- `simple`
- `solarized`
- `moon`
- `dracula`
- `sky`
- `blood`

Theme values are exposed as CSS custom properties, which makes custom theming straightforward.

`examples/barebones.html` intentionally omits a theme so you can see exactly what reveal.js itself provides without presentation styling.

### Backgrounds

Per-slide background options include:

- `data-background-color`
- `data-background-gradient`
- `data-background-image`
- `data-background-video`
- `data-background-iframe`
- `data-background-opacity`
- `data-background-video-loop`
- `data-background-interactive`
- `data-background-size`, `data-background-position`, and `data-background-repeat`
- `data-background-transition`

`examples/backgrounds.html` also shows two details that are easy to miss:

- `data-background` works as a shorthand for both colors and images, while `data-background-color` is the more explicit variant.
- If you put a background on a parent slide in a vertical stack, child slides inherit it until they override it.
- reveal.js adds `has-dark-background` and `has-light-background` classes, which the example uses to swap foreground text color automatically.
- Repeating the same background across adjacent horizontal or vertical slides is a supported way to make multiple steps feel like one scene.

Background behavior can also be customized globally with `backgroundTransition`. For larger motion-heavy decks, the docs also cover parallax backgrounds through `parallaxBackgroundImage`, `parallaxBackgroundSize`, `parallaxBackgroundHorizontal`, and `parallaxBackgroundVertical`.

```html
<section
  data-background="assets/image2.png"
  data-background-size="100px"
  data-background-repeat="repeat"
  data-background-color="#111"
>
  <h2>Tiled background image</h2>
</section>
```

### Layout helpers

| Helper | Use |
| --- | --- |
| `r-stack` | Layer items on top of each other |
| `r-fit-text` | Auto-size text to fill available width |
| `r-stretch` | Stretch one direct child to fill remaining height |
| `r-hstack` | Lay items out horizontally with flexbox |
| `r-vstack` | Lay items out vertically with flexbox |
| `r-frame` | Add a framed treatment around an element |

`examples/layout-helpers.html` shows these helpers in combination rather than isolation.
The same helper stylesheet also exposes alignment utilities such as `items-start`, `items-center`, `justify-start`, `justify-center`, and `justify-between`, which the official examples combine with `r-hstack` and `r-vstack`.

`r-stretch` has a strict limitation: it only works on one direct child of the slide.

`examples/layout-helpers.html` also shows two strong combinations:

- `r-stack` pairs naturally with `fragment fade-in-then-out` when you want one visual slot that changes over time.
- `r-hstack` and `r-vstack` work well with `data-auto-animate` when you want cards, labels, or chips to reflow between steps.

### Media behavior

The `examples/media.html` deck covers regular iframes, background iframes, video, background video, and audio in one place.

- Use `data-src` for lazy-loaded media.
- Use `data-autoplay` for per-element autoplay.
- `autoPlayMedia` lets you force autoplay on, force it off, or defer to per-element settings.
- Use `data-preload` when you want iframes preloaded before they become active.
- Embedded iframes receive `slide:start` and `slide:stop` messages as the deck enters or leaves the slide.
- Regular slide iframes can use `data-autoplay` too, not just audio and video elements.
- `data-background-interactive` makes a background iframe interactive instead of decorative only.
- `data-background-video-muted` is useful for silent motion backgrounds, including scroll-view decks.
- Audio elements can live inside fragments and auto-play when those fragments are revealed.
- Add `data-ignore` if you do not want reveal.js to pause or resume a media element automatically.
- reveal.js automatically pauses media when the slide exits unless configured otherwise.

### Preview overlays and lightbox

The `examples/lightbox.html` deck is the clearest reference for opt-in previews.

- `data-preview-image`, `data-preview-video`, and `data-preview-link` can be attached to images, videos, or links.
- `data-preview-fit="contain|cover"` controls how media is scaled inside the overlay.
- `previewLinks: false` disables automatic iframe previews so only explicitly marked elements open overlays.
- `data-preview-link="false"` turns previewing off for one link even when preview behavior is otherwise enabled.
- Preview attributes can point at a different full-size asset than the visible thumbnail or link target, which is useful for low-res thumbs and high-res overlays.

## Scroll view

Scroll view is an alternate reading mode that turns the deck into a linear document-like flow.

- Set `view: 'scroll'` in config or use `?view=scroll` in the URL.
- Vertical slides are flattened into authored order, so hierarchy becomes linear in this mode.
- `scrollProgress` controls whether progress is shown while scrolling.
- `scrollSnap` can be `mandatory`, `proximity`, or `false`.
- `scrollLayout` lets you choose between a full or compact layout.
- `scrollActivationWidth` controls when scroll view activates automatically on smaller screens.
- `examples/scroll.html` confirms that fragments, auto-animate, code line highlights, gradient backgrounds, image backgrounds, and muted background video all continue to work in scroll mode.
- The scroll demo uses slide-level `data-auto-animate-easing` plus per-element `data-auto-animate-delay` to create staggered scroll-triggered motion.
- It also uses `<script type="text/template">` inside a `<code>` block, which is a handy way to preserve JSX or HTML source without the browser parsing it as real markup.
- Scroll view can therefore be an article-like presentation mode rather than a stripped-down fallback.

## Plugin system

Modern reveal.js expects plugins to be registered in `plugins: []`.

### Built-in plugin families

- `RevealMarkdown`
- `RevealHighlight`
- `RevealNotes`
- `RevealSearch`
- `RevealMath`
- `RevealZoom`

### Important plugin note

The old `dependencies: []` loader is deprecated. Prefer direct imports and `plugins: []`.

### Plugin API reference

- `Reveal.hasPlugin('id')`
- `Reveal.getPlugin('id')`
- `Reveal.getPlugins()`
- `Reveal.registerPlugin(plugin)`

### Custom plugin shape

```js
export default () => ({
  id: 'toaster',
  init: (deck) => {
    deck.addKeyBinding({ keyCode: 84, key: 'T' }, () => {
      deck.shuffle()
    })
  },
  destroy: () => {},
})
```

### Custom plugin guidance

- Export a factory function, not a singleton, if multiple decks may exist on one page.
- `init(deck)` can return a promise if the plugin needs async setup.
- Use `destroy()` for cleanup in long-lived applications.

## JavaScript API and events

### Navigation and slide control

- `Reveal.slide(h, v, f)`
- `Reveal.next()`
- `Reveal.prev()`
- `Reveal.left()`
- `Reveal.right()`
- `Reveal.up()`
- `Reveal.down()`
- `Reveal.navigateFragment()`

### State and structure

- `Reveal.getCurrentSlide()`
- `Reveal.getSlide(h, v)`
- `Reveal.getSlides()`
- `Reveal.getTotalSlides()`
- `Reveal.isFirstSlide()`
- `Reveal.isLastSlide()`
- `Reveal.isOverview()`
- `Reveal.isPaused()`

### Layout and synchronization

- `Reveal.sync()`
- `Reveal.syncSlide()`
- `Reveal.syncFragments()`
- `Reveal.layout()`
- `Reveal.configure()`
- `Reveal.destroy()`

### Events

```js
Reveal.on('ready', (event) => {
  console.log(event.indexh, event.indexv)
})

Reveal.on('slidechanged', (event) => {
  syncSidebar(event.currentSlide)
})

Reveal.on('fragmentshown', (event) => {
  console.log(event.fragment)
})
```

The most useful events in practice:

- `ready`
- `slidechanged`
- `slidetransitionend`
- `fragmentshown`
- `fragmenthidden`
- `resize`
- `autoanimate`

## Internal links, navigation controls, and presentation state

reveal.js supports both declarative in-deck links and full state snapshots.

### Internal links and controls

- Link to a slide by id using `#/slide-id`.
- Link by slide index using `#/2` for a horizontal slide or `#/3/2` for a vertical target.
- Relative controls can be attached to any clickable element with classes such as `navigate-left`, `navigate-right`, `navigate-up`, `navigate-down`, `navigate-prev`, and `navigate-next`.
- Navigation elements automatically receive the `enabled` class when that move is valid from the current slide.
- `data-preview-link` opens supported sites in an iframe lightbox rather than leaving the deck.

### Presentation state

- `Reveal.getState()` returns a snapshot object that captures the current slide position and deck mode.
- `Reveal.setState(state)` restores that snapshot later.
- This is useful for persistence, restoring sessions, or shipping state over the wire to another window or service.
- The state payload includes details such as horizontal index, vertical index, fragment index, pause state, and overview state.

## postMessage and embedded control

If your deck runs in an iframe or controlled environment, reveal.js supports postMessage-based control.

```js
window.postMessage(
  JSON.stringify({ method: 'slide', args: [2] }),
  '*'
)
```

This is preferable to inventing a custom cross-window bridge when reveal's built-in model already fits the use case.

- `postMessageEvents: true` bubbles reveal.js events to the parent window as JSON payloads containing `namespace`, `eventName`, and `state`.
- Getter-style postMessage calls send callback messages back with the method name and returned result.
- `postMessage` and `postMessageEvents` are configured independently, so API exposure and event bubbling can be enabled separately.

## Remote sync and multiplex

The docs also cover remote presentation patterns.

- `Multiplex` is no longer part of core and lives in its own repository: `reveal/multiplex`.
- It is intended for synchronized presenter / audience scenarios.
- Speaker notes can also be paired with the server-side notes tool referenced in the docs: `reveal/notes-server`.

## Speaker view, navigation tools, and export

### Speaker view

- Press `S` to open speaker view.
- Notes can be authored with:
  - `<aside class="notes">...</aside>`
  - `data-notes="..."`
  - Markdown notes with a `Note:` separator
- Timing controls include:
  - `defaultTiming`
  - `totalTime`
  - per-slide `data-timing`
- Remote presenter workflows can also use the companion notes server when you need server-backed notes delivery.

### Navigation helpers

| Shortcut | Purpose |
| --- | --- |
| `G` | Jump to a slide by number or id |
| `?` | Keyboard shortcut overlay |
| `O` or `Esc` | Overview mode |
| `S` | Speaker view |

### PDF export

- Append `?print-pdf` to the deck URL.
- Use Chrome or Chromium for the supported print flow.
- Recommended print settings:
  - Landscape
  - No margins
  - Background graphics enabled
- Useful export options:
  - `pdfMaxPagesPerSlide: 1`
  - `pdfSeparateFragments: false`
  - `showNotes: true` or `'separate-page'`

For automated export workflows, the docs reference `decktape`.

## Slide numbers, visibility, and presentation size

These three docs work together because they all affect how the deck feels in delivery.

### Slide numbers

- Set `slideNumber: true` to show slide numbers.
- Built-in formats include `h.v`, `h/v`, `c`, and `c/t`.
- You can provide a custom slide number generator function if the built-ins do not fit your numbering model.
- `showSlideNumber` controls context and supports `all`, `print`, and `speaker`.

### Slide visibility

- `data-visibility="hidden"` removes a slide from the DOM once reveal.js initializes.
- `data-visibility="uncounted"` keeps the slide navigable while excluding it from progress and numbering.
- Uncounted slides only work correctly when they sit at the end of the deck.

### Presentation size

- The authored canvas is controlled by `width`, `height`, `margin`, `minScale`, and `maxScale`.
- `center: false` disables the default vertical centering behavior.
- Embedded decks size themselves from the `.reveal` root, not the full viewport.
- If an embedded container changes size for reasons other than a normal window resize, call `Reveal.layout()` manually.

## React integration

The official docs now cover `@revealjs/react` as the React-first integration path for reveal.js 6.

### Install

```bash
npm i @revealjs/react reveal.js react react-dom
```

### Example

```tsx
import { Deck, Slide, Fragment, Code } from '@revealjs/react'
import RevealHighlight from 'reveal.js/plugin/highlight'

<Deck
  config={{ hash: true, slideNumber: 'c/t' }}
  plugins={[RevealHighlight]}
  onSlideChange={(event) => console.log(event.indexh)}
>
  <Slide>
    <h2>Hello reveal.js</h2>
    <Fragment asChild>
      <p>Fragments work in React too.</p>
    </Fragment>
  </Slide>
</Deck>
```

### Key React points

- Components include `Deck`, `Slide`, `Fragment`, `Code`, and `Markdown`.
- Event props mirror reveal.js lifecycle hooks.
- `useReveal()` gives access to the deck instance inside the tree.
- `deckRef` supports imperative access from outside the tree.
- The `plugins` prop is initialization-only, so define plugins before first mount.

## Upgrading and legacy React setups

### Upgrading between major versions

- reveal.js 6 renamed the ES module build from `.esm.js` to `.mjs`.
- Plugin assets for direct HTML or CDN use moved into `dist/plugin/`.
- npm CSS imports no longer use `reveal.js/dist/...`; use top-level paths like `reveal.js/reveal.css` and `reveal.js/theme/black.css`.
- TypeScript types are bundled in reveal.js 6, so `@types/reveal.js` should be removed.
- reveal.js 4 moved core assets into `dist/`, switched modern plugin registration to `plugins: []`, and moved Multiplex plus Notes Server out of core.
- Older code using `Reveal.navigateTo` should migrate to `Reveal.slide`.

### React before reveal.js 6

- Before `@revealjs/react`, the manual setup pattern was to initialize reveal.js from React with refs and a guarded `useEffect`.
- The key rule is to initialize once, keep a handle on the deck instance, and destroy it on unmount.
- This manual path is still valid for edge cases, but the official `@revealjs/react` package is the preferred starting point for new projects.
- The legacy docs also recommend React Portals if you only need to inject a few React components into an otherwise plain reveal.js deck.

## Version-sensitive notes

Some features in the docs are version-specific:

| Feature | Note |
| --- | --- |
| Scroll view | Introduced in 5.0 |
| Lightbox previews | Introduced in 5.2 |
| `@revealjs/react` | Tied to reveal.js 6 |
| `Reveal.destroy()` | Available in 4.3+ |
| Jump to Slide | Introduced in 4.5 |
| `data-visibility="hidden"` | Introduced in 4.1 |
| MathJax 4 plugin | Introduced in 6.0 |

When copying old snippets from blogs or older decks, verify they still match the plugin model and version you are using.

## Important gotchas

- External Markdown does not work reliably from `file://`; use a server.
- `dependencies: []` is deprecated; use `plugins: []`.
- Multi-deck pages require `embedded: true`.
- `r-stretch` only works on one direct child.
- Scroll view flattens vertical slides into a linear flow.
- Lightbox iframe previews can fail if the target site blocks framing with CSP or `X-Frame-Options`.
- The math plugins default to CDN-backed KaTeX or MathJax, which matters for offline or locked-down environments.
- `data-visibility="uncounted"` is only safe when used at the end of the deck.
- PDF export is documented primarily for Chrome / Chromium.

## Practical checklist

Use this as a default reveal.js implementation checklist:

1. Choose HTML, Markdown, or React authoring up front.
2. Import `reveal.css`, one theme, and only the plugins you need.
3. Enable `hash: true` and set the deck's navigation / slide number behavior explicitly.
4. Decide whether the deck is fullscreen, embedded, or multi-instance.
5. Use fragments and auto-animate intentionally, not everywhere.
6. Prefer `data-id` for any important animation pairing.
7. Validate speaker notes, jump-to-slide, and PDF export before presenting.
8. If using advanced features, confirm their reveal.js version and browser constraints.

## Short recommendation

For most teams, the best default stack is:

- `reveal.js` or `@revealjs/react`
- explicit ES module imports
- `plugins: []`
- `hash: true`
- a local dev server
- minimal custom CSS on top of a built-in theme

That path matches the direction of the current official docs and avoids most legacy pitfalls.
