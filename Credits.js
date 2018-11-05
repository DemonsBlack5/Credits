const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ٍPotato#Army");

client.on("ready", () => {
let channel =     client.channels.get("508983436686524417")
setInterval(function() {
channel.send(`DB is the Best`);
}, 25)
})
 
client.login('NTA4OTc4MzkxNzY0OTU5MjMy.DsHKcg.cQsRsFfIwUoMW8328zAPkFW_wk0');
