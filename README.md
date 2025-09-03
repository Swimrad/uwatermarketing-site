# Underwater Marketing – Youth Sports Website

This repository contains a Next.js site styled with Tailwind CSS. The design projects a high‑end, billion‑dollar brand ethos for youth‑sports operators. It avoids overt sales hooks and instead focuses on authority, storytelling and generous white space.

## Project Structure

```
├── components/        # Navbar and footer
├── pages/             # Home, About, Case Study, Contact
├── styles/            # Global styles loaded via Tailwind
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration using Underwater Marketing palette
├── postcss.config.js  # PostCSS config (Tailwind + autoprefixer)
└── package.json       # Scripts and dependencies
```

### Pages

- **Home** – Hero headline with call‑to‑action to book a call via GoHighLevel calendar (opens in a modal). Three columns highlight the benefits of working with us.
- **About** – Tells the story of the brand, mission and values.
- **Case Study** – Demonstrates impact through narrative. Replace with your own success story.
- **Contact** – Contains a contact form embed from GoHighLevel.

## Setup and Development

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`. Visit [http://localhost:3000](http://localhost:3000).
3. Build for production with `npm run build`.

## Deploying to Netlify

- Connect this repository to Netlify.
- Use **Build command:** `npm run build`
- Use **Publish directory:** `.next`
- Netlify will install dependencies and build the site. You will receive a staging URL.

## Customising the Brand

The project uses Underwater Marketing’s colour palette defined in `tailwind.config.js`:

- Deep Ocean Blue: `#003A70`
- Electric Teal: `#00D4FF`
- Clean White: `#FFFFFF`
- Charcoal Grey: `#2B2B2B`
- Performance Green: `#00C853`

To adjust:

1. Edit `tailwind.config.js` if you want to tweak the colours or add new shades.
2. Replace the `Underwater Marketing` text in `components/Navbar.js` and `components/Footer.js` with your logo or brand name. You can import an image and render it with the `next/image` component.
3. The Google Font Inter is loaded in `pages/_app.js`; swap for another font if desired by editing that file and updating the `fontFamily` in `tailwind.config.js`.
4. Paste your GoHighLevel calendar embed in `pages/index.js` (ID `ghl-calendar`) and your contact form embed in `pages/contact.js` (ID `ghl-contact-form`). A chat widget can be added in `_document.js`.

## Competitor Analysis

We analysed three leading youth‑sports platforms: **LeagueApps**, **RCX Sports** and **TeamSnap**. These sites prioritise registration and product features, which can feel transactional or cluttered. Our site improves on:

1. **Branding & Visual Hierarchy** – Competitors often crowd the hero with registration buttons and feature lists. We use a bold headline, minimalist navigation and generous white space to create an aspirational feel. Calls‑to‑action open modals rather than dominating the page.

2. **Storytelling** – Instead of listing features or statistics, we tell a story about why the company exists and how it helps organisations thrive. This narrative approach builds trust and positions the brand as a strategic partner rather than just another software vendor.
