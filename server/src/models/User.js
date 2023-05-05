// create your User model here
const { db } = require("../db/config");
const { Sequelize } = require('sequelize');

let User = db.define('User', {
    username: Sequelize.STRING
});

module.exports = {
    User,
}