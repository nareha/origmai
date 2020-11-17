const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('pong', 'fun', []);
  }

  async run(message) {
    const args = message.content.slice(prefix.length).split(/ ;/);
    const commandName = args.shift().toLowerCase();
    const sayEmbed;
    if (commandName === 'ping') {
      sayEmbed = new Discord.MessageEmbed()
      .setTitle(`pong!`)
      .setColor("#84daf8")
    }
    try{
      if (message.author.bot) return undefined;
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('I couldn\'t pong ):')
    }
  }
}