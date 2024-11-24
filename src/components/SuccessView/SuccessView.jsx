import { useJokeContext } from '../../context/jokeContext';
import Button from '../Button/Button';

function SuccessView() {
    const { joke, setSuccess } = useJokeContext();

    const handleOnClick = (e) => {
        e.preventDefault();
        setSuccess(false);
    };

    return (
        <div className="return-view">
            <h1>{joke}</h1>
            <Button onClickEvent={handleOnClick} mode="return">
                Return to Form!
            </Button>
        </div>
    );
}

export default SuccessView;
