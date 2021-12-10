import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Login from './pages/Login';
import MainRecipe from './pages/MainRecipe';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import RecipeMade from './pages/RecipeMade';
import ExploreMeals from './pages/ExploreMeals';
import ExploreDrinks from './pages/ExploreDrinks';

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
      <Route path="/explorar/comidas" component={ ExploreMeals } />
      <Route path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/receitas-principais" component={ MainRecipe } />
      <Route path="/receitas-feitas" component={ RecipeMade } />
      <Route path="/receitas-favoritas" component={ FavoritesRecipes } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/comidas" component={ Meals } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/explorar" component={ Explore } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
