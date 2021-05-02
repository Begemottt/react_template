// Basic React element creation and rendering example
// const items = [ // Create an array of strings
//     '2lb salmon',
//     '5 sprigs fresh rosemanry',
//     '2 tablespoons olive oil',
//     '2 small legmons',
//     '1 teaspoon kosher salt',
//     '4 cloves chopped garlic'
// ]
// const ingredients  = React.createElement(
//     "ul",
//     {className: "ingredients"},
//     items.map((item, i) => // Assign each element of the array as the key name "item" with the iterator "i"
//         React.createElement("li", {key: i}, item)
//     )
// )
// const container = React.createElement( // Create a react element!
//     "section", // This is the HTML tag
//     {id: "root"}, // These are the element properties, or "props"
//     React.createElement("h1", {id: "recipe-0"}, "Baked Salmon"), // This is the content that actually goes INSIDE the element
//     ingredients
//     );
// ReactDOM.render(container, document.getElementById('main'));

// console.log(container);


// React component example
// class IngredientsList extends React.Component {
//     render() {
//       return React.createElement("ul", {className: "ingredients"},
//           this.props.items.map((ingredient, i) =>
//               React.createElement("li", { key: i }, ingredient)
//           )
//       )
//     }
// }
// const items = [
//   "1 lb Salmon",
//   "1 cup Pine Nuts",
//   "2 cups Butter Lettuce",
//   "1 Yellow Squash",
//   "1/2 cup Olive Oil",
//   "3 cloves of Garlic"
// ]
// ReactDOM.render(
//     React.createElement(IngredientsList, {items}, null),
//     document.getElementById('main')
// )

