# CLAUDE.md — Modern Pixel Editorial Portfolio

## 1. Project Goal

Build a personal developer portfolio using **Modern Pixel Editorial** as its visual direction.

The website must feel creative, contemporary, distinctive, and professionally designed.

This is a portfolio website, **not a game**. Do not add gameplay, character movement, game maps, quests, or game-like navigation.

**Owner-approved exception — the illustration is the navigation.** The site opens on one large pixel scene: an original blocky, Minecraft-inspired character holding a diamond pickaxe, standing on deepslate beside a diamond ore block. Each part is a section with its own page: head → About, pickaxe → Projects, body → Skills, legs → Experience, wooden sign → Contact, ore block → Education. Clicking a part zooms the camera onto it, then opens that section's page, which starts on the same frame before the content rises over it; "Overview" (and the browser's Back) zooms back out. Every part always has a visible text label (labels beside the parts on wide screens, a list of section links on narrow ones), so nothing depends on discovering hotspots. Reduced motion skips the zoom.

**Owner-approved exception — the idle mining loop.** On the overview the miner (side view) keeps slowly mining the diamond ore: the block cracks per hit, breaks with pixel particles, drops a diamond and grows back. Together with the twinkling night sky on the overview (stars and sparkles behind the scene, plus a moon; CSS only, still on section backdrops, off under reduced motion) these are the only perpetual animations allowed. It must pause while a visitor points at or focuses a part, pause when the tab is hidden, stop once a section is opening, and never run under reduced motion. Do not extend this into game mechanics (no movement, quests, scores). Never use Mojang/Minecraft assets, skins, or logos; all art stays original.

The scene is asset- and data-driven: PNG art in `src/assets/scene`, typed manifests and the renderer/animator/camera/navigator modules in `src/scene`. Change the scene through its manifests, not the modules. Conventions, formats and recipes: `docs/scene-assets.md`.

The goal is to combine modern editorial web design with carefully selected pixel-art illustrations.

## 2. Design Direction

### Core Style

- Modern editorial layout with an experimental graphic-design feel.
- Large, expressive typography.
- Asymmetric grids and intentional whitespace.
- Pixel art used as a visual accent, not as the entire interface.
- Clear hierarchy, strong composition, and consistent spacing.
- Minimal but purposeful animations.

### Visual Balance

- 70% modern web design.
- 30% pixel-art visual elements.

These proportions are a creative guideline, not a literal measurement.

### Color Palette

A dark "diamond pickaxe" system: obsidian surfaces, deepslate panels, diamond-cyan accents. Refine only when there is a clear design reason:

| Token | Hex | Usage |
|---|---|---|
| `obsidian-black` | `#101418` | Main page background |
| `deepslate` | `#1B252C` | Cards, secondary sections, elevated surfaces |
| `diamond-cyan` | `#42E8DC` | Primary accent, CTAs, links, key highlights |
| `diamond-teal` | `#187F91` | Pixel art details, secondary accents, hover states |
| `text-primary` | `#F0F5F5` | Primary text on dark surfaces |
| `text-secondary` | `#A7B4BA` | Secondary text, descriptions, metadata |
| `border-subtle` | `#29363D` | Dividers and subtle borders |
| `border-accent` | `#293B43` | Card borders and accent surfaces |
| `control-border` | `#42545C` | Outlines for secondary buttons |

