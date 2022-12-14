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
import DrinksInProgress from './pages/DrinksInProgress';
import MealsInProgress from './pages/MealsInProgress';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Switch>
      <Route path="/comidas/:id/in-progress" component={ MealsInProgress } />
      <Route path="/bebidas/:id/in-progress" component={ DrinksInProgress } />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealsIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksIngredients }
      />
      <Route path="/explorar/comidas/area" component={ ExploreLocal } />
      <Route path="/comidas/:mealId" component={ MealDetails } />
      <Route path="/bebidas/:drinkId" component={ DrinkDetails } />
      <Route path="/explorar/comidas" component={ ExploreMeals } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/receitas-principais" component={ MainRecipe } />
      <Route path="/receitas-feitas" component={ RecipeMade } />
      <Route path="/receitas-favoritas" component={ FavoritesRecipes } />
      <Route path="/comidas" component={ Meals } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/perfil" component={ Profile } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/" component={ Login } />
      <Route component={ PageNotFound } />
    </Switch>
  );
}

export default App;

// Daniel Mondaini, Jo??o Matta, Samuel Pereira, Erickson Siqueira, Larissa Manzo