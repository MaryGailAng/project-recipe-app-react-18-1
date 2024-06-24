import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
 

  const initialFormState= {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };

  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit =(event) => {
    event.preventDefault();
    console.log(formData);
    
    const newRecipe = (formData);
    createRecipe(newRecipe);

    setFormData({...initialFormState});
  };

  return (
    <div>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td for="name">
              <form name="create">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </form>  
            </td>
            <td for="cuisine">
              <form name="create">  
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  required
                />
              </form>  
            </td>
            <td for="photo">
              <form name="create">  
                <input
                  id="photo"
                  type="url"
                  name="photo"onChange={handleChange}
                  value={formData.photo}
                  required
                />
              </form>
            </td>
            <td for="ingredients">
              <form name="create">  
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  required
                />
              </form>
            </td>
            <td for="preparation">
              <form name="create">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required
                />
              </form>
            </td>
            <td>
              <form onSubmit={handleSubmit} name="create">
                <button type="submit" >Create</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
  </div>  
  );
}

export default RecipeCreate;
