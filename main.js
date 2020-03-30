require('dotenv').config();

const imagecategories = require('./config/imagecategories.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Wiceriniel", {type: "LISTENING"});
});

client.on('message', msg => {
  if ((msg.channel.parentID === imagecategories.TYT || msg.channel.parentID === imagecategories.AYT) && msg.author.id != client.user.id && msg.attachments.size === 0) {
    msg.guild.channels.get(imagecategories.logchannel).send(`<#${msg.channel.id}> <@${msg.author.id}> : ${msg.cleanContent}`);
    msg.delete();
  }
  
});