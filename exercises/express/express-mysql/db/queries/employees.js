const query = require("../models");

const getAll = async () => {
  return await query("SELECT * FROM employees;");
};

const getOneById = async (EmployeeId) => {
  return await query("SELECT * FROM employees WHERE EmployeeId = ?", [
    EmployeeId,
  ]);
};

const createOne = async (employee) => {
  return await query("INSERT INTO employees SET ?", [employee]);
};

const updateOne = async (employeeDetails, EmployeeId) => {
  return await query("UPDATE employees SET ? WHERE EmployeeId = ?", [
    employeeDetails,
    EmployeeId,
  ]);
};

const deleteOne = async (EmployeeId) => {
  return await query("DELETE FROM employees WHERE EmployeeId = ?", [
    EmployeeId,
  ]);
};

module.exports = {
  getAll,
  getOneById,
  createOne,
  updateOne,
  deleteOne
};
