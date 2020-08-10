import { Router } from 'express';
import { getUsersAll, getUserById, createUser } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsersAll);
router.get('/user/:id', getUserById);
router.post('/users', createUser);

export default router;