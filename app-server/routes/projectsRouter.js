const express = require('express');
const router = express.Router();

const projectsController = require("../controllers/projectsController");

// router.get('/getAllProjects', projectsController.getAllProjects);
router.get('/getProject', projectsController.getProject);
router.post('/updateProject', projectsController.updateProject);

module.exports = router;
