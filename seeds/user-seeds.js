const { User } = require('../models');

const userdata =
    [
        {
            "username": "Seol",
            "password": "password"
        },
        {
            "username": "Era",
            "password": "password"
        },
        {
            "username": "Rye",
            "password": "password"
        },
        {
            "username": "Tre",
            "password": "password"
        },
        {
            "username": "Flare",
            "password": "password"
        },
        {
            "username": "Marcus",
            "password": "password"
        }
    ];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
