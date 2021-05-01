const express = require('express');
const router = express.Router();

const servicesController = require("../controllers/servicesController");

router.get('/', servicesController.getServices);
// router.get('/getProject/:id', projectsController.getProject);
router.put('/updateServices', servicesController.updateServices);
// router.post('/createProject', projectsController.createProject);
// router.delete('/deleteProject/:id', projectsController.deleteProject);

module.exports = router;