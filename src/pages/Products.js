import React, {useReducer, useContext} from 'react';
// import { useMealConsumer } from '../store/meal-context';
import { MealContext } from '../store/meal-context';

const reducer = (state, action) => {
  if (action.type === 'fill'){
    return {money: state.money += 100, food: state.food};
  }
  if (action.type === 'cut') {
    return {food: state.food -= 100, money: state.money};
  }
}

const Products = () => {
  const initialState = {money: 1000, food: 2000}
  const {meals, setMeals } = useContext(MealContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const cut = () => {
    dispatch({type: 'cut'})
    // setMeals({meals: [...meals.meals, "garbage"]});
    setMeals((prevMeals) => {
      return {meals: [...prevMeals.meals, "garbage"]}
    })
  }

  const fill = () => {
    dispatch({type: 'fill'})
  }

  return (
    <>
      <div>Products</div>
      {meals.map((elem) => <p key={elem.id}>{elem.title}</p>)}
      <button onClick={cut}>Cut</button>
      <button onClick={fill}>Fill</button>
      <p>{state.money}</p>
      <p>{state.food}</p>
    </>
  )
}

export default Products