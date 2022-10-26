import { Request, Response } from "express";
import mailService from "../services/mailService";

class MailController {
  sendMail(req: Request, res: Response) {
    const mail: object = Object.assign({}, req.body);
    let result = mailService.sendMail(mail);
    console.log(result);
    res.status(200).json({ msg: "Rota envio email" });
  }
}

export default new MailController();
