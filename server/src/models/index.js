const { User } = require('./User');
// import the rest of your models above
const { Deck } = require('./Deck');
const { Card } = require('./Card');
const { Attack } = require('./Attack');
//set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);

Card.belongsTo(Deck);
Deck.hasMany(Card);

Card.hasMany(Attack);
Attack.hasMany(Card);

// and then export them all below
module.exports = { 
    User,
    Deck,
    Card,
    Attack
}
