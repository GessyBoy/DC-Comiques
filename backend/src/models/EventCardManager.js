const AbstractManager = require("./AbstractManager");

class EventCardManager extends AbstractManager {
  constructor() {
    super({ table: "event_card" });
  }
}

module.exports = EventCardManager;
