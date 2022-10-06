import React from 'react';
import { useState } from 'react';
import classes from './meta.module.css';

const Metaa = (props) => {
    const [inputText, setInputText] = useState({
        firstname: '',
        lastName: '',
        email: '',
        ecx: '',
    })
    const [enterInput, setEnterInput] = useState(false);

    // const { meals } = useMealsListContext();

    const enterName = () => {
        setEnterInput(!enterInput);
        // console.log(useMealsListContext);
    }
  return (
    <div>
    <button onClick={enterName} className={classes.button}>Enter first name </button><br/>
       {enterInput && <div> <label>Firstname: </label>
        <input type="text" value={inputText.firstname} onChange={
            (e) => {
                setInputText({...inputText, firstname: e.target.value});
            }
        } /><br /> </div>}
        <label>Lastname: </label>
        <input type="text" value={inputText.lastName} onChange={
            (e) => {
                setInputText({...inputText, lastName: e.target.value});
            }
        } /><br />
        <label>Email: </label>
        <input type="email" value={inputText.email} onChange={
            (e) => {
                setInputText({...inputText, email: e.target.value});
            }
        } /><br />
        <label>ECX: </label>
        <input type="email" value={inputText.ecx} onChange={
            (e) => {
                setInputText({...inputText, ecx: e.target.value});
            }
        } /><br />

        {enterInput && <p>FirstName is {inputText.firstname}</p>}
        <p>Last name is {inputText.lastName}</p>
        <p>Email is {inputText.email}</p>
        <p>ECX input {inputText.ecx}</p>

        <div>
            <p>Context API meals object</p>
            <p>This is the track from state {props.track}</p>
            {/* <p>{meals.length}</p> */}
            {/* {meals.map(elem => <p>{elem}</p>)} */}
        </div>


    </div>
  )
}

export default Metaa;