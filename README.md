# Sek Chamroeun - Developer Portfolio

A modern, high-performance developer portfolio built with Vue 3, Vite, and TailwindCSS, integrated with Telegram Chat Bot for real-time contact notifications.

## 🚀 Features

- **Vue 3 Composition API (`<script setup>`)**
- **TailwindCSS Styling** with custom glassmorphism and ambient glow effects
- **Telegram Bot Integration** for instant message notifications from the Contact Form
- **Responsive Layout** & custom section scroll spy

---

## 🤖 Setting up Telegram Chat Bot Notifications

When visitors submit a message through the contact form, it is automatically forwarded to your Telegram account via a Telegram Bot.

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **[@BotFather](https://t.me/BotFather)**.
2. Send `/newbot` to `@BotFather` and follow the prompts to set a name and username for your bot.
3. `@BotFather` will generate an HTTP API Token (e.g., `7123456789:ABCdefGHIjklMNOpqrsTUVwxyZ`).
4. Copy this token.

### Step 2: Get your Telegram Chat ID

1. Open Telegram and search for **[@userinfobot](https://t.me/userinfobot)** or send a message to your newly created bot.
2. `@userinfobot` will reply with your `Id` (e.g., `123456789`).
3. Copy this Chat ID.

### Step 3: Configure Environment Variables

1. In the root directory of this project, open (or create) the `.env` file.
2. Set your environment variables:
   ```env
   VITE_TELEGRAM_BOT_TOKEN=7123456789:ABCdefGHIjklMNOpqrsTUVwxyZ
   VITE_TELEGRAM_CHAT_ID=123456789
   ```
3. Restart your dev server (`npm run dev`) for Vite to load the updated environment variables.

---

## 🛠️ Local Development Setup

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build for production
npm run build
```
