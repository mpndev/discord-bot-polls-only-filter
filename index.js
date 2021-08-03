const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (message) => {
    if (!message.author.bot) {
        message.fetch(message.id).then(msg => msg.delete())
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
