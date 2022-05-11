import query from "../db/utils";

export const findAll = async () => {
  return await query("SELECT * FROM employees");
};
