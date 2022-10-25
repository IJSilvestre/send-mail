import { Request, Response } from "express";
import mailService from "../services/mailService";

class MailController {
  sendMail(req: Request, res: Response) {
    const mail: any = Object.assign({}, req.body);
    mailService.sendMail(mail);
    res.status(200).json({ msg: "Rota envio email" });
  }
}

export default new MailController();
