const express = require("express");
const { readFile, writeFile, rmdirSync } = require("fs");
const { join } = require("path");

const router = express.Router();
const pokeFile = join(__dirname, "../../public/pokemon.json");

router.get("/test", (req, res, next) => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

router.get("/pokemon", (req, res, next) => {
  // name
  // num/id
  const { name, id } = req.query;

  if (name || id) {
    try {
      // read file
      readFile(pokeFile, (err, contents) => {
        // parse the content
        let { pokemon } = JSON.parse(contents.toString());
        // find a match
        let foundPokemon = pokemon.find(
          (p) => p.name.toLowerCase() == name?.toLowerCase() || p.id == id
        );
        // send match back to client
        res.json(
          foundPokemon || {
            msg: `No pokemon exists with name = ${name} or id = ${id}.`,
          }
        );
      });
    } catch (err) {
      next(err);
    }
  } else {
    try {
      res.sendFile(pokeFile);
    } catch (err) {
      next(err);
    }
  }
});

router.post("/pokemon", (req, res, next) => {
  let newPokemon = req.body;

  try {
    readFile(pokeFile, (err, contents) => {
      if (err) {
        next(err);
      } else {
        // parse contents
        let { pokemon } = JSON.parse(contents.toString());
        // give the pokemon an id
        let newId = pokemon[pokemon.length - 1].id + 1;
        newPokemon.id = newId;
        newPokemon.num = String(newId).padStart(3, "0");
        // add the new pokemon to the list
        pokemon.push(newPokemon);
        // overwrite the file
        writeFile(pokeFile, JSON.stringify({ pokemon }), (err) => {
          if (err) {
            next(err);
          }

          // send a response
          res.json({
            msg: `Successfully added new pokemon to list`,
            insertedId: newId,
          });
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

router.put("/pokemon", (req, res, next) => {
  let updatedDetails = req.body;
  let { id } = req.query;

  if (isNaN(parseInt(id))) {
    res
      .status(400)
      .json({ msg: "Invalid request. You must provide a valid pokemon id." });
  }

  try {
    readFile(pokeFile, (err, contents) => {
      if (err) {
        next(err);
      }

      // parse the contents from pokeFile
      let { pokemon } = JSON.parse(contents.toString());

      let updatedPokemon = pokemon.map((p) => {
        // find the pokemon to update
        if (p.id == id) {
          // update it
          p = { ...p, ...updatedDetails };
        }

        return p;
      });

      // overwrite the file
      writeFile(
        pokeFile,
        JSON.stringify({ pokemon: updatedPokemon }),
        (err) => {
          if (err) {
            next(err);
          }

          // send a response
          res.json({ msg: `Successfully updated pokemon with id ${id}` });
        }
      );
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/pokemon", (req, res, next) => {
  let { id } = req.query;

  if (isNaN(parseInt(id)))
    res
      .status(400)
      .json({ msg: "Invalid request. You must provide a valid pokemon id." });

  try {
    readFile(pokeFile, (err, contents) => {
      // parse the contents
      let { pokemon } = JSON.parse(contents.toString());
      // find the pokemon to delete
      let filteredPokemon = pokemon.filter((p) => p.id != id);
      // overwrite the file
      writeFile(
        pokeFile,
        JSON.stringify({ pokemon: filteredPokemon }),
        (err) => {
          if (err) {
            next(err);
          } else {
            // send confirmation to client
            res.json({ msg: `Successfully deleted pokemon with id ${id}.` });
          }
        }
      );
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