Use diamond-cyan as the one primary accent. Avoid introducing too many unrelated colors (pixel art may add skin tones and the pickaxe's wood brown).

The site is dark by default; there is no light theme.

## 3. Typography

Use a deliberate typographic system:

- Display headings: expressive, bold, contemporary typography.
- Body text: highly readable sans-serif.
- Metadata and labels: compact uppercase typography where appropriate.
- Pixel fonts: use sparingly for small labels, decorative elements, or selected headings.

Do not use pixel fonts for long paragraphs, project descriptions, or other reading-heavy content.

Typography should establish the design identity before decorative effects are added.

## 4. Pixel Art Rules

Use pixel art for:

- Profile avatar or personal mascot.
- Project illustrations and thumbnails.
- Small decorative objects and icons.
- Section dividers and visual accents.
- Occasional animated pixel elements.

Maintain consistent pixel density, proportions, palette, and rendering style.

Prefer crisp edges and intentional pixel placement.

Avoid:

- Random pixel decorations without a design purpose.
- Mixing incompatible pixel-art styles.
- Low-quality or blurry enlarged sprites.
- Excessive retro UI elements.
- Turning the interface into a fake operating system or game.
- Using generic emoji as substitutes for designed illustrations.

Use original assets or properly licensed assets. Do not invent project screenshots or present illustrative artwork as real product screenshots.

## 5. Website Structure

The overview page is the illustration (see the exception in section 1). Every section below lives on its own page (`/about/`, `/experience/`, `/projects/`, `/skills/`, `/education/`, `/contact/`, and the same under `/vi/`). The overview carries the hero's job.

### Hero

- Name and professional title.
- A concise personal introduction.
- A strong visual statement.
- Pixel-art illustration or avatar.
- Clear links to projects, GitHub, LinkedIn, and contact information.

### Selected Projects

- Feature two or three meaningful projects.
- Give each project a distinctive but consistent visual presentation.
- Explain the problem, solution, technical decisions, and outcome.
- Display relevant technologies without overwhelming the layout.
- Use real project details; do not fabricate achievements or metrics.

### Engineering Focus

Show relevant backend engineering capabilities, such as:

- API design and architecture.
- Databases and data modeling.
- Testing and reliability.
- Performance and scalability.
- Infrastructure and developer tooling.

Only include skills that can be supported by actual experience or projects.

### About

Provide a concise professional introduction, background, interests, and career direction.

### Contact

Include relevant professional links and a clear contact method.

### Experience and Education

The CV sections: roles with period, company, scope and real results; degrees, courses and certificates. Only real entries.

The navigation must remain intuitive. Do not require users to discover hidden interactions to access important content.

## 6. Interaction and Motion

Animations should support the design rather than compete with the content.

Preferred effects:

- Subtle pixel transitions.
- Gentle reveal animations.
- Project-card hover states.
- Small illustration movements.
- Smooth but restrained scrolling transitions.

Requirements:

- Respect `prefers-reduced-motion`.
- Keep interactions responsive and accessible.
- Avoid excessive parallax, perpetual animations, and unnecessary WebGL.
- Never sacrifice readability or performance for visual effects.

## 7. Layout and Responsive Design

- Use a consistent spacing system and grid.
- Preserve the editorial composition on desktop.
- Recompose layouts appropriately for mobile rather than simply shrinking them.
- Prevent horizontal overflow.
- Keep navigation, project cards, and contact links usable on touch devices.
- Maintain sufficient contrast and visible focus states.

The website must look intentionally designed at mobile, tablet, and desktop sizes.

## 8. Implementation Principles

Before implementation:

1. Inspect the existing project structure and dependencies.
2. Identify the current framework, styling approach, and reusable components.
3. Define the design tokens and visual system.
4. Establish the page hierarchy and component structure.
5. Implement the main layout before adding decorative details.

During implementation:

- Reuse existing dependencies when practical.
- Avoid adding libraries without a clear benefit.
- Keep components understandable and maintainable.
- Use semantic HTML and accessible interactions.
- Optimize images and animations.
- Avoid unnecessary abstractions and over-engineering.

Do not replace the existing framework or rewrite the project architecture without a concrete reason.

## 9. Design Quality Gate

Before considering a page complete, verify:

- The result clearly reads as Modern Pixel Editorial.
- Pixel art complements rather than overwhelms the layout.
- Typography and spacing establish a strong visual hierarchy.
- The page does not resemble a generic AI-generated template.
- Projects and professional information are easy to scan.
- Mobile and desktop layouts both work correctly.
- Links, interactions, and navigation work.
- Accessibility and performance have not been compromised.
- No placeholder content is presented as factual information.

If browser screenshots or visual inspection tools are available, inspect the rendered page and correct obvious layout or visual problems.

## 10. Decision-Making Rules

When making design decisions, prioritize in this order:

1. Visual coherence.
2. Readability and usability.
3. Distinctive art direction.
4. Accessibility and responsive behavior.
5. Performance and maintainability.
6. Decorative effects.

Do not add a feature simply because it looks trendy.

Prefer a few strong visual decisions over many unrelated effects.

When uncertain, choose the simpler solution that better preserves the Modern Pixel Editorial identity.