const express = require('express');
const { getAllPokemons, addPokemon, updatePokemon, deletePokemon } = require('../controllers/pokemonController');

const router = express.Router();

router.get('/', getAllPokemons);
router.post('/', addPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

module.exports = router;
