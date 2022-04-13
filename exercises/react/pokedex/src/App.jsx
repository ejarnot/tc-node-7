import "./App.css";
import { useEffect, useState } from "react";
import { getKnownAttributes } from "./utils/pokemon";

function App() {
  const [refList, setRefList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [knownTypes, setKnownTypes] = useState([]);
  const [knownWeaknesses, setKnownWeaknesses] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [weaknessFilter, setWeaknessFilter] = useState([]);

  async function fetchPokemon() {
    let res = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    let data = await res.json();
    let { types, weaknesses } = getKnownAttributes(data.pokemon);
    setKnownTypes(types);
    setKnownWeaknesses(weaknesses);
    setRefList(data.pokemon);
    setDisplayList(data.pokemon);
  }

  function filterPokemon(name, types, weaknesses) {
    setSearchName(name);

    let filteredList = refList.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase()) &&
        pokemon.type.filter((type) => types.includes(type)).length >=
          types.length &&
        pokemon.weaknesses.filter((weakness) => weaknesses.includes(weakness))
          .length >= weaknesses.length
    );

    setDisplayList(filteredList);
  }

  function updateTypeFilter(e) {
    let tempTypeFilter = [...typeFilter];

    if (e.target.checked && !typeFilter.includes(e.target.value)) {
      tempTypeFilter.push(e.target.value);
      setTypeFilter(tempTypeFilter);
    } else {
      tempTypeFilter = tempTypeFilter.filter((type) => type !== e.target.value);
      setTypeFilter(tempTypeFilter);
    }

    filterPokemon(searchName, tempTypeFilter, weaknessFilter);
  }

  function updateWeaknessFilter(e) {
    let tempWeaknessFilter = [...weaknessFilter];

    if (e.target.checked && !weaknessFilter.includes(e.target.value)) {
      tempWeaknessFilter.push(e.target.value);
      setWeaknessFilter(tempWeaknessFilter);
    } else {
      tempWeaknessFilter = tempWeaknessFilter.filter(
        (weakness) => weakness !== e.target.value
      );
      setWeaknessFilter(tempWeaknessFilter);
    }

    filterPokemon(searchName, typeFilter, tempWeaknessFilter);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <form>
        <label htmlFor="searchName">Pokemon Search</label>
        <input
          type="text"
          name="searchName"
          id="searchName"
          value={searchName}
          onChange={(e) => filterPokemon(e.target.value, typeFilter, weaknessFilter)}
        />
        <details>
          <summary>Pokemon Type</summary>
          {knownTypes.map((t) => {
            return (
              <div key={t}>
                <label htmlFor={`${t}Type`}>{t}</label>
                <input
                  type="checkbox"
                  name="searchType"
                  id={`${t}Type`}
                  value={t}
                  onChange={updateTypeFilter}
                />
              </div>
            );
          })}
        </details>
        <details>
          <summary>Pokemon Weaknesses</summary>
          {knownWeaknesses.map((w) => {
            return (
              <div key={w}>
                <label htmlFor={`${w}Weakness`}>{w}</label>
                <input
                  type="checkbox"
                  name="searchType"
                  id={`${w}Weakness`}
                  value={w}
                  onChange={updateWeaknessFilter}
                />
              </div>
            );
          })}
        </details>
      </form>
      <div className="card-container">
        {displayList.map((pokemon) => {
          return (
            <div key={pokemon.id} className="card">
              <small>{pokemon.num}</small>
              <h3>{pokemon.name}</h3>
              <details>
                <summary>Types</summary>
                <ul>
                  {pokemon.type.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </details>
              <details>
                <summary>Weaknesses</summary>
                <ul>
                  {pokemon.weaknesses.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
