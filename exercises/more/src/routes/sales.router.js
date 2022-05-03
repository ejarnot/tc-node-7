
    import express from "express";
    import * as salesController from "../controllers/sales.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await salesController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  