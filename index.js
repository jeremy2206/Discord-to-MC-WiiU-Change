const Discord = require('discord.js');
const client = new Discord.Client({ intents: [] });

client.login("00000"); // Bot/user token

client.on("ready", () => {
  console.log("Message recording can begin!");
  client.user.setActivity("Discord to Minecraft Wii U");
});

client.on("message", (message) => {
  // Checks if the message was sent in the specified channel or in Private Message with the specified user
  if (
    (message.channel.id === "00000") || // Specified channel
    (message.channel.type === "dm" && message.channel.recipient.id === "00000") // Private Message with specified user
  ) {
    const fs = require("fs");
    // Save message to file "discord message.txt"
    fs.writeFile(
      "./discord message.txt",
      `[${message.channel.name}] <${message.author.username}> ${message.content}\n`,
      (err) => {
        if (err) console.error(err);
      }
    );
  }
});
