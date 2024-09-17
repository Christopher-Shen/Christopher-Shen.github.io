import React from "react";
import RecipePage from "../../components/RecipePage";
import cabbageStirfryImg from "../../assets/cabbage_stirfry.jpg";

const CabbageStirfryPage: React.FC = () => {
  const recipeData = {
    title: "Cabbage Stirfry",
    image: cabbageStirfryImg,
    ingredients: [
      {
        title: "",
        items: [
          { name: "Cabbage", amount: "" },
          { name: "Carrots", amount: "" },
          { name: "Onions", amount: "" },
          { name: "Garlic", amount: "" },
          { name: "Chicken (any meat ok)", amount: "" },
          { name: "Oyster sauce", amount: "" },
          { name: "Soy sauce", amount: "" },
          { name: "Vinegar", amount: "" },
          { name: "Cooking wine", amount: "" },
        ],
      },
    ],
    steps: [
      "Marinate chicken in shaoxing wine and soy sauce for at least 10 minutes.",
      "Mise en place the carrot, cabbage, onion, and garlic.",
      "Half cook chicken, remove from pan and set aside. Add in the vegetables and cook until fragrant.",
      "Add in the chicken back into the pan and add in the oyster sauce, soy sauce, vinegar, and sugar. Stir fry until the chicken is cooked through.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default CabbageStirfryPage;