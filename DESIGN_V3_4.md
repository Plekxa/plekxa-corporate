# Plekxa Corporate v3.4

Homepage additions:
- Shows horizontal rail
- Movies poster rail
- Final full-width promotional banner

CMS behaviour:
- Published `cms_articles` categorised as Movie/Film/Cinema populate Movies.
- Published `cms_articles` categorised as Show/Series/Programme/Live/Theatre populate Shows.
- The final promotion is controlled by a published `cms_homepage_sections` record with `section_key` set to `promo`.
- Presentational fallback content is shown until those CMS records are published.
