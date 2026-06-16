# Eran Sery - Portfolio

Personal portfolio website for **Eran Sery**, Principal Platform Engineer. Built with static HTML, CSS, and JavaScript - deployed on GitHub Pages.

**Live site:** `https://ranser102.github.io/eransery-cv/` (after deployment)

## Content source

**`assets/Eran-Sery-CV.pdf` is the source of truth** for resume content (experience, skills, education, certifications).

The site does not read the PDF at runtime. Resume content is copied into:

| File | What it powers |
|------|----------------|
| `index.html` | Portfolio sections (About, Experience, Skills, etc.) |
| `cv.md` | Markdown copy of the resume |
| `assets/resume.html` | Browser/print version |
| `assets/Eran-Sery-CV.pdf` | Direct PDF download |

The **Projects** section is supplementary (GitHub repos and LNS IT work) and is not in the PDF.

When you update your resume:

1. Replace `assets/Eran-Sery-CV.pdf`
2. Sync `index.html`, `cv.md`, and `assets/resume.html` to match
3. Commit and push

## Project Structure

```
eransery-cv/
├── index.html          # Main portfolio page
├── styles.css          # Dark theme, responsive styles
├── script.js           # Navigation, scroll effects, form handling
├── cv.md               # Resume copy (sync with PDF)
├── assets/
│   ├── Eran-Sery-CV.pdf  # Source of truth (resume PDF)
│   ├── favicon.svg     # Site favicon
│   └── resume.html     # Print-ready HTML resume
└── README.md
```

## Local Development

No build step or dependencies required.

### Option 1: Open directly

```bash
open index.html
```

### Option 2: Local HTTP server (recommended)

Using Python:

```bash
cd eransery-cv
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Using Node.js:

```bash
npx serve .
```

## GitHub Pages Deployment

### First-time setup

1. **Create a GitHub repository** named `eransery-cv` under your account (`ranser102`).

2. **Push this project** to the repository:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin git@github.com:ranser102/eransery-cv.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** in the repository settings:
   - Go to **Settings → Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click **Save**

4. **Wait 1–2 minutes**, then visit:
   `https://ranser102.github.io/eransery-cv/`

### Custom domain (optional)

1. Add a `CNAME` file to the repo root with your domain (e.g. `eransery.dev`).
2. Configure DNS with a CNAME record pointing to `ranser102.github.io`.
3. Enable **Enforce HTTPS** in GitHub Pages settings.

### Updating the live site

Every push to `main` automatically redeploys GitHub Pages:

```bash
git add .
git commit -m "Update experience section"
git push
```

## How to Update Content

| What to change | Where to edit |
|----------------|---------------|
| Hero name, title, tagline | `index.html` → `#hero` section |
| About / education | `index.html` → `#about` section |
| Professional summary cards | `index.html` → `#summary` section |
| Work experience | `index.html` → `#experience` section **and** `cv.md` |
| Skills & highlights | `index.html` → `#skills` section **and** `cv.md` |
| Certifications | `index.html` → `#certifications` section **and** `cv.md` |
| Projects | `index.html` → `#projects` section **and** `cv.md` |
| Social links (LinkedIn, GitHub, Medium) | `index.html` → hero, contact sections |
| Print-ready resume | `assets/resume.html` **and** `assets/Eran-Sery-CV.pdf` |
| Colors, fonts, layout | `styles.css` |
| Animations, nav behavior | `script.js` |

**Tip:** Keep `assets/Eran-Sery-CV.pdf`, `index.html`, `cv.md`, and `assets/resume.html` in sync when updating experience or skills.

### Export resume as PDF

1. Open `assets/resume.html` in a browser, or download `assets/Eran-Sery-CV.pdf` directly.
2. Click **Print / Save as PDF** (or use Cmd+P / Ctrl+P).
3. Choose **Save as PDF**.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Google Fonts (Inter, JetBrains Mono)
- No frameworks, no build tools, no backend
- GitHub Pages compatible

## Author

**Eran Sery** - [LinkedIn](https://linkedin.com/in/eran-sery-devops-enabler) · [GitHub](https://github.com/ranser102) · [Medium](https://medium.com/@ranser102)
