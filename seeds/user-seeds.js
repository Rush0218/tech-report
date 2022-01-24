const { User } = require('../models');

const userdata =
    [
        {
            "username": "Seol",
            "email": "seol@email.com",
            "password": "password"
        },
        {
            "username": "Era",
            "email": "era@email.com",
            "password": "password"
        },
        {
            "username": "Rye",
            "email": "rye@email.com",
            "password": "password"
        },
        {
            "username": "Tre",
            "email": "tre@email.com",
            "password": "password"
        },
        {
            "username": "Flare",
            "email": "flare@email.com",
            "password": "password"
        },
        {
            "username": "Marcus",
            "email": "mundy@email.com",
            "password": "password"
        }
    ];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
