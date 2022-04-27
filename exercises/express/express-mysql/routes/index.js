const express = require("express");
const db = require("../db/queries");

const router = express.Router();

// Test Route
router.get("/hello", (req, res, next) => {
  try {
    res.send("world");
  } catch (e) {
    next(e);
  }
});

// Get All Employees, or One Employee By Id
router.get("/employees/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  try {
    if (id) {
      // If not a valid id
      // respond with an error
      if (isNaN(parseInt(id))) {
        res.status(400).json({
          msg: `You must provide a valid EmployeeId of type: int.`,
          value: id,
          success: false,
        });
      }

      data = await db.employees.getOneById(parseInt(id));
    } else {
      data = await db.employees.getAll();
    }

    res.json(data);
  } catch (e) {
    next(e);
  }
});

router.post("/employees", async (req, res, next) => {
  let employeeDetails = req.body;

  try {
    let { insertId } = await db.employees.createOne(employeeDetails);
    res.json({ msg: `Successfully added new employee`, id: insertId });
  } catch (e) {
    next(e);
  }
});

router.put("/employees/:id", async (req, res, next) => {
  let employeeDetails = req.body;
  let { id } = req.params;

  try {
    if (isNaN(parseInt(id))) {
      res.status(400).json({
        msg: `You must provide a valid EmployeeId of type: int.`,
        value: id,
        success: false,
      });
    }

    id = parseInt(id);

    let result = await db.employees.updateOne(employeeDetails, id);
    res.json({ msg: `Successfully updated existing employee`, id });
  } catch (e) {
    next(e);
  }
});

router.delete("/employees/:id", async (req, res, next) => {
  let { id } = req.params;

  try {
    if (isNaN(parseInt(id))) {
      res.status(400).json({
        msg: `You must provide a valid EmployeeId of type: int.`,
        value: id,
        success: false,
      });
    }

    id = parseInt(id);

    let result = await db.employees.deleteOne(id);
    res.json({ msg: `Successfully deleted employee`, id });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
