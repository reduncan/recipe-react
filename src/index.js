import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import DirectoryView from './components/DirectoryView';
import DetailView from './components/DetailView';

class App extends React.Component {

    state = {
        searchVal: '',
        selectedRecipes: [],
        chosenRecipe: {
            id: '',
            name: '',
            ingredient: '',
            ingredients: [],
            instruction: '',
            instructions: []
        },
        recipes: [
            {
                id: 1,
                name: 'Tofu Lasagna',
                ingredients: ['tofu', 'cheese', 'noodles', 'tomato sauce',],
                instructions: ['pre-heat oven to 400', 'marinade tofu to taste', 'cook noodles', 'mix tomato sauce and tofu', 'put a layer of tofu/sauce in the pan', 'put a layer of noodles', 'repeat until all ingredients are used', 'We dont waste in this house', 'cook until bubbling'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 2,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 3,
                name: 'Tofu Stir-fry',
                ingredients: ['tofu', 'assorted veggies', 'vegan soy-sauce', 'rice', 'oil'],
                instructions: ['heat wok on high heat', 'heat oil in wok', 'heat vegetables', 'add rice', 'add tofu', 'slowly stir until fried'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 4,
                name: 'Chicken Pasta',
                ingredients: ['chicken breast', 'your favorite pasta', 'white sauce', 'vegetable medley'],
                instructions: ['cook pasta', 'sautee chicken in sauce pan', 'add white sauce once chicken is cooked', 'toss chicken with pasta', 'add vegetable medley and stir slowly until veggies are heated'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 5,
                name: 'Fried Chicken Sandwhich',
                ingredients: ['chicken strips', 'bread', 'your favorite sauce', 'lettuce', 'tomatoe'],
                instructions: ['batter and fry chicken strips', 'slice bread', 'add a layer of sauce to bottom piece of bread', 'place fried chicken strips on top of sauce', 'place lettuce, tomatoe and top piece of bread'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 6,
                name: 'Chicken Parmesan',
                ingredients: ['chicken breast', 'your favorite noodle', 'robust red sauce', 'parmesan cheese', 'panko bread crumbs'],
                instructions: ['pre-heat oven to 400', 'cover chicken in bread crumbs', 'bake chicken until done', 'cook noodles', 'mix in sauce and sautee on low', 'once everything is cooked plate and enjoy'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 7,
                name: 'Turkey Meatballs',
                ingredients: ['ground turkey', 'favorite seasoning', 'tomatoe sauce'],
                instructions: ['mix seasoning and turkey', 'form turkey mix into balls', 'sautee turkey balls until cooked on the outside', 'place meatballs in a large pot and add tomatoe sauce', 'simmer on low heat covered until cooked through'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 8,
                name: 'Turkey BLT',
                ingredients: ['sliced turkey breast', 'tomatoe', 'lettuce', 'bacon', 'bread'],
                instructions: ['place turkey on bread', 'put lettuce on top of turkey', 'place tomatoe on top of lettuce', 'put bacon on top of tomatoe', 'finish with top layer of bread'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 9,
                name: 'Bobs Beef Burger',
                ingredients: ['beef patties', 'buns', 'bacon', 'fried onions', 'barbecue sauce'],
                instructions: ['cook beef patties to taste', 'lightly toast buns', 'cook bacon', 'assemble burger', 'smother with barbecue sauce'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 10,
                name: 'Beef Pie',
                ingredients: ['ground beef', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix beef, veggies and gravy sauce', 'put beef mix in pie crust', 'cook until golden brown'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 11,
                name: 'Beefy Vegetable Soup',
                ingredients: ['ground beef', 'assorted veggies', 'beef broth'],
                instructions: ['brown ground beef', 'in a large saucepan mix beef and veggies', 'add beef broth', 'cook on low until vegetables are cooked through'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 12,
                name: 'Spaghetti Squash Pasta',
                ingredients: ['spaghettis squash', 'tomatoe sauce', 'assorted veggies'],
                instructions: ['pre-heat oven to 400', 'cut squash in half long ways', 'mix tomatoe sauce and veggies in saucepan and cook on low', 'season squash with salt, pepper and olive oil', 'cook squash until softened', 'use fork to break up squash', 'place veggie mix on top and enjoy'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 13,
                name: 'Tuna Salad',
                ingredients: ['fresh canned tuna', 'celery', 'pickles', 'mustard', 'mayonnaise'],
                instructions: ['place tuna in large bowl', 'chop celery and pickles then add to bowl', 'add mustard and mayonnaise to taste', 'mix until everything is well distributed', 'serve as sandwhichs or with crackers'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 14,
                name: 'Ham Roll-Up',
                ingredients: ['thin sliced ham', 'condiment of your choosing', 'spinach', 'diced tomatoes'],
                instructions: ['lay 2 slices of ham flat', 'spread your condiment of choice across ham', 'place spinach on ham', 'roll ham half way', 'add diced tomatoes', 'finish rolling ham'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            },
            {
                id: 15,
                name: 'Turkey Chili',
                ingredients: ['ground turkey', 'red kidney beans', 'whole stewed tomatoes', 'chili powder'],
                instructions: ['brown turkey and drain fat', 'mix browned turkey, kidney beans, tomatoes and chili powder in large sauce pan', 'bring to a boil', 'reduce heat to low', 'cook on low for 1 hour'],
                ingredient: 'Ingredients',
                instruction: 'Instructions'
            }
        ]
    }

    handleChangeRecipes = (event) => {
        this.setState({ searchVal: event.target.value })
    }

    selectRecipes = (event) => {
        event.preventDefault();
        this.setState({ selectedRecipes: this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.searchVal.toLowerCase())) });
    }

    chooseRecipe = (id) => {
        this.setState({ chosenRecipe: this.state.recipes.find(recipe => recipe.id === id)})
    }

    render() {
        const recipeRef = this.state.recipes;
        return (
            <div>
                <div>
                    <Header />
                    <DirectoryView 
                        recipes={recipeRef} 
                        searchResults={this.state.selectedRecipes} 
                        value={recipeRef.searchVal} 
                        changeHandler={this.handleChangeRecipes} 
                        clickHandler={this.selectRecipes} 
                        recipeHandler={this.chooseRecipe}
                    />
                    <DetailView 
                        recipe={this.state.chosenRecipe} 
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));