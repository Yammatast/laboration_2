import SuccessView from '../SuccessView/SuccessView';
import Form from '../Form/Form';
import { useJokeContext } from '../../context/jokeContext';
import BadRequestView from '../ErrorViews/BadRequestView/BadRequestView';
import { MainStyle } from './Main.styles';

function Main() {
    const { success, error } = useJokeContext();

    return (
        <MainStyle>
            {success ? <SuccessView /> : error ? <BadRequestView /> : <Form />}
        </MainStyle>
    );
}

export default Main;
