import React from 'react';
import './Recipes.css';

function Recipes(props) {
    const {recipe: {recipe: {label, image, calories, ingredients}}} = props
    let counter = 0;
    return (
        <div className="table">
            <p className="row">{label}</p>
            <div className="recipe-image-container"><img className="recipe-image" src={image} alt="" /></div>
            <hr />
            <p style={{margin: 0, fontWeight: 'bold'}}>Ingredients:</p>
            <div className="ingredient-list-container">
                <ul className="ingredient-list">{ingredients.map(ingredient => (
                    <li key={counter++}>{ingredient.text} - {ingredient.weight}gms</li>
                ))}</ul>
            </div>
        </div>
    )
}

export default Recipes;