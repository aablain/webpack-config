import { useState } from "react";
import WoahGIF from "../images/giphy-2.gif";

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

      <img src={WoahGIF} style={{ width: "50px" }} />

      <div>{plans ? plans : null}</div>

      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
      </ul>
    </div>
  );
};
