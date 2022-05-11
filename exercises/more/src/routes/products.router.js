
    import express from "express";
    import * as productsController from "../controllers/products.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await productsController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  