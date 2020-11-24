const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PongCommandSimple extends BaseCommand {
  constructor() {
    super('pong2', 'fun', []);
  }

  async run(message) {
    message.channel.send('pong'); 
  }
}