import { Router } from 'express';
import controller from '../controllers/controller.js';

const router = Router();

router.get('/saldo/:conta', controller.getSaldo);

router.patch('/sacar', controller.sacar);
router.patch('/depositar', controller.depositar);

export default router;
