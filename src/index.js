import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import 'spectre.css';
import './index.css';

const DirectoryView = (props) => (
    <div className="column col-6">
        <SearchForm value={props.value} changeHandler={props.changeHandler} clickHandler={props.clickHandler} />
        {props.searchResults.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i}/>)}  
    </div>
);

const DetailView = (props) => (
    <div className="column col-6">
        <div className="container">
            <div className="columns">
                <p className="column col-12">{props.recipe.name}</p>
                <div className="column col-3">
                    <p>{props.recipe.ingredient}</p>
                    <ul>
                        {props.recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                    </ul>
                </div>
                <div className="column col-6">
                    <p>{props.recipe.instruction}</p>
                    <ol>
                        {props.recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    </div>
);

const SearchForm = (props) => (
    <form>
        <input value={props.value} onChange={props.changeHandler} />
        <button className="btn btn-primary" onClick={props.clickHandler}>Search</button>
    </form>
);

const RecipeCard = (props) => (
    <p onClick={() => props.clickHandler(props.id)}>{props.name}</p>
);

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
                instructions: ['heat wok on high heat', 'heat oil in wok', 'heat vegetables', 'add rice', 'add tofu', 'slowly stir until fried']
            },
            {
                id: 4,
                name: 'Chicken Pasta',
                ingredients: ['chicken breast', 'your favorite pasta', 'white sauce', 'vegetable medley'],
                instructions: ['cook pasta', 'sautee chicken in sauce pan', 'add white sauce once chicken is cooked', 'toss chicken with pasta', 'add vegetable medley and stir slowly until veggies are heated']
            },
            {
                id: 5,
                name: 'Fried Chicken Sandwhich',
                ingredients: ['chicken strips', 'bread', 'your favorite sauce', 'lettuce', 'tomatoe'],
                instructions: ['batter and fry chicken strips', 'slice bread', 'add a layer of sauce to bottom piece of bread', 'place fried chicken strips on top of sauce', 'place lettuce, tomatoe and top piece of bread']
            },
            {
                id: 6,
                name: 'Chicken Parmesan',
                ingredients: ['chicken breast', 'your favorite noodle', 'robust red sauce', 'parmesan cheese', 'panko bread crumbs'],
                instructions: ['pre-heat oven to 400', 'cover chicken in bread crumbs', 'bake chicken until done', 'cook noodles', 'mix in sauce and sautee on low', 'once everything is cooked plate and enjoy']
            },
            {
                id: 7,
                name: 'Turkey Meatballs',
                ingredients: ['ground turkey', 'favorite seasoning', 'tomatoe sauce'],
                instructions: ['mix seasoning and turkey', 'form turkey mix into balls', 'sautee turkey balls until cooked on the outside', 'place meatballs in a large pot and add tomatoe sauce', 'simmer on low heat covered until cooked through']
            },
            {
                id: 8,
                name: 'Turkey BLT',
                ingredients: ['sliced turkey breast', 'tomatoe', 'lettuce', 'bacon', 'bread'],
                instructions: ['place turkey on bread', 'put lettuce on top of turkey', 'place tomatoe on top of lettuce', 'put bacon on top of tomatoe', 'finish with top layer of bread']
            },
            {
                id: 9,
                name: 'Bobs Burger',
                ingredients: ['beef patties', 'buns', 'bacon', 'fried onions', 'barbecue sauce'],
                instructions: ['cook beef patties to taste', 'lightly toast buns', 'cook bacon', 'assemble burger', 'smother with barbecue sauce']
            },
            {
                id: 10,
                name: 'james',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
            },
            {
                id: 11,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
            },
            {
                id: 12,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
            },
            {
                id: 13,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
            },
            {
                id: 14,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
            },
            {
                id: 15,
                name: 'Tofu Potpie',
                ingredients: ['tofu', 'pie crust', 'assorted veggies', 'gravy sauce'],
                instructions: ['pre-heat oven to 400', 'line pan with pie crust', 'mix tofu, veggies and gravy sauce', 'put tofu mix in pie crust', 'cook until golden brown']
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
            <div className="container main">
                <div className="columns">
                    <DirectoryView 
                        recipes={recipeRef} 
                        searchResults={this.state.selectedRecipes} 
                        value={recipeRef.searchVal} 
                        changeHandler={this.handleChangeRecipes} 
                        clickHandler={this.selectRecipes} 
                        recipeHandler={this.chooseRecipe}
                    />
                    <DetailView 
                        recipe={this.state.chosenRecipe} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));