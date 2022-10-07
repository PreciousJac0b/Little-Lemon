import React, { useState } from "react";

// const MealData = {
//   meals: ["Sushi", "Bacon", "Broccolli", "Sausage", "Sushi", "Bacon", "Broccolli", "Sausage"]
// }

const MealData = [
  {
    id: "d0975326-7b43-479e-a109-cb818abec62d",
    title: "Chocolate Mousse Torte Cake",
    description:
      "Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Gaston’s Bakery",
    expDate: "05/15/2017",
    mfdDate: "05/10/2017",
    size: "7 inch",
    price: 42.95,
    stock: "5",
    images: ["/public/images/chocolate-mousse-torte-cake.png"],
    suggestion: [
      "Serves 6 to 8",
      "Ships Nationwide in Refrigerated Packaging",
      "Certified Kof-K Kosher",
    ],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "ebed34eb-7533-49f5-91cb-37c12f20d4b1",
    title: "Triple Chocolate Enrobed Brownie Cake",
    description:
      "This is the perfect cake for the true chocolate lover. Our dense, moist brownie cake is covered in not one, but three layers of decadent chocolate. The cake is coated with a rich chocolate fondant icing, showered with dark chocolate shavings and then finally drizzled with milk and dark chocolate glazes. This triple-chocolate delight is sure to satisfy any sweet tooth. Each cake is delivered in an elegant gift box with a chocolate occasion plaque and personalized greeting card to celebrate any occasion.",
    category: "Bakery",
    brand: "Gaston’s Bakery",
    expDate: "05/16/2017",
    mfdDate: "05/12/2017",
    size: "7 inch",
    price: 39.95,
    stock: "2",
    images: ["/public/images/triple-chocolate-enrobed-brownie-cake.png"],
    suggestion: ["Serves 6 to 8", "Certified KOF-K Kosher"],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "fb79562d-e470-4445-990b-06aa875d3e97",
    title: "Reddi Wip Dairy Whipped Topping Extra Creamy Aerosol Refrigerated",
    description:
      "Reddi Wip® Extra Creamy Sweetened Dairy Whipped Topping. Milk from cows. Not treated with artificial growth hormone*. Made with real cream. No artificial flavors or sweeteners. 15 calories per 2 tbsp. Ultra-pasteurized.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/14/2017",
    mfdDate: "08/14/2017",
    size: "6.5oz",
    price: 3.19,
    stock: "7",
    images: [
      "/public/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-1.jpg",
      "/public/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-2.jpg",
      "/public/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-3.jpg",
    ],
    suggestion: [
      " Shake it! Shake it! 4 times before use then remove cap.",
      "Turn can completely upside down and press nozzle sideways with finger.",
      "Rinse nozzle thoroughly with warm water. ",
    ],
    allegations: [
      "Contains: milk.",
      "Deliberately concentrating and inhaling the contents can be harmful or fatal.",
      "Contents under pressure.",
      "Do not expose to temperatures above 120 degrees F.",
      "Do not puncture or incinerate can.",
      "Keep out of the reach of children.",
      "Choking hazard, cap contains small parts.",
    ],
  },
  {
    id: "61c79187-76f6-4747-a5cf-d7e26dcea535",
    title: "Red Velvet Chocolate Cake",
    description:
      "A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Cake Factory",
    expDate: "05/18/2017",
    mfdDate: "05/15/2017",
    size: "7 inch",
    price: 42.95,
    stock: "4",
    images: ["/public/images/red-velvet-chocolate-cake.png"],
    suggestion: [
      "Serves 6 to 8",
      "Certified KOF-K Kosher",
      "Ships Nationwide in Refrigerated Packaging",
    ],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    id: "b72f5d8e-e586-47cd-aba7-202814ca6609",
    title: "Rice Dream Original Non-Dairy Beverage Organic",
    description:
      "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium \u0026 vitamin D. Easy to digest. USDA Organic. Non GMO project.",
    category: "Dairy",
    brand: "Rice Dream",
    expDate: "05/14/2017",
    mfdDate: "05/17/2017",
    size: "64 oz",
    price: 5.19,
    stock: "21",
    images: [
      "/public/images/rice-dream-original-non-dairy-beverage-organic-1.jpg",
      "/public/images/rice-dream-original-non-dairy-beverage-organic-2.jpg",
    ],
    suggestion: [
      "Shake well.",
      "Serve chilled.",
      "Stays fresh 7-10 days in refrigerator after opening.",
    ],
    allegations: [
      "Not for use as an infant formula.",
      "For children under age 5, consult your child's doctor.",
    ],
  },
  {
    id: "5ffd3e0b-2a31-4d97-aced-e242b5061b24",
    title: "Member's Mark Mini Plain Sliced Bagels",
    description:
      "Kettle boiled like they do in the Big Apple, these heat-and-serve mini bagels are made with premium ingredients like real yeast and triple-filtered water.",
    category: "Bakery",
    brand: "Member's Mark",
    expDate: "05/28/2017",
    mfdDate: "05/15/2017",
    size: "12ct",
    price: 20.99,
    stock: "3",
    images: ["/public/images/members-mark-mini-plain-sliced-bagels.jpg"],
    suggestion: [
      "Authentic New York-style kettle boiled bagels",
      "Soft, chewy and delicious",
      "The taste and quality you'd expect from your local bagel shop",
      "Mini sized for snacking",
    ],
    allegations: [],
  },
  {
    id: "b7399b85-6860-4b86-b169-3dc068d444ae",
    title: "Daiya Dairy Free Greek Yogurt Black Cherry",
    description:
      "Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich \u0026 creamy \u0026 lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/13/2017",
    mfdDate: "05/15/2017",
    size: "5.3 oz",
    price: 1.95,
    stock: "15",
    images: [
      "/public/images/daiya-dairy-free-greek-yogurt-black-cherry-1.jpg",
      "/public/images/daiya-dairy-free-greek-yogurt-black-cherry-2.jpg",
      "/public/images/daiya-dairy-free-greek-yogurt-black-cherry-3.jpg",
    ],
    suggestion: ["Keep refrigerated."],
    allegations: ["Contains coconut."],
  },
  {
    id: "c8d5c1c3-15e8-4112-a043-a0d33a8de28d",
    title: "Daily Chef Mini Candy Cookies",
    description: "Delicious mini candy cookies baked fresh in Club.",
    category: "Bakery",
    brand: "Daily Chef",
    expDate: "05/30/2017",
    mfdDate: "05/15/2017",
    size: "36ct",
    price: 28.99,
    stock: "12",
    images: ["/public/images/daily-chef-mini-candy-cookies.jpg"],
    suggestion: [],
    allegations: [],
  },
  {
    id: "74835a8d-b17b-4653-b1b1-fc58b4df19b9",
    title:
      "So Delicious Cultured Coconut Milk Yogurt Vanilla Dairy \u0026 Soy Free Organic",
    description:
      "So Delicious® Dairy Free Coconut Milk Yogurt Alternative Vanilla. Made with organic coconut. Net Wt. 5.3 oz (150 g). Certified Vegan. Certified Gluten-Free®.",
    category: "Dairy",
    brand: "So Delicious",
    expDate: "05/14/2017",
    mfdDate: "05/18/2017",
    size: "5.3 oz",
    price: 2.09,
    stock: "15",
    images: [
      "/public/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-1.jpg",
      "/public/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-2.jpg",
    ],
    suggestion: ["Keep refrigerated."],
    allegations: [
      "Contains coconut.",
      "Produced in a facility that also processes other tree nuts and soy.",
      "We apply strict quality control measures to prevent contamination by undeclared food allergens",
    ],
  },
  {
    id: "92de4c84-2f09-43c3-88e2-c0a000b93037",
    title: "Gaston’s Bakery Small Puff Pastry Squares",
    description:
      "Easily create delicious pies, savory hors d’oeuvres, tarts, baklava and more with these ready-to-use puff pastry squares. Puff pastry bakes up light and flaky and pairs perfectly with a wide range of toppings and fillings.",
    category: "Bakery",
    brand: "Gaston’s Bakery",
    expDate: "05/18/2017",
    mfdDate: "05/13/2017",
    size: "32 pcs",
    price: 39.95,
    stock: "2",
    images: ["/public/images/gastons-bakery-small-puff-pastry-squares.jpg"],
    suggestion: [],
    allegations: [
      "Not available to ship to Hawaii or Alaska.",
      "Contains wheat and milk",
    ],
  },
];


const cartContent = {
  cartItems: [],
  cartNumber: 1,
  cartOpen: false,
}

export const MealContext = React.createContext();

const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState(MealData);
  const [cartContents, setCartContents] = useState(cartContent);

  return (
    <MealContext.Provider value={{ meals, setMeals, cartContents, setCartContents }}>
      {children}
    </MealContext.Provider>
  );
};

// useMealConsumer = () => React.useContext(MealContext);

export default MealProvider;
