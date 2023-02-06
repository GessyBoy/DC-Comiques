const AbstractManager = require("./AbstractManager");

class ScenarioCardManager extends AbstractManager {
  constructor() {
    super({ table: "scenario_card" });
  }
}

module.exports = ScenarioCardManager;
