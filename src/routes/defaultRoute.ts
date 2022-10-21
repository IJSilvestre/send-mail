import { Router, Request, Response } from "express";

// import { validate } from "./middleware/handleValidation";
// import { movieValidation } from "./middleware/movieValidate";

const router = Router();

export default router.get("/", (req: Request, res: Response) => {
     res.status(200).json({ msg: "Api Todo List" });
});
