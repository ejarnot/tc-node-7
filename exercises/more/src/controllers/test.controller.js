
        import query from "../db/utils";

        export const example = async () => {
            return await query("SELECT * FROM table")
        }
      