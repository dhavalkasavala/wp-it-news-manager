**IT News Manager**

* **Version:** 1.0.1
* **Author:** Dhaval

Manage IT employee–focused news via a custom REST API and a modern React TypeScript frontend.

---

## 🚀 Frontend Tech Stack

* ⚛ **React 18**
* 🟦 **TypeScript**
* ⚡ **Vite** (super-fast build tool)
* 🎨 **TailwindCSS** (utility-first styling)
* 🔄 **React Hooks** (state & effects)
* 🧱 **Modals, cards & responsive UI**

---

## 🔧 Features

* Add, delete, and list IT news items
* Full content opens in a modal
* Clean, responsive admin layout
* Uses TailwindCSS for modern UI
* Custom REST API for create/list/delete
* WordPress shortcode:

  ```
  [it_news_app]
  ```

---

## 📥 Installation

1. Upload the `wp-it-news-manager` folder to:

```
/wp-content/plugins/
```

2. Activate the plugin via **WordPress Admin → Plugins**
3. Add this shortcode to any page:

```
[it_news_app]
```

This will render the React-powered application.

---

## 📘 Usage

* Click **Add News** to create a new news item
* Click **Read More** to view the full content inside a modal
* Click **Delete** to remove a news item

---

## 🛠 Development

### Install dependencies

```bash
npm install
```

### Build production assets

```bash
npm run build
```

The compiled files will be output into the `build/` folder and loaded by WordPress automatically.

