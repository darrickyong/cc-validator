import express, { Request, Response } from "express";
import ValidationService from "../services/ValidationService.ts";

const router = express.Router();
const service = new ValidationService();

router.get("/", (req: Request, res: Response) => {
  setTimeout(() => {
    // Simulate real API time
    console.log("waiting 2000ms");
    const requestNumber = req.query.number as string;
    const { isValid, message } = service.validate(requestNumber);
    res.json({ isValid, message });
  }, 2000);
});

export default router;
