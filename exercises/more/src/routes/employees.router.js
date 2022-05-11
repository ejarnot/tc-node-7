
    import express from "express";
    import * as employeesController from "../controllers/employees.controller.js";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await employeesController.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  