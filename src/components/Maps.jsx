import React,{ useState } from 'react';
import {v4 as uuid} from 'uuid';

const Maps = () => {
    const [names, setNames] = useState([
        {id:uuid(), firstName:'Ramesh', lastName: 'Sharma', DOB: '1978-04-25'},
        {id:uuid(), firstName:'Alberto', lastName: 'Gongalez', DOB: '1958-04-25'},
        {id:uuid(), firstName:'Mary', lastName: 'Trump', DOB: '1963-10-05'},
        {id:uuid(), firstName:'Anita', lastName: 'Roberto', DOB: '1965-02-15'}
    ])
    const addName = () => {
        setNames([...names, {id:uuid(), firstName: 'Julie', lastName: 'Payatte', DOB: '1958-01-28'}])
    }
    return (
        <div className='container my-4 bg-light'>
            <h1>Notable Names in Current News</h1>
            <p>Using Hooks we can create and update a list of objects writing just a few line of codes. This is in sharp contrast with the past where such activities involved a lengthy code using class components.</p>
            <ol>
                {names.map(name => {
                    return (<li key={name.id}>{name.firstName} {name.lastName} {name.DOB}</li>)
                })}
            </ol>
            <button className= 'btn btn-primary' onClick={addName}>Add A Name</button>
        </div>
    )
}

export default Maps;
