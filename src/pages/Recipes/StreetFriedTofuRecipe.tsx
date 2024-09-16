import React from "react";
import RecipePage from "../../components/RecipePage";
import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";

const StreetFriedTofuRecipe: React.FC = () => {
  const recipeData = {
    title: "Street Flavor Tofu",
    image: streetFriedTofuImg,
    ingredients: [
      {
        title: "Batter",
        items: [
          { name: "Flour", amount: "1 cup" },
          { name: "Egg", amount: "1" },
        ],
      },
      {
        title: "Sauce",
        items: [
          { name: "Chili Powder", amount: "1 tbsp" },
          { name: "White Sesame Seeds", amount: "1 tbsp" },
          { name: "Garlic", amount: "2 cloves, minced" },
          { name: "Soy Sauce", amount: "2 tbsp" },
          { name: "Sugar", amount: "1 tsp" },
          { name: "Cumin Powder", amount: "1/2 tsp" },
          { name: "Vinegar", amount: "1 tbsp" },
        ],
      },
    ],
    steps: [
      "Cut tofu into cubes.",
      "Dredge tofu in flour, then egg.",
      "Fry tofu cubes in a pan until golden brown.",
      "Mix sauce ingredients in a bowl.",
      "Toss fried tofu with the sauce.",
      "Serve hot and enjoy!",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default StreetFriedTofuRecipe;