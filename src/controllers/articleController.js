const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../../data.json');

// Fonction utilitaire pour lire le fichier
const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

// Fonction utilitaire pour écrire dans le fichier
const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

exports.getAllArticles = (req, res) => {
    const articles = readData();
    res.status(200).json(articles);
};

exports.createArticle = (req, res) => {
    const articles = readData();
    const newArticle = { id: Date.now(), ...req.body, date: new Date().toISOString().split('T')[0] };
    articles.push(newArticle);
    writeData(articles);
    res.status(201).json(newArticle);
};

exports.getArticleById = (req, res) => {
    const articles = readData();
    const article = articles.find(a => a.id === parseInt(req.params.id));
    article ? res.json(article) : res.status(404).json({ message: "Non trouvé" });
};

exports.deleteArticle = (req, res) => {
    let articles = readData();
    articles = articles.filter(a => a.id !== parseInt(req.params.id));
    writeData(articles);
    res.status(204).send();
};

exports.searchArticles = (req, res) => {
    const query = req.query.query.toLowerCase();
    const articles = readData();
    const filtered = articles.filter(a => a.titre.toLowerCase().includes(query));
    res.json(filtered);
};