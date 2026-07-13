# Recipe Page Style Normalization Design

## Goal

Make the recipes index and every recipe detail page visually consistent with the homepage, while preserving existing recipe content, routes, images, and metadata.

## Design

Extract the homepage's page shell and header styling into shared components. The shared shell will provide the 760px maximum content width, centered layout, responsive padding, Georgia body typography, 18px desktop / 17px mobile sizing, 1.6 line-height, black text, and blue underlined links. The shared header will provide the 24px regular-weight page title, 8px title-to-navigation spacing, and compact Arial navigation with 12px gaps.

The recipes index and recipe detail pages will consume the shared shell/header. Recipe-specific styling remains local: the recipe grid and card image/title treatment stay on the index page; the recipe image, ingredient/instruction columns, lists, amounts, and section headings stay on the detail component. This keeps content-specific layout concerns separate while removing duplicated site-wide rules.

The existing standalone `Header` and `Footer` components will only be removed or consolidated if repository usage confirms they are dead code; no visible footer will be added to recipe pages as part of this change because the homepage does not currently render one.

## Validation

- Run `npm run build` to verify TypeScript compilation and production bundling.
- Search the route components to confirm all recipe routes render through the shared shell/header.
- Inspect the rendered build or run the app locally and check desktop/mobile layout for `/`, `/recipes`, and a recipe detail route.

## Non-goals

- No recipe copy, ingredients, instructions, image assets, route paths, or SEO metadata changes.
- No new visual design beyond matching the homepage's established rules.
