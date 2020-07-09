const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'article'
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', imageSchema)