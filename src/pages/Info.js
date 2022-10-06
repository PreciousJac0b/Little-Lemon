import React, { useReducer } from 'react';
import Metaa from '../components/meta';

const reducerfunc = (state, action) => {
  if (action.type === "track") {
    return {...state, track: state.track + 100}
  }
  if (action.type === "color") {
    return {...state, color: state.color + 200}
  }
}

const Info = () => {
  const reducerState = {track: 100, color: 150};
  const [state, dispatch] = useReducer(reducerfunc, reducerState);
  return (
    <div>
      <Metaa track={state.track}/>
      <button onClick={() => {dispatch({type: 'track'})}}>Tracks</button>
      <button onClick={() => {dispatch({type: 'color'})}}>Color</button>
      <p>{state.track}</p>
      <p>{state.color}</p>
    </div>
  )
}

export default Info