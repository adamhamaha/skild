<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Skild TanStack Start project.

## Changes made

### New files
- **`src/utils/posthog-server.ts`** — Singleton server-side PostHog client (using `posthog-node`) for future API route tracking.

### Modified files
- **`src/routes/__root.tsx`** — Wrapped the app with `PostHogProvider` (from `@posthog/react`), enabling automatic pageview tracking, session replay, and error capture across all routes.
- **`src/routes/index.tsx`** — Added `homepage_viewed` (funnel entry), `browse_registry_clicked`, and `publish_skill_clicked` event tracking.
- **`src/components/SkillCard.tsx`** — Added `skill_install_command_copied`, `skill_upvoted`, `skill_opened`, and `skill_bookmarked` event tracking.
- **`src/components/Navbar.tsx`** — Added `sign_in_clicked` event tracking.
- **`vite.config.ts`** — Added PostHog reverse proxy for `/ingest`, `/ingest/static`, and `/ingest/array` to improve reliability and avoid ad-blockers.
- **`.env`** — Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables.

## Instrumented events

| Event | Description | File |
|-------|-------------|------|
| `homepage_viewed` | User views the homepage hero — top of conversion funnel | `src/routes/index.tsx` |
| `browse_registry_clicked` | User clicks "Browse Registry" CTA on the homepage | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks "Publish Skills" CTA on the homepage | `src/routes/index.tsx` |
| `skill_install_command_copied` | User copies a skill's install command | `src/components/SkillCard.tsx` |
| `skill_upvoted` | User clicks the upvote button on a skill card | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks the Open link to view a skill | `src/components/SkillCard.tsx` |
| `skill_bookmarked` | User clicks the bookmark/save button on a skill card | `src/components/SkillCard.tsx` |
| `sign_in_clicked` | User clicks the Sign In button in the navbar | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/396570/dashboard/1510873
- **Homepage → Registry Conversion Funnel**: https://us.posthog.com/project/396570/insights/BC81X6wP
- **Skill Install Commands Copied (Daily)**: https://us.posthog.com/project/396570/insights/sKKcc1uj
- **Skill Engagement Actions (Daily)**: https://us.posthog.com/project/396570/insights/YvNoPhqQ
- **Sign-In Clicks (Daily)**: https://us.posthog.com/project/396570/insights/o7auocus
- **Publish Skill vs Browse Registry CTA Clicks**: https://us.posthog.com/project/396570/insights/Ijcb3Bu4

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
