const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Sonic, s!help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDI5MzY4NDQzNTk5MzIzMTM2.DaAoDg.qfIQOhjuj1Nrtryisbulv29iGO8");
