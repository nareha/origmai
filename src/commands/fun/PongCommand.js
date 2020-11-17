const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('pong', 'fun', []);
  }

  async run(message) {
    const cnd = message.shift().toLowerCase();
    if(cmd == ";ping") {
      const msg = await message.channel.send('pong!');
    }

    try{
      if (message.author.bot) return undefined;
      await message.channel.send(msg);
    } catch (err) {
      console.log(err);
      message.channel.send('I am not able to say that message ):')
    }
  }
}