import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import SuccessView from './components/SuccessView';

function App() {
    const [success, setSuccess] = useState(false);

    return (
        <div className="App">
            {success ? (
                <SuccessView setSuccess={setSuccess} />
            ) : (
                <Form setSuccess={setSuccess} />
            )}
        </div>
    );
}

export default App;
