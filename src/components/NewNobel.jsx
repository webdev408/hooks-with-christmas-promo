import React, { useState } from 'react';

const NewNobel = ({addName}) => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addName(name);
        setName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>More name:</label>
            <input type="text" value={name} required onChange={(e) =>setName(e.target.value)}/>
            <input type="submit" value='add laureate'/>
        </form>
    )
}

export default NewNobel;
