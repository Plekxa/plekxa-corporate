# Build notes

The project structure and source files were checked and packaged as Plekxa Corporate Website v2.0.

A complete `next build` could not be run in the packaging environment because the internal npm mirror returned a 404 for the transitive package `zod-validation-error@4.0.2` during `npm ci`. This is an environment/package-mirror issue rather than a reported application compile error.

Run locally:

```bash
npm install
npm run build
```
