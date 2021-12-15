export default (props) => {
    return <div className = 'user'>
        <h2><em>{props.name}</em></h2> is {props.age}.
    </div>;
};