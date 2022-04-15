import { Router } from 'express';
import user from './user';
import specialization from './specialization';
import appointment from './appointment';
import status from './status';
import auth from './auth';

const router = Router();

router.use('/user', user);
router.use('/specialization', specialization);
router.use('/appointment', appointment);
router.use('/status', status);
router.use('/auth', auth);

export default router;
