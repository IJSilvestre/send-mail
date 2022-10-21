import express from "express";
const cors = require("cors");
import defaultRoute from "../src/routes/defaultRoute";

import morganMiddleware from "../src/middlewares/morganMiddleware";
// import userRouter from "../src/routes/userRoutes";
// import profileRoute from "../src/routes/profileRoutes";
// import courseRoute from "../src/routes/courseRoutes";
// import todoListRoute from "../src/routes/todoListRoutes";

const corsOptions = {
     origin: ["http://localhost:4200", "http://127.0.0.1:4200"],
     methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
     allowedHeaders: [
          "Content-Type",
          "Authorization",
          "Access",
          "Origin",
          "X-Requested-with",
     ],
     credentials: true,
     optionsSuccessStatus: 204,
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morganMiddleware);

app.use("/", defaultRoute);
// app.use(userRouter);
// app.use(profileRoute);
// app.use(courseRoute);
// app.use(todoListRoute)

export default app;
