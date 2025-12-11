# IT News Manager

**Version:** 1.0.1  
**Author:** Dhaval  

Manage IT employee–focused news via a custom REST API and React TypeScript frontend.

---

## Features

- Add, delete, and list IT news items.
- Full content modal view.
- Responsive and modern admin layout.
- WordPress shortcode support: `[it_news_app]`

---

## Installation

1. Upload the `wp-it-news-manager` folder to your `/wp-content/plugins/` directory.  
2. Activate the plugin via the WordPress Admin Dashboard.  
3. Add `[it_news_app]` shortcode to any page to display the app.

---

## Usage

- Click **Add News** to create a news item.  
- Click **Read More** on a news card to view full content in a modal.  
- Click **Delete** to remove a news item.

---

## Development

### Build

```bash
npm install
npm run build
