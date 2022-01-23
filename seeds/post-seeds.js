const { Post } = require('../models');

const postdata =
    [
        {
            "title": "Apple vs. Android",
            "body": "Who is your champion?",
            "user_id": 1
        },
        {
            "title": "Tablet",
            "body": "I love using a tablet over a laptop, size and weight are more convenient",
            "user_id": 2
        },
        {
            "title": "Surprise!",
            "body": "We're having twin boys!",
            "user_id": 3
        },
        {
            "title": "Snowy Day",
            "body": "This is a beautiful snowy day",
            "user_id": 6
        },
        {
            "title": "School",
            "body": "First day of school tomorrow!!",
            "user_id": 5
        },
        {
            "title": "Did anyone see Now Way Home!?",
            "body": "Best marvel movie of all time!!",
            "user_id": 1
        },
        {
            "title": "HGTV",
            "body": "Such a gloomy day, lets watch HGTV",
            "user_id": 5
        },
        {
            "title": "Fitness!",
            "body": "My favorite way to exercise is through calisthenics",
            "user_id": 4
        },
        {
            "title": "My favorite anime!",
            "body": "HxH is my all time favortie anime!",
            "user_id": 4
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;