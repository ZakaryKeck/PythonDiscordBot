// bind port, allowing bot to run on Heroku
const express = require('express');
const app = express();
app.listen(process.env.PORT || 8000);

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('your-token-goes-here');

// listen for messages
client.on('message', message => {
	console.log(message.content);
});
