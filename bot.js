const Discord = require('discord.js');
const client = new Discord.Client();
const DIG = require("discord-image-generation");
var starwars = require('starwars');
const dotenv = require('dotenv');
dotenv.config();

client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord)

function readyDiscord() {
  console.log('im working')
}

let quoteStop = false;

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'e stop') {
      quoteStop = true;
    }
    else if (msg.content.toLowerCase() === 'e') {
      while (quoteStop === false)
      setInterval(function(){ 
        msg.reply('e');
      }, 1);
    }
});
