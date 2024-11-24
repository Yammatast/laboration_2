import { useJokeContext } from '../../../context/jokeContext';
import Button from '../../Button/Button';
import Pedro from '../../Media/Pedro/Pedro';

function BadRequestView() {
    const { setError } = useJokeContext();

    const handleOnClick = (e) => {
        e.preventDefault();
        setError(false);
    };

    return (
        <>
            <div>Joke with that word doesn't exist, try again</div>
            <Button onClickEvent={handleOnClick} mode="return">
                Return to Form!
            </Button>
            <Pedro />
        </>
    );
}

export default BadRequestView;
