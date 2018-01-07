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
    message.reply('<@398308436279820288> <@398308436279820288> <@398308436279820288> <@398308436279820288> <@398308436279820288>')
  }
});

client.login(process.env.BOT_TOKEN);
