import React, {useState} from 'react';

const MealsContext = React.createContext();

const todayMeals = ['Baked Beans', 'Baked Potatoes', 'Baked Sweet Potatoes', "Quality Control"]

const MealProvider = ({ children }) => {
    const [meals, setMEals] = useState(todayMeals);

  return (
    <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
  )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealProvider;