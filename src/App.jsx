import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drinks from './pages/Drinks';
import DrinkDetails from './pages/DrinkDetails';
import Explore from './pages/Explore';
import Login from './pages/Login';
import MainRecipe from './pages/MainRecipe';
import Meals from './pages/Meals';
import MealDetails from './pages/MealDetails';
import Profile from './pages/Profile';
import RecipeMade from './pages/RecipeMade';
import ExploreMeals from './pages/ExploreMeals';
import ExploreDrinks from './pages/ExploreDrinks';
import FavoritesRecipes from './pages/FavoritesRecipes';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreMealsIngredients from './pages/ExploreMealsIngredients';
import ExploreLocal from './pages/ExploreLocal';
import DrinksByID from './pages/DrinksByID';
import MealsByID from './pages/MealsByID';
import DrinksInProgress from './pages/DrinksInProgress';
import MealsInProgress from './pages/MealsInProgress';

function App() {
  return (
    <Switch>
      <Route path="/explorar/comidas/area" component={ ExploreLocal } />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealsIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksIngredients }
      />
      <Route path="/comidas/:id/in-progress" component={ MealsInProgress } />
      <Route path="/bebidas/:id/in-progress" component={ DrinksInProgress } />
      <Route path="/comidas/:id" component={ MealsByID } />
      <Route path="/bebidas/:id" component={ DrinksByID } />
      <Route path="/explorar/comidas" component={ ExploreMeals } />
      <Route path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/receitas-principais" component={ MainRecipe } />
      <Route path="/receitas-feitas" component={ RecipeMade } />
      <Route path="/receitas-favoritas" component={ FavoritesRecipes } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/comidas/:mealId" component={ MealDetails } />
      <Route path="/comidas" component={ Meals } />
      <Route path="/bebidas/:drinkId" component={ DrinkDetails } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/explorar" component={ Explore } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
