# Cybernet Computers - Deployment Guide

## Local Development
```bash
# Install
npm install

# Dev server -> http://localhost:3000
npm run dev

# Production build
npm run build
```

## Deploy to Netlify (Recommended)

### Drag & Drop (fastest)
1. Run: npm run build
2. Go to: https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page
4. Live instantly!

### Git CI/CD
1. Push project to GitHub
2. netlify.com -> New Site -> Import from GitHub
3. Build command: npm run build, Publish: dist
4. Auto-deploys on every git push

## Deploy to Vercel
1. Push to GitHub
2. vercel.com -> New Project -> Import repo
3. Vite is auto-detected. Click Deploy.

## Update Business Info
Edit ONE file: src/data/config.js
- Update phone, address, hours, Maps link
- IMPORTANT: Update links.googleReviews when you have a direct Google review URL

## Add New Photos
1. Copy image to public/images/
2. Add entry to gallery array in src/data/config.js

## Final Checklist
[x] Build passes - dist/ folder is ready for deployment
[x] All images load (logo, interior, banner, signboard, business card)
[x] Favicon set from official logo
[x] Mobile menu works, smooth scroll works
[x] Gallery lightbox with keyboard navigation (Esc/Arrows)
[x] Call, WhatsApp, Email, Directions buttons all functional
[x] No fake reviews or fabricated info
[x] Landline 04734 221204 in Contact & Footer
[x] JSON-LD LocalBusiness Schema, Open Graph meta tags
[x] No horizontal overflow at any breakpoint