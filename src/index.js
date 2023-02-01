import "./styles/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  refinedMoonstone: 2,
};

console.log(elvenGauntletsRecipe);
console.log(elvenShieldRecipe);
