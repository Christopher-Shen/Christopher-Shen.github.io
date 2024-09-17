import React from "react";
import RecipePage from "../../components/RecipePage";
import chickenAdoboImg from "../../assets/chicken_adobo.jpg";

const ChickenAdoboPage: React.FC = () => {
  const recipeData = {
    title: "Chicken Adobo",
    image: chickenAdoboImg,
    ingredients: [
      {
        title: "",
        items: [
          { name: "Coconut oil", amount: "2 tablespoons" },
          { name: "Garlic cloves, roughly chopped", amount: "15" },
          { name: "Whole black peppercorns", amount: "2 teaspoons" },
          { name: "Freshly ground black pepper", amount: "1 teaspoon" },
          { name: "Red-pepper flakes", amount: "½ teaspoon" },
          {
            name: "Bone-in, skin-on chicken drumsticks and thighs",
            amount: "4 pounds",
          },
          { name: "Unsweetened coconut milk", amount: "1 cup" },
          { name: "Coconut vinegar", amount: "½ cup" },
          { name: "Soy sauce", amount: "½ cup" },
          { name: "Fresh bay leaves", amount: "8" },
          { name: "Cooked rice, for serving", amount: "" },
        ],
      },
    ],
    steps: [
      "Place the chicken in a large resealable bag or container. Add the soy sauce and garlic, move the " +
      "chicken around to coat, seal the bag or cover the container, and " +
      "marinate in the fridge for 1 to 8 hours.",

      "In a large pan (with a lid), heat the oil over medium-high. When " +
      "shimmering, adjust heat to medium, scrape off any garlic clinging to " +
      "the chicken (reserving the garlic along with the marinade) and add " +
      "the pieces to the pan. Brown the chicken, about 3 minutes per side. " +
      "Dont overcrowd the pan, you might have to do this in batches.",

      "When all the chicken has been browned (if working in batches, return " +
      "all the chicken pieces to the pan), add the marinade with the garlic, " +
      "bay leaves, peppercorns and ¾ cup water. Adjust heat to high and " +
      "bring to a boil, then decrease heat to low, cover and cook until the " +
      "chicken is tender, about 40 minutes.",

      "Adjust heat to medium and add the vinegar and sugar, if using. " +
      "Simmer, uncovered, for 10 minutes, until the flavors come together. " +
      "The sharpness of the vinegar will soften as the adobo cooks. Taste " +
      "the adobo (sauce). It should have a pleasant tang from the vinegar, " +
      "enough to make you take notice but not overpower the other flavors. " +
      "If it's too sour, balance the adobo by adding more sugar. If not " +
      "sour enough, add a little more vinegar. You can reduce the sauce " +
      "further by cooking it longer, if desired. Serve over rice, spooning " +
      "the sauce over the chicken.",
    ],
  };

  return <RecipePage {...recipeData} />;
};

export default ChickenAdoboPage;