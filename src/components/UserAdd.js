import React, { useState } from 'react';
import Card from './UI/Card';

const UserAdd = (props) => {
    const [inputAge, setInputAge] = useState('');
    const [userName, setUserName] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAdd({
            id: Math.random()*100,
            name: userName,
            age: inputAge
        });
        setInputAge(0);
        setUserName('');
    };

    const userChangeHandler = (event) => {
        setUserName(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    };

    return <Card>
        <form onSubmit={submitHandler}>
            <h2>Username</h2>
            <input
                type='text'
                value={userName}
                onChange={userChangeHandler}
            />
            <h2>Age (Years)</h2>
            <input
                type='number'
                min='0'
                max='120'
                value={inputAge}
                onChange={ageChangeHandler}
            />
            <button type='submit'>Add User</button>
        </form>
    </Card>;
};

export default UserAdd;