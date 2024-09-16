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
          { name: "甜面酱", amount: "" },
          { name: "黄豆酱 (soy bean paste)", amount: "" },
          { name: "Oyster Sauce", amount: "" },
          { name: "Soy Sauce", amount: "" },
          { name: "Alcohol", amount: "" },
          { name: "Sugar", amount: "" },
          { name: "Green Onion", amount: "" },
          { name: "Cilantro", amount: "" },
          { name: "Celery", amount: "" },
          { name: "Onion", amount: "" },
          { name: "Peppers", amount: "" },
        ],
      },
    ],
    steps: [
      "Heat up the oil, put: cilantro, celery, onion, leek in.",
      "花椒，八角，香叶，小茴香， 桂皮",
      "Fry the ground beef with minced ginger, garlic, minced red pepper/yellow pepper until beef browns",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default GroundBeefSaucePage;