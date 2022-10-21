import * as dotenv from "dotenv";
dotenv.config();
// import Logger from "../config/logger";
// import db from "../config/db";
// const port = process.env.PORT;
const port = 3000;
import app from "../config/app";

// db.connect((err: any) => {
//   if (err) {
//     Logger.error(`error connecting: ${err.stack}`);
//   } else {
//     Logger.info(`MySql connected as id: ${db.threadId}`);
app.listen(port, () => console.log(`App listem on http://localhost:${port}`));
//   }
// });
