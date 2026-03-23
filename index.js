const express = require('express');
const app = express();
const articleRoutes = require('./src/routes/articleRoutes'); // Importation de tes routes
const PORT = 3000;

// Middleware pour permettre à Express de lire le JSON (très important pour la suite !)
app.use(express.json());

// Utilisation des routes pour les articles
// Tous les chemins dans articleRoutes commenceront par /api/articles
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
  res.send('Serveur prêt pour le blog ! Testez /api/articles');
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});