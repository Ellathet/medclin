import { Router } from 'express';
import user from './user';
import specialization from './specialization';
import appointment from './appointment';
import status from './status';

const router = Router();

router.use('/user', user);
router.use('/specialization', specialization);
router.use('/appointment', appointment);
router.use('/status', status);

export default router;
