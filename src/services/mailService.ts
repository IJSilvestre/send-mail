import nodemailer from "nodemailer";
import configMail from "../../config/mailConfig";
import config from "config";
import * as dotenv from "dotenv";
dotenv.config();

class MailSevice {

  mode: string = config.get<string>("env" || "development");

  mailConfig: any = "";

  constructor() {

  }

  checkMode() {
    if (this.mode === "production") {
      this.mailConfig = {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      };
    } else {
      this.mailConfig = {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: "ethereal.user@ethereal.email",
          pass: "verysecret",
        },
      };
    }
  }

  sendMail(from: string, to: string, subject: string, message: string) {

    this.checkMode();

    let mailOption = {
      from: from,
      to: to,
      subject: subject,
      html: message,
    };

    let transporter = nodemailer.createTransport(this.mailConfig);

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        return error;
      } else {
        return info;
      }
    });
  }
}

export default new MailSevice