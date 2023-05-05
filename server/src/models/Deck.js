// create your User model here
const { db } = require("../db/config");
const { Sequelize } = require('sequelize');

let Deck = db.define('Deck', {
    name: Sequelize.STRING,
    xp: Sequelize.NUMBER
});

module.exports = {
    Deck,
}