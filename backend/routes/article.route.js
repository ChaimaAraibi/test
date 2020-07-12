const express = require('express')
const articleRoutes = express.Router()
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



articleRoutes.route('/:id').get((req, res) => {
    article.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(400).json('Error: ' + err));
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



articleRoutes.route('/update/:id').post(function(req, res) {
    article.findById(req.params.id, function(err, article) {
        if (!article)
            res.status(404).send("data is not found");
        else
            article.title = req.body.title;
            article.body = req.body.body;
            

            article.save().then(article => {
                res.json('Article updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});





articleRoutes.route('/delete/:id').delete((req, res, next) => {
    article.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })


  router.route('/updateImage/:id',upload.single('profileImg')).post(function(req, res) {
    const url = req.protocol + '://' + req.get('host')
    console.log("here")
    Image.findById(req.params.id, function(err, image) {
        if (!image)
            res.status(404).send("data is not found");
        else
            image.profileImg = url + '/public/' + req.file.filename,
            image.save().then(result => {
                res.status(201).json({
                    message: "Image updated successfully!",
                })
            }).catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
            })
    });
});



module.exports = articleRoutes
