import express from 'express';
import countriesController from '../controllers/countries.js';
const router = express.Router();


router.get('/', (req, res) => countriesController.get(req, res));
router.post('/', (req, res) => countriesController.create(req, res));
router.put('/:id', (req, res) => countriesController.update(req, res));
router.delete('/:id', (req, res) => countriesController.delete(req, res));

export default router;