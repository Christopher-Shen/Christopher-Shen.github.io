import React from "react";
import RecipePage from "../../components/RecipePage";
import groundBeefSauceImg from "../../assets/ground_beef_sauce.jpg";

const GroundBeefSaucePage: React.FC = () => {
  const recipeData = {
    title: "Ground Beef Sauce",
    image: groundBeefSauceImg,
    ingredients: [
      {
        title: "Sauce",
        items: [
          { name: "Sweet fermented flour paste", amount: "2 tbsp" },
          { name: "Soy bean paste", amount: "4 tbsp" },
          { name: "Oyster Sauce", amount: "2 tbsp" },
          { name: "Cooking wine", amount: "3 tbsp" },
          { name: "Soy sauce", amount: "2 tbsp" },
          { name: "Sugar", amount: "2 tbsp" },
        ],
      },
      {
        title: "Everything else",
        items: [
          { name: "Ground beef", amount: "1 lb" },
          { name: "Cilantro", amount: "" },
          { name: "Celery", amount: "" },
          { name: "Onion", amount: "" },
          { name: "Peppers", amount: "" },
          { name: "Garlic", amount: "6 cloves, minced" },
          { name: "Ginger", amount: "1 tbsp, minced" },
        ],
      },
    ],
    steps: [
      "Heat oil until shimmering, add ground beef and cook until browned.",
      "Add garlic and ginger and cook until fragrant.",
      "Add in diced peppers. These can be any peppers just depends on how spicy you want it.",
      "Add in the sauce slurry and simmer for about 20 minutes or until the sauce thickens.",
      "Add white sesame seeds and garnish with cilantro.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default GroundBeefSaucePage;