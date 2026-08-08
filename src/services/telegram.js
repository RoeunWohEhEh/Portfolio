/**
 * Telegram Bot API Integration Service
 * Formats contact form submissions and dispatches them to a Telegram Chat Bot.
 */

// Helper to sanitize HTML tags for Telegram parse_mode: 'HTML'
const escapeHtml = (text) => {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Sends a notification message to Telegram bot.
 * @param {Object} payload - Contact form payload
 * @param {string} payload.name - Sender's full name
 * @param {string} payload.email - Sender's email address
 * @param {string} payload.message - Sender's message content
 */
export const sendTelegramMessage = async ({ name, email, message }) => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  if (!botToken || !chatId || botToken === 'YOUR_TELEGRAM_BOT_TOKEN' || chatId === 'YOUR_TELEGRAM_CHAT_ID') {
    throw new Error('Telegram Bot Token or Chat ID is not configured. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in your .env file.')
  }

  const dateStr = new Date().toLocaleString()
  
  const text = `<b>📬 New Portfolio Contact Message</b>\n\n` +
               `<b>👤 Sender:</b> ${escapeHtml(name)}\n` +
               `<b>✉️ Email:</b> ${escapeHtml(email)}\n` +
               `<b>📅 Time:</b> ${dateStr}\n\n` +
               `<b>💬 Message:</b>\n${escapeHtml(message)}`

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    })
  })

  const data = await response.json()

  if (!response.ok || !data.ok) {
    const errorDescription = data?.description || response.statusText || 'Failed to send message to Telegram API'
    throw new Error(`Telegram API Error: ${errorDescription}`)
  }

  return data
}
