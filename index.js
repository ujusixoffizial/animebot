const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client(); 
client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
            // //console.log(message.content);
    if(message.content.includes(`https://shinden.pl/episode/53574-gunjou-no-magmel`)) {
        message.channel.send("<@245307836207333386> Pojawił się nowy odcinek Gunjou no Magmel.")
    }
            // if(message.content.startsWith(`${prefix}uno`)) {
            //    let member = message.mentions.members.first();
            //    message.channel.send(":wave: " + member.tag + " :wave:")
            //}

})


client.login(token);
