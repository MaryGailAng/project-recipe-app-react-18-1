import React from "react";

function RecipeView({recipe, deleteRecipe}){
    return (
        <tr key={recipe.index}>
            <td for="name">{(recipe.name)}</td>
            <td for="cuisine">{(recipe.cuisine)}</td>
            <td for="photo"><img src={(recipe.photo)}></img></td>
            <td for="ingredients" className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td for="preparation" className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>

    );
}

export default RecipeView;