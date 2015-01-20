# Icon Font Instructions

1. Go to http://icomoon.io/app
2. Click "↻ Reset" in the bottom right.
3. Click "Import Icons"
4. Go to icon folder, select all icons
5. Click "Okay"
6. In Icomoon, click "Font →" button
7. Under "Preferences" set name to "rmn-iconfont"
8. Click "Download" button
9. Replace contents of `fonts/rmn-iconfont/` folder with contents of new Icomoon generated iconfont (`style.css`, `index.html`, `fonts/`` directory, etc).
10. Copy contents of `fonts/rmn-iconfont/style.css` in to `sass/_icon-font.scss` nested in a `.fontface` (progressively enhanced) class.
11. If new icons added, provide suitable fallback (only if necessary).