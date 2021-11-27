const express = require('express');
const router = express.Router();

const servicesController = require("../controllers/servicesController");

router.get('/:id', servicesController.getServices);
router.post('/createServices', servicesController.createServices);
router.put('/updateServices', servicesController.updateServices);
// router.get('/getProject/:id', projectsController.getProject);
// router.delete('/deleteProject/:id', projectsController.deleteProject);

module.exports = router;