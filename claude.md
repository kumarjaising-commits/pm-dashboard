# Claude Integration

## Status
**Disabled — "Coming soon".** The dashboard ships with no AI integration and no API keys.

- All AI entry points (sidebar/header Assistant, Legal "Talking Points", vessel briefings on Maritime, Fleet Map and mobile) render as disabled "Coming soon" buttons.
- The former integration (`src/lib/claude.js`, `src/components/AIAssistant.jsx`, `api/claude.js` proxy) was removed; recover it from git history if needed.

## Re-enabling (future)
- Call Anthropic only from a server-side function using a non-`VITE_` env var (e.g. `CLAUDE_API_KEY`). `VITE_*` variables are bundled into the browser and would expose the key.
- Restrict the server route (auth and/or origin) so it can't be used as an open proxy.
- Never commit secrets to source control.
