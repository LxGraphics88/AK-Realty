# AK Realty Team Website

A modern, elegant, single-page website for a real estate team, designed to precisely match the provided image, using a Navy Blue, Gold, and White color scheme.

## 🚀 Quick Deployment to GitHub Pages

This project is structured for immediate deployment on **GitHub Pages**.

1.  **Create a New Repository:** On GitHub, create a new repository (e.g., `ak-realty-website`).
2.  **Upload Files:** Upload the four files (`index.html`, `style.css`, `script.js`, and `README.md`), along with your placeholder images, to the **root** of your repository.
3.  **Enable GitHub Pages:**
    * Go to your repository's **Settings** tab.
    * Navigate to **Pages** on the left sidebar.
    * Under 'Build and deployment', select **Deploy from a branch**.
    * Select your primary branch (usually `main` or `master`) and the **`/ (root)`** folder.
    * Click **Save**.
4.  **Access Site:** Your site will be live at the generated URL within a few minutes.

## 🎨 Customization Instructions

### 1. Color Scheme (`style.css`)

The core colors are defined using CSS variables for easy updates. You can modify these in the `:root` block of `style.css`:

| Variable | Description | Current Value |
| :--- | :--- | :--- |
| `--color-navy` | Primary background color (Dark Blue) | `#002147` |
| `--color-gold` | Primary accent color (CTA, Icons) | `#FFD700` |
| `--color-light-gold` | Secondary accent/top bar color (Cream) | `#F0E68C` |
| `--color-light-grey` | Section backgrounds | `#f8f8f8` |

### 2. Replacing Placeholder Images

You must replace the placeholder image paths with your actual images.

| Image | CSS Selector / HTML Element | File Name in Code | How to Change |
| :--- | :--- | :--- | :--- |
| **Hero Background** | `.hero` in `style.css` | `hero-bg-placeholder.jpg` | Replace the file name in the `background: url()` property. |
| **Services Section Team Photo** | `.team-photo` in `index.html` | `placeholder-team.jpg` | Update the `src` attribute of the `<img>` tag in the `<section id="services">`. |
| **Team Member Photo** | `.member-photo` in `index.html` | `placeholder-team-small.jpg` | Update the `src` attribute of the `<img>` tag in the `<section id="team">`. |

**Example Image Change in `style.css`:**

```css
/* Update the path in the .hero selector */
.hero {
    background: url('your-custom-hero-image.jpg') center center/cover no-repeat;
    /* ... other styles ... */
}