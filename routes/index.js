import express from 'express';
import countriesRouter from './countries-route.js';
const router = express.Router();

router.get('/healths', (req, res) => res.status(200).json({ status: 'UP' }));
router.use('/', countriesRouter);

export default router;