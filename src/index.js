let pokemons = [
    { "nome": "POOCHYENA", "lv": "2", "sexo": "M", "hp": "13 / 13" },
    { "nome": "ZIGZAGOON", "lv": "2", "sexo": "F", "hp": "13 / 13" },
    { "nome": "DRAGONITE", "lv": "5", "sexo": "M", "hp": "25 / 25" },
    { "nome": "DRAGONITE", "lv": "5", "sexo": "F", "hp": "24 / 24" },
    { "nome": "DRAGONITE", "lv": "5", "sexo": "F", "hp": "24 / 24" },
    { "nome": "POOCHYENA", "lv": "3", "sexo": "F", "hp": "15 / 15" },
    { "nome": "WURMPLE", "lv": "2", "sexo": "M", "hp": "7 / 14" },
  ];

for(let i = 0; i < pokemons.length; i++) {
    let pokemonCadastrado = pokemons[i];
    console.log(pokemonCadastrado.nome + " Cadastrado com sucesso");
}