import { Router } from 'express';
import * as auth from '../controllers/auth'

const router = Router();

router.get('/ping', (req: any, res: any) => res.json({ pong: true }));
router.post('/login', auth.login)

export default router;