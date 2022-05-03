
    import express from "express";
    import * as categoriesController from "../controllers/categories.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await categoriesController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  