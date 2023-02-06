const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const scenarioCardControllers = require("./controllers/scenarioCardControllers");
const eventCardControllers = require("./controllers/eventCardController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/scenario_cards", scenarioCardControllers.browse);
router.get("/scenario_cards/:id", scenarioCardControllers.read);

router.get("/event_cards", eventCardControllers.browse);
router.get("/event_cards/:id", eventCardControllers.read);

module.exports = router;
