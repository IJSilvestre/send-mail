import nodemailer from "nodemailer";
import config from "config";
import * as dotenv from "dotenv";
dotenv.config();

class MailSevice {
  // mode: string = config.get<string>("env" || "development");

  mailConfig: any = {
    host: "smtp.kinghost.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "contato@bananaspantanal.com.br",
      pass: "P@nt@n@1",
    },
  };

  constructor() {}

  // checkMode() {
  //   if (this.mode === "production") {
  //     this.mailConfig = {
  //       host: process.env.MAIL_HOST,
  //       port: process.env.MAIL_PORT,
  //       auth: {
  //         user: process.env.MAIL_USER,
  //         pass: process.env.MAIL_PASSWORD,
  //       },
  //     };
  //   } else {
  //     this.mailConfig = {
  //       host: process.env.MAIL_HOST,
  //       port: process.env.MAIL_PORT,
  //       auth: {
  //         user: "ethereal.user@ethereal.email",
  //         pass: "verysecret",
  //       },
  //     };
  //   }
  // }

  sendMail(mail: object) {
    // this.checkMode();

    let mailOption = mail;

    let transporter = nodemailer.createTransport(this.mailConfig);

    // transporter.verify(function (error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        return error;
      } else {
        return info;
      }
    });
  }
}

export default new MailSevice();
