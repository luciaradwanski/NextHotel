const express = require('express')
const router = express.Router();
const gastronomyController = require('../Controllers/gastronomyController')

router.get('/', gastronomyController.getAllGastronomy);

router.get('/:id', gastronomyController.getGastronomyById);
/* crea gastronomy */
router.post('/', gastronomyController.createGastronomy);
/* modifica */
router.put('/:id', gastronomyController.updateGastronomy)
/* por id */
router.delete('/:id', gastronomyController.deleteGastronomy)
/* Por name */
router.get('/', gastronomyController.getGastronomyName)

module.exports = router;