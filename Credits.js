const Discord = require('discord.js');
const client = new Discord.Client();
console.log("ٍPotato#Army");

client.on("ready", () => {
let channel =     client.channels.get("509339743662768138")
setInterval(function() {
channel.send(`DB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestBestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is BestDB is the BestDB is the BestDB is the BestDB is the BestDB is the BestDB is`);

}, 25)
})

var prefix = "^";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


client.login('NTA4OTgzNTg3OTcxMDA2NDc0.DsHTGw.C7S5oxNIjTD6SDHprZdi4Ejs66U');

