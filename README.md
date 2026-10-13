# Personal Portfolio Website

A responsive, custom-coded, minimal editorial portfolio built with HTML, CSS and vanilla JavaScript. No build tools or paid services are required.

## Files
- `index.html` — page content, project case studies, experience, toolkit and contact section
- `styles.css` — responsive design and visual styling
- `script.js` — mobile navigation, project filters and current year
- `assets/` — place your resume PDF and any approved project screenshots here

## Before publishing
1. Open `index.html` in a browser and review the full page.
2. Replace the placeholder contact details and social links at the bottom of `index.html`.
3. Add a resume PDF in `assets/` and link it with a visible “Download résumé” link.
4. Review every project description. Keep only claims you can substantiate; add verified dates, deliverables and results where you have evidence.
5. Replace the generic page title and meta description with your preferred name and headline.
6. Add only images you own or have permission to use. The current project visuals are CSS illustrations, so no image assets are required.

## Preview locally
Double-click `index.html`, or run a local server from this folder:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account at https://github.com/.
2. Create a new public repository, for example `portfolio`.
3. Upload `index.html`, `styles.css`, `script.js` and the `assets` folder (if used) to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the URL shown on the Pages settings screen.

Alternative: Netlify can publish a static folder by drag-and-drop at https://app.netlify.com/drop. Sign in first, then drag the extracted folder into the drop zone. Verify the published URL and test mobile layout.

## Honest portfolio note
The website intentionally does not invent company dates, job titles beyond the information available, performance statistics or shipped AI capabilities. Confirm details before making the site public.
