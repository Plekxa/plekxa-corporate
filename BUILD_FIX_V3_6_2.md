# Build fix v3.6.2

- Moved `publicEntertainmentLinks` and `HeaderLink` out of the client-only `MarketingHeader` module into `lib/navigation.ts`.
- Prevents the server-rendered `SiteChrome` component from receiving a client-module proxy instead of the navigation array.
- Fixes `TypeError: publicEntertainmentLinks.map is not a function` during prerendering of `/_not-found`, `/music`, and other routes.
