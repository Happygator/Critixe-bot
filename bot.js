const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!help') {
    message.reply('Happygator4723 is currently working on this bot. It has no usable features yet. #blamecritixe')
  }
  if (message.content === '!critixe') {
    message.reply('<@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998> <@368214509283966998>')
  }
  if (message.content === '!roll') {
    message.reply('You roll ' + String(Math.floor(Math.random() * 6) + 1) )
  }
});

client.login(process.env.BOT_TOKEN);
