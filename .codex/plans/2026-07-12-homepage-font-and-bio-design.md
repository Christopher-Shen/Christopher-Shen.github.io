# Homepage Font and Bio Design

## Goal

Refresh the homepage introduction while preserving the site's current structure and links.

## Approved Direction

- Keep the existing left-aligned homepage layout, navigation, spacing, and link treatment.
- Replace the Georgia homepage typeface with a light Helvetica Neue system stack inspired by Leo Adberg's homepage: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- Keep the current `recipes`, `linkedin`, and `email` navigation.
- Change the heading to `Hi, I'm CHRIS SHEN`.
- Replace the existing three-paragraph biography with one continuous paragraph.
- Preserve inline links for Akuna, cardiac tissue, and disease modeling.

## Approved Copy

> I’m working on probabilistic markets. I was previously a crypto options market maker at Akuna, and graduated from Columbia University with a B.S. in Biomedical Engineering. Before markets, I grew stem cells into cardiac tissue for disease modeling. I like modeling uncertain systems, but have also built software at AI and social startups.

## Responsive Behavior

After reviewing the previews, use normal weight (`400`), left-align the heading, navigation, and bio, and expand the page to 75% of the viewport with a 1050px maximum. Use a tight `1.25` line height, `#5e5e5e` text, and `#222222` links. Increase the scale to a 26px body, 38px heading, 17px navigation, and 23px mobile body. On narrow screens, use the full available width with the existing horizontal padding.

## Validation

- The production build must complete successfully.
- The homepage must render the new heading and exact biography as one paragraph.
- Existing navigation and inline links must remain functional.
- The homepage should be visually inspected at desktop and mobile widths.
