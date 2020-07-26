const express = require('express');
const router = express.Router();

const projectsController = require("../controllers/projectsController");

// router.get('/getAllProjects', projectsController.getAllProjects);
router.get('/', projectsController.getProjects);
router.get('/getProject/:id', projectsController.getProject);
router.put('/updateProject', projectsController.updateProject);
router.post('/createProject', projectsController.createProject);
router.delete('/deleteProject/:id', projectsController.deleteProject);

module.exports = router;
