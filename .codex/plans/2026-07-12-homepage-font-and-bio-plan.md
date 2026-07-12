# Homepage Font and Bio Implementation Plan

## Objective

Create an isolated local preview of the approved homepage bio using a Helvetica Neue light system stack while preserving the current layout, navigation, and links.

## Gotchas to Avoid

- The package's `npm run build` script ends with the Windows-only `copy` command, so use `npx react-scripts build` for portable local build validation.
- The reference site's bare `HelveticaNeue-Light` family is not reliably available on every visitor's device; use `"Helvetica Neue", Helvetica, Arial, sans-serif` with a light font weight.
- Keep both React-managed metadata and the fallback metadata in `public/index.html` aligned with the new bio.

## Patterns Applied

- Continue using the existing `styled-components` definitions in `src/pages/Home/index.tsx`.
- Reuse the existing `ExternalLink` markup and PDF imports for Akuna, cardiac tissue, and disease modeling.
- Update the existing homepage render test rather than adding a new test file.

## Validation Methodology

**Primary validation:** Run the homepage test non-interactively.

**Expected result:** The test exits successfully and finds the new `Hi, I'm CHRIS SHEN` heading and consolidated biography.

**Validation command:**

```bash
npm test -- --watchAll=false
```

**Why this validates the feature:** The existing test renders the routed React application, so updating it to assert the heading and bio confirms the homepage wiring and content.

**Additional validation:**

```bash
npx react-scripts build
```

Expected result: a production bundle is generated with no TypeScript or compilation errors.

## PR Stack

| PR | Branch | Steps | Description |
|----|--------|-------|-------------|
| 1 | `feat/homepage-font-bio` | 1–3 | Update homepage content, typography, metadata, and test coverage |

## Implementation Steps

### Step 1: Update the Homepage Content and Typography

**File:** `src/pages/Home/index.tsx`

**Changes:**

- Change the heading to `Hi, I'm CHRIS SHEN`.
- Consolidate the biography into one paragraph using the approved copy.
- Keep the recipes, LinkedIn, and email navigation unchanged.
- Preserve inline links for Akuna, cardiac tissue, and disease modeling.
- Remove unused links/imports for companies no longer named in the biography.
- Switch the page to the Helvetica Neue system stack at weight 400.
- Increase the body to 26px, heading to 38px, navigation to 17px, and mobile body to 23px.
- Left-align the heading, navigation, and biography.
- Use a 75% viewport width capped at 1050px, with full available width on mobile.
- Tighten line height to 1.25 and use `#5e5e5e` text with `#222222` links.
- Replace the route meta description with a concise version of the current bio.

### Step 2: Align Fallback Metadata and Render Assertions

**Files:**

- `public/index.html`
- `src/App.test.tsx`

**Changes:**

- Update default, Open Graph, and Twitter descriptions to match the new positioning.
- Update the existing homepage test for the new heading.
- Assert that the consolidated biography renders as one paragraph.

### Step 3: Validate and Start the Preview

**Verification:**

- Run `npm test -- --watchAll=false` and confirm all tests pass.
- Run `npx react-scripts build` and confirm compilation succeeds.
- Start the development server on an available local port.
- Confirm the page responds over HTTP and share the preview URL.
- Visually inspect desktop and mobile widths in the local browser if browser automation is available.

## Key Decisions

- Use a Leo-inspired but left-aligned option: wider, tighter, larger, and softer gray while retaining the site's existing navigation and copy.
- Use a portable Helvetica Neue stack rather than loading or bundling a new webfont.
- Keep all current navigation links and the relevant inline research/employer links.
- Present the biography as a single continuous paragraph.

## Remaining Unknowns

- Helvetica Neue availability varies by operating system; the fallback stack is expected and intentional.
- Final subjective font weight can be adjusted after the user reviews the local preview.

## Testing Strategy

- [ ] Homepage render test checks the new heading and single biography block.
- [ ] Production compilation succeeds.
- [ ] Local preview responds successfully.
- [ ] Manual desktop/mobile visual review confirms the font weight and readability.
