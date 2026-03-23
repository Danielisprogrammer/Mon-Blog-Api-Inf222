# 📝 Mon Blog API - Projet Académique INF222

## 👤 Informations Étudiant
- **Nom :**  Kengne Tachago Daniel Vahid
- **Niveau :** Licence 2 Informatique (L2)
- **Matricule :** 23U2590
- **Institution :** Université de Yaoundé I (UY1)
- **UE :** INF222 - Développement Backend (EC1)

---

## 🚀 Aperçu du Projet
Cette application est une API REST robuste développée avec **Node.js** et **Express**. Elle permet la gestion complète d'un blog (CRUD) avec une persistance des données via un système de fichiers JSON, garantissant la sauvegarde des articles même après redémarrage du serveur.

### 🌐 Liens du Projet
- **Dépôt GitHub :** [https://github.com/Danielisprogrammer/Mon-Blog-Api-Inf222.git]
- **API Déployée (Live) :** [https://mon-blog-api-inf222.onrender.com/api/articles]

---

## 🏗️ Architecture Technique
Le projet suit le pattern **MVC** (Modèle-Vue-Contrôleur) pour assurer une séparation claire des responsabilités :
- **Models :** Structure des données (articles).
- **Controllers :** Logique métier et validation des entrées.
- **Routes :** Définition des points d'entrée de l'API.

> **Note sur la persistance :** En raison de contraintes réseau lors du développement, la persistance a été implémentée via le module `fs` (File System) de Node.js, stockant les données dans un fichier `data.json`.

---

## 🛠️ Endpoints de l'API

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/articles` | Liste tous les articles du blog. |
| **GET** | `/api/articles/:id` | Récupère un article spécifique par son ID. |
| **GET** | `/api/articles/search` | Recherche par mot-clé (titre ou contenu). |
| **POST** | `/api/articles` | Crée un nouvel article (Validation titre/auteur). |
| **PUT** | `/api/articles/:id` | Met à jour un article existant. |
| **DELETE** | `/api/articles/:id` | Supprime un article de la base. |

---

## 📸 Captures d'écran & Preuves de Test

### 1. Test de l'API (Lecture)
![Test GET Articles](./images/Capture%20d’écran%20du%202026-03-23%2011-49-35.png)
*(Capture d'écran du navigateur ou de Thunder Client montrant le JSON des articles)*

### 2. Déploiement sur Render
![Render Deployment](./images/Capture%20d’écran%20du%202026-03-23%2011-48-05.png)
*(Capture d'écran du tableau de bord Render montrant le statut "Live")*

---

## ⚙️ Installation Locale

1. **Cloner le projet**
   ```bash
   git clone [https://github.com/Danielisprogrammer/Mon-Blog-Api-Inf222.git]
   cd mon-blog-api
Installer les dépendances

```bash
npm install
```
Lancer le serveur (Mode Dev)

```bash
npm run dev
```
Le serveur sera accessible sur http://localhost:3000.

🧪 Analyse Critique & Outils
Gestion de version : Utilisation de Git avec une approche Trunk-Based.

Plateforme CleeRoute : Utilisation pour la structuration du parcours d'apprentissage et la validation des acquis théoriques.

Outils de test : Thunder Client (VS Code Extension).


---


