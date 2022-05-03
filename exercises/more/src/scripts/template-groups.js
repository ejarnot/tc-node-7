const { createInterface } = require("readline");
const { writeFile, existsSync } = require("fs");
const { join } = require("path");

class CreateGroup {
  constructor(name) {
    this.groupName = name.toLowerCase();
    this.controllerFileName = `${name.toLowerCase()}.controller.js`;
    this.routerFileName = `${name.toLowerCase()}.router.js`;
  }

  async create() {
    console.log(
      `Templating ./src/controllers/${this.controllerFileName} and ./src/routes/${this.routerFileName}...\n`
    );

    try {
      // Create a new controller file
      this.createController();
      // Create a new router file
      this.createRouter();
    } catch (e) {
      console.error(e);
      console.log(`Couldn't create ${this.name} group :/`);
    }

    console.log("\n----------\nHappy hacking!\n----------\n");
  }

  createController() {
    let controllerFilePath = join(
      __dirname,
      `../controllers/${this.controllerFileName}`
    );

    if (existsSync(controllerFilePath)) {
      console.log(`${this.controllerFileName} already exists -`);
    } else {
      writeFile(controllerFilePath, this.controllerTemplate(), (err) => {
        if (err) {
          console.error(err);
          console.log(`Failed to create ${this.controllerFileName} X`);
        } else {
          console.log(`Created ${this.controllerFileName} ✅`);
        }
      });
    }
  }

  createRouter() {
    let routerFilePath = join(__dirname, `../routes/${this.routerFileName}`);

    if (existsSync(routerFilePath)) {
      console.log(`${this.routerFileName} already exists -`);
    } else {
      writeFile(routerFilePath, this.routerTemplate(), (err) => {
        if (err) {
          console.error(err);
          console.log(`Failed to create ${this.routerFileName} X`);
        } else {
          console.log(`Created ${this.routerFileName} ✅`);
        }
      });
    }
  }

  controllerTemplate() {
    return `
        import query from "../db/utils";

        export const example = async () => {
            return await query("SELECT * FROM table")
        }
      `;
  }

  routerTemplate() {
    return `
    import express from "express";
    import * as ${this.groupName}Controller from "../controllers/${this.controllerFileName}";

    const router = express.Router();

    router.get("/", async (req, res, next) => {
        try {
            let results = await ${this.groupName}Controller.example();
            res.json(results);
        } catch(e) {
            next(e)
        }
    })

    export default router;
  `;
  }
}

const app = createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.question("Group Name:\t", async (name) => {
  let args = name.split(" ");
  if (args.length > 1) {
    for (let group of args) {
      await new CreateGroup(group).create();
    }
  } else if (args[0].trim()) {
    await new CreateGroup(name).create();
  }
  // process.exit(0);
});
