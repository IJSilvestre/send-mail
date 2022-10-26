import nodemailer from "nodemailer";

class MailSevice {
  mailConfig: any = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  };

  async sendMail(mail: object) {
    let mailOption = mail;

    let transporter = nodemailer.createTransport(this.mailConfig);

    //await transporter.verify();

    await transporter.sendMail(mailOption);
  }
}

export default new MailSevice();
