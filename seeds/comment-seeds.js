const { Comment } = require('../models');

const commentData =
    [
        {
            "comment_text": "comment here 1",
            "user_id": 1,
            "post_id": 3
        },
        {
            "comment_text": "comment here 2",
            "user_id": 2,
            "post_id": 4
        },
        {
            "comment_text": "comment here 3",
            "user_id": 3,
            "post_id": 5
        },
        {
            "comment_text": "comment here 4",
            "user_id": 4,
            "post_id": 1
        },
        {
            "comment_text": "comment here 5",
            "user_id": 5,
            "post_id": 1
        },
        {
            "comment_text": "comment here 6",
            "user_id": 6,
            "post_id": 2
        },
        {
            "comment_text": "comment here 7",
            "user_id": 1,
            "post_id": 2
        },
        {
            "comment_text": "comment here 8",
            "user_id": 2,
            "post_id": 3
        },
        {
            "comment_text": "comment here 9",
            "user_id": 3,
            "post_id": 4
        },
        {
            "comment_text": "comment here 10",
            "user_id": 4,
            "post_id": 5
        },
    ];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;