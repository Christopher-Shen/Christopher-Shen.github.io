import React from "react";
import RecipePage from "../../components/RecipePage";
import squidAndChiveImg from "../../assets/squid_and_chives.jpg";

const SquidAndChivePage: React.FC = () => {
  const recipeData = {
    title: "Squid and Chive",
    image: squidAndChiveImg,
    ingredients: [
      {
        title: "",
        items: [
          { name: "Squid", amount: "1 large size" },
          { name: "Chive Flowers", amount: "1 bunch" },
          { name: "Soy Sauce", amount: "" },
          { name: "White Pepper", amount: "" },
          { name: "Potato starch", amount: "" },
          { name: "Garlic", amount: "" },
        ],
      },
    ],
    steps: [
      "Remove the skin of the squid and remove the skeleton/cartilage. Cut it into flower shapes.",
      "Bring a pot of water to a boil and quickly blanch the squid for 10 seconds or until it begins to curl.",
      "Cut the chive flowers into 1 inch pieces and set aside.",
      "In a small bowl, mix together the soy sauce, white pepper, and potato starch. Add a small amount of water to make a paste.",
      "Heat a wok or large pan over high heat until it is very hot. Add the squid and stir-fry for 1 minute or until it is cooked through.",
      "Add the chive flowers and stir-fry for another 30 seconds.",
      "Remove the squid and chive flowers from the wok and set aside.",
      "In the same wok, add a small amount of oil and heat over high heat. Add the garlic and stir-fry for 30 seconds or until it is fragrant.",
      "Add the squid and chive flowers back to the wok and stir-fry for another 30 seconds.",
      "Add the soy sauce mixture and stir-fry for another 30 seconds or until the squid is fully cooked and the sauce is thickened.",
      "Serve hot with rice or as a side dish.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default SquidAndChivePage;