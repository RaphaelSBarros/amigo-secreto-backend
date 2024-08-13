import { Router } from 'express';
import * as auth from '../controllers/auth'

const router = Router();

router.post('/login', auth.login)

router.get('/ping', auth.validate, (req: any, res: any) => res.json({ pong: true, admin: true }));

export default router;