import Card from "./Card";
import Button from "./Button";
import './Error.css'
const Error = props => {
    return <div> 
        <div className='backdrop'/>
        <div className='modal'> 
            <Card>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onClose}>Okay</Button>
                </footer>
            </Card>
        </div>
    </div>;
};
export default Error;