import React from "react";
import RecipePage from "../../components/RecipePage";
import boiledBeefSlicesImg from "../../assets/boiled_beef_slices.jpg";

const BoiledBeefSlicesPage: React.FC = () => {
  const recipeData = {
    title: "Boiled Beef Slices",
    image: boiledBeefSlicesImg,
    ingredients: [
      {
        title: "Sauce",
        items: [
          { name: "Oyster Sauce", amount: "1 tbsp" },
        ],
      },
    ],
    steps: [
      "Heat up the oil, put: cilantro, celery, onion, leek in.",
      "Fry the ground beef with minced ginger, garlic, minced red pepper/yellow pepper until beef browns.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default BoiledBeefSlicesPage;