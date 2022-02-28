import { Router } from 'express';
import user from './user';
import specialization from './specialization';

const router = Router();

router.use('/user', user);
router.use('/specialization', specialization);

export default router;
