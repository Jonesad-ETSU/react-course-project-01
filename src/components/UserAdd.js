import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import Error from './UI/Error';

const UserAdd = (props) => {
    const [inputAge, setInputAge] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        //if(error === null) { console.log('Errored'); return; }
        //if(!userName || !inputAge ) return;
        if(!userName || userName.trim().length === 0) {
            setError({
                title: "Invalid Operation",
                message: "Please Enter a Username"
            });
            return;
        }
        if(!inputAge || +inputAge < 0 || +inputAge > 120) {
            setError({
                title: "Invalid Operation",
                message: "Please Enter a Valid Age (0 < x < 120)"
            });
            return;
        }
        props.onAdd({
            id: Math.random()*100,
            name: userName,
            age: inputAge
        });
        setInputAge('');
        setUserName('');
    };

    const userChangeHandler = (event) => {
        setUserName(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    };
    
    const errorHandler = () => {
        setError(null);
    };

    return <div>
        {error && <Error title={error.title} message = {error.message} onClose={errorHandler} />}
        {!error && <Card>
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
                <Button type='submit'>Add User</Button>
            </form>
        </Card>}
    </div>;
};

export default UserAdd;