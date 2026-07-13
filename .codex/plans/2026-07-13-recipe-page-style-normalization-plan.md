# Implementation Plan: Recipe Page Style Normalization

## Context

The homepage and recipe pages currently duplicate the same visual shell in separate `styled-components` definitions. The recipe pages already resemble the homepage, but future homepage changes can drift because the styles are not shared. The app uses React 18, TypeScript, React Router, and styled-components.

## Steps

1. Add a shared site-layout module under `src/components/` containing reusable page-shell and site-header styled components. Preserve the homepage's current values exactly: max width, padding breakpoints, Georgia typography, link color/decoration, title sizing, and navigation treatment.
2. Update `src/pages/Home/index.tsx` to consume the shared shell/header without changing its copy, links, metadata, or responsive behavior.
3. Update `src/pages/Recipes/index.tsx` to consume the shared shell/header and retain only recipe-grid/card-specific styles locally.
4. Update `src/components/RecipePage.tsx` to consume the shared shell/header and retain only recipe-detail-specific styles locally.
5. Search for usages of the legacy `Header` and `Footer` components. If unused, remove only dead code and imports; do not add a footer to any page as part of this task.
6. Run `npm run build`; fix only issues caused by the refactor. Run targeted searches to verify all recipe route components use the shared shell and no duplicated site-shell definitions remain.

## Files expected to change

- `src/components/SiteLayout.tsx` (new shared shell/header)
- `src/pages/Home/index.tsx`
- `src/pages/Recipes/index.tsx`
- `src/components/RecipePage.tsx`
- Possibly `src/components/Header.tsx` / `src/components/Footer.tsx` if confirmed unused

## Validation

- `npm run build`
- `rg "const Page = styled\.main|const Header = styled\.header" src`
- `rg "SitePage|SiteHeader" src/pages src/components`
- Manual/local review of `/`, `/recipes`, and `/recipes/<recipe-id>` at desktop and mobile widths.

## Risk controls

- Keep all recipe data and route definitions unchanged.
- Keep page-specific layout CSS in place while extracting only identical site-wide rules.
- Compare the shared component values against `Home/index.tsx` before deleting duplicates.
