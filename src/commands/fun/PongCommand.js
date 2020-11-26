const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('pong', 'fun', []);
  }

  async run(client, message) {
    try{
      if (message.author.bot) return undefined;
      await message.channel.send('pong!');
    } catch (err) {
      console.log(err);
      message.channel.send('I missed the ball D:')
    }
  }
}