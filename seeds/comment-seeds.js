const { Comment } = require('../models');

const commentData =
    [
        {
            "comment_body": "comment here",
            "user_id": 1,
            "post_id": 3
        },
        {
            "comment_body": "comment here",
            "user_id": 2,
            "post_id": 4
        },
        {
            "comment_body": "comment here",
            "user_id": 3,
            "post_id": 5
        },
        {
            "comment_body": "comment here",
            "user_id": 4,
            "post_id": 1
        },
        {
            "comment_body": "comment here",
            "user_id": 5,
            "post_id": 1
        },
        {
            "comment_body": "comment here",
            "user_id": 3,
            "post_id": 2
        },
        {
            "comment_body": "comment here",
            "user_id": 2,
            "post_id": 2
        },
        {
            "comment_body": "comment here",
            "user_id": 4,
            "post_id": 3
        },
        {
            "comment_body": "comment here",
            "user_id": 1,
            "post_id": 3
        },
        {
            "comment_body": "comment here",
            "user_id": 2,
            "post_id": 5
        },
    ];

const seedComment = () => User.bulkCreate(commentData);

module.exports = seedComment;