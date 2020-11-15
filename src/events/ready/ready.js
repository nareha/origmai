const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    let serverIn = await client.guilds.cache.size;
    console.log(client.user.tag + ' has logged in.');

    // Set the client user's presence
    client.user.setPresence({ activity: { name: `${serverIn} servers || ;help`, type: "WATCHING" }, status: 'online' })
    .catch(console.error);
  }
}