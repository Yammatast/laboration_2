import Main from './components/Main/Main';
import { JokeProvider } from './context/jokeContext';

function App() {
    return (
        <JokeProvider>
            <Main />
        </JokeProvider>
    );
}

export default App;
