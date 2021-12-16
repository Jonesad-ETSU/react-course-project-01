const User = (props) => {
    return <div className = 'user'>
        <em>{props.name}</em> is {props.age}.
    </div>;
};
export default User;