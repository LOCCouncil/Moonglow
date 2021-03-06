const Discord = require('discord.js');
const web = require('../webhooks.json')
module.exports = async (client, channel, guild) => { //eslint-disable-line no-unused-vars
  const channelName = await channel.name;
  const channelID = await channel.id;
  const guildName = await channel.guild.name;
  const guildID = await channel.guild.id;
  const guildIcon = await channel.guild.iconURL;

  const embed = new Discord.RichEmbed();
  const hook = new Discord.WebhookClient(web.channelCreateID, web.channelCreateToken);
  embed.setTitle('Channel Create Event');
  embed.setThumbnail(guildIcon);
  embed.addField('Channel', `${channelName} \`(${channelID})\``);
  embed.addField('Guild', `${guildName} \`(${guildID})\``);
  embed.setFooter(client.user.username, client.user.avatarURL);
  embed.setTimestamp();

  hook.send(embed);
};
