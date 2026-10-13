# Prajwal M — React + Tailwind Portfolio

A responsive white/black developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, Lucide, and React Icons.

## 1. Requirements
- Node.js LTS installed
- VS Code
- Internet connection for remote images and Google Fonts

## 2. Run locally
Open this folder in VS Code, then open the terminal (**Terminal → New Terminal**) and run:

```bash
npm install
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`. Open that URL in your browser.

To create a production build:
```bash
npm run build
npm run preview
```

## 3. Add your own photo
1. Put a suitable portrait photo in `public/images/`.
2. Name it `prajwal.jpg`.
3. The About section already points to `/images/prajwal.jpg`.
4. Replace the temporary fallback portrait logic in `src/sections/About.jsx` if you want no fallback.

## 4. Add your resume
Put your PDF at `public/resume.pdf`. The Home button links to that path.

## 5. Configure contact links
Edit `src/data.js`:
- Replace `https://wa.me/91YOURNUMBER` with your WhatsApp destination (country code and digits, no `+` or spaces).
- Replace `mailto:YOUR_EMAIL@example.com` with your actual email destination.
- Phone/email are not displayed as visible text. Their href destinations are still inspectable in a static site.
- There is no Call Me button or `tel:` link.

## 6. Set exact project GitHub URLs
In `src/data.js`, replace each `github` field under `projects` with the exact repository URL for MedTrack, ClickQueue, and SmartCampus. Current starter values point to the profile because exact repository URLs were not supplied. Set `demo` to a real deployed URL when one exists; leave it empty otherwise.

## 7. Update your skills and project data
Edit `src/data.js`. Skills use icon keys mapped in `src/components/SkillIcon.jsx`. Add or remove skill entries to reflect your actual experience.

## 8. Images
Hero and project images currently use remote Unsplash URLs. For production, ensure you have permission to use selected images or replace them with local images under `public/images/`, then update the URLs in `src/sections/Home.jsx` and `src/data.js`.

## 9. Main files
- `src/App.jsx`: page composition, footer, back-to-top.
- `src/data.js`: profile, links, skills, project content.
- `src/components/Navbar.jsx`: responsive navigation.
- `src/components/Reveal.jsx`: scroll reveal animation.
- `src/components/SkillIcon.jsx`: technology logos.
- `src/sections/Home.jsx`: home hero, workspace image, CTA and social links.
- `src/sections/About.jsx`: portrait and personal details.
- `src/sections/Skills.jsx`: icon grid.
- `src/sections/Projects.jsx`: project images and GitHub/demo buttons.
- `src/sections/Contact.jsx`: WhatsApp, email, LinkedIn, GitHub and location.
- `src/index.css` and `tailwind.config.js`: styling.

## 10. Before publishing
- Replace contact placeholders.
- Add your own profile photo and resume.
- Confirm project repository links and descriptions.
- Run `npm run build` and fix any errors.
- Test desktop and mobile widths.
