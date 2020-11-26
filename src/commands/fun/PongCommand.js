const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PongCommand extends BaseCommand {
  constructor() {
    super('ping', 'fun', []);
  }

  async run(client, message, args) {
    message.channel.send('pong!');
  }
}