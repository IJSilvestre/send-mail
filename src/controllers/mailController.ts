import { Request, Response } from "express";
import mailService from "../services/mailService";

class MailController {
  async sendMail(req: Request, res: Response) {
    const mail: object = Object.assign({}, req.body);
    await mailService
      .sendMail(mail)
      .then(() => {
        res.status(200).json({ msg: "Enviado com sucesso" });
      })
      .catch((error) => {
        res.status(400).json({ msg: error.response });
      });
  }
}

export default new MailController();
