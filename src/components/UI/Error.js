import Card from "./Card";
import Button from "./Button";
import './Error.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
     return <div className='backdrop' onClick={props.onClick}/>
};

const Overlay = props => {
    return <div className='modal'> 
        <Card>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    </div>
};

const Error = props => {
    return <> 
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Overlay onClick={props.onClose} title={props.title} message={props.message}/>,document.getElementById('overlay-root'))}
    </>;
};
export default Error;