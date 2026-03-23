const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// On lie l'URL à la fonction du contrôleur
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);

module.exports = router;// Route pour créer un article
router.post('/', articleController.createArticle);