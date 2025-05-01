const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN'; // Replace with your token
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'YOUR_GOOGLE_SCRIPT_URL'; // Your deployment link

// Command handlers
bot.onText(/\/addbb/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Open BB Form:', {
    reply_markup: {
      inline_keyboard: [[
        { 
          text: "📝 BB Form", 
          web_app: { url: `${webAppUrl}?formType=bb` } 
        }
      ]]
    }
  });
});

bot.onText(/\/addpp/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Open PP Form:', {
    reply_markup: {
      inline_keyboard: [[
        { 
          text: "📝 PP Form", 
          web_app: { url: `${webAppUrl}?formType=pp` } 
        }
      ]]
    }
  });
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Welcome! Use commands:\n/addbb - BB Data Entry\n/addpp - PP Data Entry`);
});

console.log('Bot is running...');