// On crée un tableau qui simule notre base de données
let articles = [
  {
    id: 1,
    titre: "Introduction au web",
    contenu: "Le web est magnifique !",
    auteur: "Charles",
    date: "2026-03-18",
    categorie: "Technologie",
    tags: ["web", "debutant"]
  },
  {
    id: 2,
    titre: "Apprendre Node.js",
    contenu: "Node js est super pour le backend.",
    auteur: "Daniel",
    date: "2026-03-23",
    categorie: "Développement",
    tags: ["node", "backend"]
  }
];

// TRÈS IMPORTANT : On exporte le tableau pour que le contrôleur puisse l'utiliser
module.exports = articles;