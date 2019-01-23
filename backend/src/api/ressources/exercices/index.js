const { Router } = require('express');

const router = new Router();

//TODO: API DOC: Des exemples sont disponibles dans le fichier exams/index.js
router.get('/', (req, res) => res.send('Hello, World!'));
// router.get('/', controller.getAll);


module.exports = router;
