const searchForm = document.querySelector(".js-search-form");
const contrulInput = document.querySelector(".form-control");
const cardContainer = document.querySelector(".js-card-container");
const BASE_URL = "https://pokeapi.co/api/v2/";
const pokemonTamplate = document.querySelector("#pokemon-templ")

// console.log(pokemonTamplate);

const renderPokemon = (pokemon) =>{
  const template = Handlebars.compile(pokemonTamplate.innerHTML);
  const murkup = template(pokemon);
  cardContainer.innerHTML = murkup;
}

const fetchPokemon = (id) => {
  return fetch(`${BASE_URL}pokemon/${id}`).then((response) => {
    // console.log(response)
    return response.json();
  });
};

const onFormSubmit = (event) => {
  event.preventDefault();
  // let query = contrulInput.value ;
  // console.log(query) // так можна але не треба
  let query = event.currentTarget.elements.query.value;
  // console.log(event.target)
  // console.log(event.currentTarget)
  // console.log(event.currentTarget.elements)
  // console.log(event.currentTarget.elements.query)
  if(query.trim() === ""){
    return
  }
  console.log(event.currentTarget.elements.query.value);
  fetchPokemon(query).then((pokemon) => {
    renderPokemon(pokemon)
  })
  .catch(error => console.log(error))
  .finally(() => {
searchForm.reset()
  })
};

searchForm.addEventListener("submit", onFormSubmit);
