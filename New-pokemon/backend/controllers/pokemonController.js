const { readData, writeData } = require('../utils/fileUtils');

const getAllPokemons = (req, res) => {
    const data = readData();
    res.json(data.pokemons);
};

const addPokemon = (req, res) => {
    const data = readData();
    const newPokemon = req.body;
    data.pokemons.push(newPokemon);
    writeData(data);
    res.status(201).json(newPokemon);
};

const updatePokemon = (req, res) => {
    const data = readData();
    const pokemonId = req.params.id;
    const updatedPokemon = req.body;
    const pokemonIndex = data.pokemons.findIndex(pokemon => pokemon.id === pokemonId);
    if (pokemonIndex !== -1) {
        data.pokemons[pokemonIndex] = updatedPokemon;
        writeData(data);
        res.json(updatedPokemon);
    } else {
        res.status(404).json({ message: 'Pokemon not found' });
    }
};

const deletePokemon = (req, res) => {
    const data = readData();
    const pokemonId = req.params.id;
    const pokemonIndex = data.pokemons.findIndex(pokemon => pokemon.id === pokemonId);
    if (pokemonIndex !== -1) {
        const deletedPokemon = data.pokemons.splice(pokemonIndex, 1);
        writeData(data);
        res.json(deletedPokemon);
    } else {
        res.status(404).json({ message: 'Pokemon not found' });
    }
};

module.exports = { getAllPokemons, addPokemon, updatePokemon, deletePokemon };
