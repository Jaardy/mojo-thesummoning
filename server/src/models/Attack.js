// create your User model here
const { db } = require("../db/config");
const { Sequelize } = require('sequelize');

let Attack = db.define('Attack', {
    title: Sequelize.STRING,
    mojoCost: Sequelize.NUMBER,
    staminaCost: Sequelize.NUMBER
});

module.exports = {
    Attack,
}