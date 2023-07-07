import { requireAuth, validateRequest } from "@mt_tickets/common";
import { body } from "express-validator";
import express, { Request, Response } from "express";

const router = express.Router();

router.post(
  "/api/payments",
  requireAuth,
  [body("token").not().isEmpty().withMessage("token is required")],
  [body("orderId").not().isEmpty().withMessage("orderId is required")],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send({ success: true });
  }
);

export { router as createChargeRouter };
