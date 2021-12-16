import React from 'react';
import Card from './UI/Card';
import User from './User';

const Users = (props) => {
    return <Card>
            <h2>Users List</h2>
            {props.items.map(x => {
                return <User 
                    id = {x.id}
                    name ={x.name}
                    age = {x.age}
                />;
            })}
        </Card>;
};

export default Users;