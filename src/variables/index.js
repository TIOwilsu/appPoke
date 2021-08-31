import Vue from "vue";

const variables = {
  $api: "https://pokeapi.co/api/v2/",
};

Object.keys(variables).map((key) => {
  Vue.prototype[key] = variables[key];
});
