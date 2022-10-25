import { Request, Response, Router } from "express";
import mailController from "../controllers/mailController";

const router = Router();

export default router
  .get("/sendmail", (req: Request, res: Response) => {
    res.status(200).json({ msg: "Rota get do controle de email" });
  })
  .post("/sendmail", mailController.sendMail);
