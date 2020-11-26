const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('pong', 'fun', []);
  }

  async run(client, message) {
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`pong!`)
      .setColor("#84daf8")
    try{
      if (message.author.bot) return undefined;
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('I am not able to say that message ):')
    }
  }
}