# @16w/ui

Reusable React components for Next.js and other React applications.

## Requirements

- React 18 or 19
- Node.js 20+
- pnpm or npm

## Development

```bash
pnpm install
pnpm build
```

The build produces ESM JavaScript, TypeScript declarations and `dist/styles.css`.

## Use in Next.js

Install the package:

```bash
pnpm add @16w/ui
```

Import the stylesheet once, normally in `app/layout.tsx`:

```tsx
import "@16w/ui/styles.css";
```

Then import components.

## Versioning

Use semantic versioning. Bump `version` in `package.json` before publishing:

- patch: bug fixes
- minor: backwards-compatible components/features
- major: breaking changes
