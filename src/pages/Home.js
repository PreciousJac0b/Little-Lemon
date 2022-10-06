import React from 'react'
import Hero from '../components/HomeComponents/Hero';
import MealProvider from '../store/meal-context';

const Home = () => {
  return (
    <>
        <main>
            {/* <Hero /> */}
            <MealProvider>
              <Hero />
              {/* <Metaa /> */}
            </MealProvider>
            
        </main>
    </>
  )
}

export default Home