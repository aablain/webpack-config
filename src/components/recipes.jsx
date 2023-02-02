import { useState } from "react";

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

export const Recipes = () => {
  const [plans, updatePlans] = useState(null);

  return (
    <div>
      <button
        onClick={() => updatePlans(JSON.stringify(elvenShieldRecipe, null, 2))}
      >
        Shield
      </button>
      <button
        onClick={() =>
          updatePlans(JSON.stringify(elvenGauntletsRecipe, null, 2))
        }
      >
        Gauntlets
      </button>

      <div>{plans ? plans : null}</div>
    </div>
  );
};
