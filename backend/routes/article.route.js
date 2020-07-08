const express = require('express')
const articleRoutes = express.Router()
const cors = require('cors')
const article = require('../models/article.model')


articleRoutes.route('/').get(function(req, res) {
    article.find(function(err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json(article);
        }
    });
});


articleRoutes.route('/addArticle').post(function(req, res) {
    let newArticle = new article (req.body);
    newArticle.save()
        .then(article => {
            res.status(200).json({'article': 'artcile added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new article failed');
        });
});






module.exports = articleRoutes
