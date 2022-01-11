import PropTypes from 'prop-types';
import React, { useState } from 'react';

function IngredientCheckbox({ foodType, food, toggleFinishButton, i }) {
  const ONE = 1;

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    toggleFinishButton();
    setChecked(!checked);
  };

  const riskedIngredientStyle = { textDecoration: 'line-through' };

  if (foodType === 'meal') {
    return (
      <label
        htmlFor={ `strIngredient${i}` }
        data-testid="ingredient-step"
        key={ food[`strIngredient${i}`] }
        style={ checked ? riskedIngredientStyle : {} }

      >
        {food[`strIngredient${i}`]}
        {food[`strMeasure${i}`]}
        <input
          id={ `strIngredient${i}` }
          data-testid={ `${i - ONE}-ingredient-name-and-measure` }
          onClick={ handleCheckboxChange }
          className="ingredient-checkbox"
          value={ checked }
          type="checkbox"
        />
      </label>
    );
  }
  return (
    <label
      htmlFor={ `strIngredient${i}` }
      key={ food[`strIngredient${i}`] }
      data-testid="ingredient-step"
      style={ checked ? { textDecoration: 'line-through' } : {} }
    >
      {food[`strIngredient${i}`]}
      {food[`strMeasure${i}`]}
      <input
        key={ i }
        id={ `strIngredient${i}` }
        data-testid={ `${i - ONE}-ingredient-name-and-measure` }
        onClick={ (e) => { toggleFinishButton(e); } }
        className="ingredient-checkbox"
        style={ checked ? riskedIngredientStyle : {} }
        type="checkbox"
      />
    </label>
  );
}

IngredientCheckbox.propTypes = {
  i: PropTypes.number.isRequired,
  food: PropTypes.objectOf(PropTypes.any).isRequired,
  foodType: PropTypes.string.isRequired,
  toggleFinishButton: PropTypes.func.isRequired,
};

export default IngredientCheckbox;
