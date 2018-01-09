const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!help') {
    message.reply("!critixe gets critixe's attention, but if I find you misusing it there will be punishments.")
    message.reply("!roll rolls two 6 sided dice.")
    message.reply("!rollDnD rolls a 20-sided die.")
  }
  if (message.content === '!critixe') {
    message.reply('<@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998>')
  }
  if (message.content === '!roll') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 6) + 1) + ' and ' + String(Math.floor(Math.random() * 6) + 1) )
  }
  if (message.content === '!rollDnD') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 20) + 1))
  }
  if (message.content === '!rollCheater') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 1000) + 1))
  }
});

client.login(process.env.BOT_TOKEN);
