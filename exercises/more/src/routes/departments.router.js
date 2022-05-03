
    import express from "express";
    import * as departmentsController from "../controllers/departments.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await departmentsController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  