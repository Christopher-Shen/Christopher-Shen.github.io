import React from "react";
import RecipePage from "../../components/RecipePage";
import streetFriedTofuImg from "../../assets/street_fried_tofu.jpg";

const StreetFriedTofuRecipe: React.FC = () => {
  const recipeData = {
    title: "Street Fried Tofu",
    image: streetFriedTofuImg,
    ingredients: [
      {
        title: "Batter",
        items: [
          { name: "Flour", amount: "2 cups" },
          { name: "Egg", amount: "2" },
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
          { name: "Cumin Powder", amount: "1 tsp" },
          { name: "Vinegar", amount: "2 tbsp" },
        ],
      },
    ],
    steps: [
      "Cut tofu into cubes and leave them out for a little to let them dry a bit.",
      "Prep the sauce by combing all the ingredients in a small bowl.",
      "Dredge tofu in flour, then egg and fry in a pan until a golden shell is made",
      "Once all the tofu is fried, add all the tofu and sauce into a pan and simmer until the sauce thickens.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default StreetFriedTofuRecipe;