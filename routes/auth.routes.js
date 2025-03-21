import { Router } from "express";

const authRouter = Router();

authRouter.post('/sing-up', (req, res) => res.send({ title: 'Sing Up' }));
authRouter.post('/sing-in', (req, res) => res.send({ title: 'Sing In' }));
authRouter.post('/sing-out', (req, res) => res.send({ title: 'Sing Out' }));

export default authRouter;