import { Router } from 'express';

const router = Router();

router.get('/ping', (req: any, res: any) => res.json({ pong: true }));

export default router;