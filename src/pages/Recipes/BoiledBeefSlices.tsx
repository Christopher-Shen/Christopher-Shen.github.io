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
          { name: "Oyster sauce", amount: "1 tbsp" },
          { name: "Soy sauce", amount: "4 tbsp" },
          { name: "Fish sauce", amount: "1 tbsp" },
          { name: "Sugar", amount: "1 tbsp" },
          { name: "Potatoe starch", amount: "" },
        ],
      },
      {
        title: "Everything else",
        items: [
          { name: "Chuck roast", amount: "1/2 lb" },
          { name: "Garlic", amount: "6 cloves, minced" },
          { name: "Cilantro", amount: "" },
        ],
      },
    ],
    steps: [
      "Slice the chuck roast into thin slices and marinate in soy sauce, flour, and oil for at least 30 minutes.",
      "Boil the beef slices in water for 10 minutes or until cooked through. Set aside.",
      "Add oil and wait until shimmering, add half of the garlic and cook until fragrant. Add in the sauce, potatoe starch, and water. Simmer until the sauce thickens.",
      "Add in the beef slices and simmer for another 2 minutes. Add in the remaining garlic and serve. Optionally add in cilantro as a garnish.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default BoiledBeefSlicesPage;