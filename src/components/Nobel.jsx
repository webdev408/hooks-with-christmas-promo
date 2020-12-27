import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import NewNobel from './NewNobel';

const Nobel = () => {
    const [names, setNames] = useState([
        {id:uuid(), name: 'Mother Theresa ***', discipline: 'Peace ***', age: '81 years'},
        {id:uuid(), name: 'Joseph Stiglitz ***', discipline: 'Economics ***', age: '74 years'},
        {id:uuid(), name: 'Paul Krugman ***', discipline: 'Economics ***', age: '72 years'},
        {id:uuid(), name: 'Barak Obama ***', discipline: 'Peace ***', age: '59 years'},
    ])
    const addName = (name) => {
        setNames([...names, {id:uuid(), name:'Desmond Tutu ***', discipline: 'Peace ***', age:'86years'},
                {id:uuid(), name, discipline: 'Economics ***', age: '66years'}])
    }
    return (
        <div className='container my-4 bg-dark text-light'>
            <h1>Notable Nobel Prize Winners</h1>
            <ol>
            {names.map(name => {
                return ( <li>{name.name}{name.discipline}{name.age}</li>)
            })}
            </ol>
            <NewNobel addName={addName} />
        </div>
    )
}

export default Nobel;


