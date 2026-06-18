# Warrimoo Blog

The blog for [warrimoo.net](https://warrimoo.net), hosted at **blog.warrimoo.net**.

Built with [Jekyll](https://jekyllrb.com/) and deployed via [GitHub Pages](https://pages.github.com/).

## Writing a new post

1. Create a file in `_posts/` named `YYYY-MM-DD-your-post-title.md`
2. Add front matter:

```yaml
---
title: "Your Post Title"
subtitle: "An optional subtitle"
date: 2026-06-18
categories: [AI]
tags: [ai, llm, your-tags]
image: /assets/img/your-image.jpg  # optional hero image
---
```

3. Write your post in Markdown below the front matter
4. Commit and push — GitHub Pages builds and deploys automatically

### Drafts

Put work-in-progress posts in `_drafts/` (no date prefix needed). They won't be published until you move them to `_posts/` with a date.

## Categories in use

- **AI** — artificial intelligence, machine learning, LLMs
- **Engineering** — software development, architecture, tools
- **General** — announcements, thoughts, everything else

## Local development

```bash
gem install bundler
bundle install
bundle exec jekyll serve --drafts
```

Then visit `http://localhost:4000`.

## DNS setup

Add a CNAME record in your DNS provider:

```
blog.warrimoo.net → warrimoos.github.io
```

Then enable GitHub Pages in the repo settings with the custom domain `blog.warrimoo.net`.

## Design

Matches the main Warrimoo site design system:
- Fonts: Fredoka (display) + Cabin (body) + JetBrains Mono (code)
- Palette: sand/cream backgrounds, ink/ocean/lagoon accents, coral highlights
- Claymorphic card style with soft shadows
