import React from "react";
import RecipeView from "./RecipeView"

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th for="name">Name</th>
            <th for="cuisine">Cuisine</th>
            <th for="photo">Photo</th>
            <th for="ingredients">Ingredients</th>
            <th for="preparation">Preparation</th>
            <th for="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(( recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
