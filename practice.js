/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/



function bakeAndSellPies(pieType, pieQuantity, profitMargin) {

  function foundPieRecipe() {
    return recipes[pieType];
  }

  function combininedMessage() {
    let message = `Combining ingredients for ${pieType}: `;
    return message += foundPieRecipe().map(ingredient => ingredient.name).join(', ');
  }

  function costOfPie() {
    return foundPieRecipe().reduce((prev, current) => {
      return prev + current.cost;
    }, foundPieRecipe()[0].cost);
  }

  function totalRevenue() {
    const totalCost = costOfPie() * pieQuantity;
    return totalCost * (profitMargin || 1.2);
  }



  for (let i = 0; i < pieQuantity; i++) {  // Bake the number of pies specified by the pieQuantity
    console.log(combininedMessage());  // Print the ingredients for each ingredient in the recipe
    console.log(`Baked pie ${i + 1}!`);  // Print the nth pie that was baked
  }

  console.log(`Cost per pie: ${costOfPie()}`);  // Print the cost of each pie based on the cost of each ingredient
  console.log(`Sold ${pieQuantity} pies for $${totalRevenue().toFixed(2)}!`);  // Print the total revenue calculated using the given profitMargin
}

/*
// Function Before Refactorization:
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = recipes[pieType];   // Find the recipe for the pieType specified

  for (let i = 0; i < pieQuantity; i++) {  // Bake the number of pies specified by the pieQuantity
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);  // Print the ingredients for each ingredient in the recipe

    console.log(`Baked pie ${i + 1}!`);  // Print the nth pie that was baked
  }

  const costOfPie = recipe.reduce((prev, current) => {  // Print the cost of each pie based on the cost of each ingredient
    return prev + current.cost;
  }, recipe[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);

  const totalCost = costOfPie * pieQuantity;  // Calculate the total cost of all the pies

  const revenue = totalCost * (profitMargin || 1.2);  // Print the total revenue calculated using the given profitMargin
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}
*/

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
