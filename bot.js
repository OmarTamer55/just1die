const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on('ready', async() => {
var server = "512532251850833934"; 
var channel = "512533817656082453

";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Welcome welcome')
    },305);
})6







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
