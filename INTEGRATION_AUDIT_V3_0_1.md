# Plekxa Corporate Website v3.0.1 integration audit

## Database-backed areas
- Homepage hero and purpose sections: `cms_homepage_sections`
- Newsroom listing and article pages: `cms_articles`
- Careers listing: `cms_jobs` (`open` or `published`, excluding expired roles)
- Company page and leadership: `cms_pages` + `cms_leadership`
- Events: `cms_events`
- Header/footer navigation: `cms_navigation`
- Footer identity/contact settings: `cms_settings`
- Contact submissions: `support_requests`

## Route audit
All static internal links resolve to an existing application route. Dynamic newsroom links resolve through `/newsroom/[slug]`.

## Publishing controls
Draft, archived, paused, closed and future/ineligible records are not exposed by the relevant public queries.
