// create your User model here
const { db } = require("../db/config");
const { Sequelize } = require('sequelize');

let Card = db.define('Card', {
    name: Sequelize.STRING,
    mojo: Sequelize.NUMBER,
    stamina: Sequelize.NUMBER,
    imgUrl: Sequelize.STRING
});

module.exports = {
    Card,
}