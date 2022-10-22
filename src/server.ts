import * as dotenv from "dotenv";
dotenv.config();
import Logger from "../config/logger";
// import db from "../config/db";
const port = process.env.PORT;
import app from "../config/app";

// db.connect((err: any) => {
//   if (err) {
//     Logger.error(`error connecting: ${err.stack}`);
//   } else {
//     Logger.info(`MySql connected as id: ${db.threadId}`);
app.listen(port, () => Logger.info(`App listem on http://localhost:${port}`));
//   }
// });
