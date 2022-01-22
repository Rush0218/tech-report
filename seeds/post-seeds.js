const { Post } = require('../models');

const postdata =
    [
        {
            "post_title": "Beautiful Day",
            "post_body": "This is a beautiful day",
            "user_id": 1
        },
        {
            "post_title": "Fields",
            "post_body": "This is the greenest field",
            "user_id": 2
        },
        {
            "post_title": "Do you hear it?",
            "post_body": "This is very musical, listen!",
            "user_id": 3
        },
        {
            "post_title": "Snowy Day",
            "post_body": "This is a beautiful snowy day",
            "user_id": 4
        },
        {
            "post_title": "School",
            "post_body": "First day of school tomorrow!!",
            "user_id": 5
        },
        {
            "post_title": "Did anyone see Now Way Home!?",
            "post_body": "Best movie of all time!!",
            "user_id": 1
        },
        {
            "post_title": "HGTV",
            "post_body": "Such a gloomy day, lets watch HGTV",
            "user_id": 4
        },
        {
            "post_title": "Fields",
            "post_body": "This is the greenest field",
            "user_id": 3
        },
        {
            "post_title": "Do you hear it?",
            "post_body": "This is very musical, listen!",
            "user_id": 2
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;