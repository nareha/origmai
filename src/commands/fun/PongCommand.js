const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('ping', 'fun', []);
  }

  async run(client, message, args) {
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`pong!`)
      .setColor("#84daf8");
    try{
      if (message.author.bot) return undefined;
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('I couldn\'t pong ):')
    }
  }
}