import React from "react";
import RecipePage from "../../components/RecipePage";
import bokChoyImg from "../../assets/bok_choy.jpg";

const BokChoyPage: React.FC = () => {
  const recipeData = {
    title: "Bok Choy",
    image: bokChoyImg,
    ingredients: [
      {
        title: "",
        items: [
          { name: "Bok choy", amount: "" },
          { name: "Garlic", amount: "" },
          { name: "Oyster sauce", amount: "" },
          { name: "Soy sauce", amount: "" },
          { name: "Sugar", amount: "" },
          { name: "Garlic", amount: "" },
          { name: "Fish sauce", amount: "" },
        ],
      },
    ],
    steps: [
      "Boil/Blanch the bok choy until tender.",
      "Mix oyster sauce, soy sauce, sugar, and fish sauce together. This is to taste but close to 1:1:1:1 ratio.",
      "Heat oil in a pan, add garlic, some water, and the sauce. Simmer until the sauce is thickened.",
      "Pour sauce over the bok choy and serve.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default BokChoyPage;