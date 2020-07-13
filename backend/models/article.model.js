var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const articleSchema = new Schema({
  title:  String,
  body:   String,
  profileImg: String
},{
  collection : 'users'
});
const Article = mongoose.model('articles', articleSchema)
module.exports = Article
