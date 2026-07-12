# VeraMcCormick.com

Static project library for Vera's stories, tools, games, and learning materials.

## Structure

- `index.html` - portal landing/dashboard.
- `content.js` - library registry. Add new items here.
- `stories/` - storybooks and printable HTML.
- `tools/` - standalone family tools.
- `games/` - standalone games.
- `learning/` - educational pages and references.
- `assets/` - images and shared files.

## Add a new item

1. Drop the standalone HTML into the right folder, usually as `section/slug/index.html`.
2. Add one item to `content.js` with `title`, `category`, `description`, and `href`.
3. Test `index.html` locally.
4. Commit and push.

The site currently includes `robots.txt` and a `noindex` meta tag so search engines do not index the child-name domain while the project is young.
