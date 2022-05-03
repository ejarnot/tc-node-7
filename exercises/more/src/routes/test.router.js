
    import express from "express";
    import * as testController from "../controllers/test.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await testController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  