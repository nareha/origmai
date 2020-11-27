const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ListQuoteCommand extends BaseCommand {
  constructor() {
    super('qlist', 'quotes', []);
  }

  async run(client, message, args) {
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} says: ${messageToSay}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("#84daf8")
      .setTimestamp();
    try{
      if (message.author.bot) return undefined;
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('I am not able to say that message ):')
    }
  }
}