const Discord = require('discord.js');
const client = new Discord.Client({ intents: [] });

client.login("00000"); // Token du bot/utilisateur

client.on("ready", () => {
  console.log("L'enregistrement des messages peut commencer !");
  client.user.setActivity("ok");
});

client.on("message", (message) => {
  // Vérifie si le message a été envoyé dans le salon spécifié ou en MP avec l'utilisateur spécifié
  if (
    (message.channel.id === "00000") || // Salon spécifié
    (message.channel.type === "dm" && message.channel.recipient.id === "00000") // MP avec l'utilisateur spécifié
  ) {
    const fs = require("fs");
    // Enregistre le message dans le fichier "discord message.txt"
    fs.writeFile(
      "./discord message.txt",
      `[${message.channel.name}] <${message.author.username}> ${message.content}\n`,
      (err) => {
        if (err) console.error(err);
      }
    );
  }
});