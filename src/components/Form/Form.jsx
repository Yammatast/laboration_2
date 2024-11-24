import { useState, useEffect, useRef } from 'react';
import FormFieldString from '../FormFieldString/FormFieldString';
import Button from '../Button/Button';
import { useJokeContext } from '../../context/jokeContext';
import Checkbox from '../Checkbox/Checkbox';
import { StyledForm } from './Form.styles';

function Form() {
    const { keyword, setKeyword, fetchJoke, loading } = useJokeContext();
    const inputRef = useRef(null);

    const [singleJoke, setSingleJoke] = useState(true);
    const [twoPartJoke, setTwoPartJoke] = useState(false);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const clickHandler = (e) => {
        e.preventDefault();
        fetchJoke(singleJoke);
    };

    const checkboxOnChanged = (e) => {
        switch (e.target.value) {
            case 'single':
                setSingleJoke(true);
                setTwoPartJoke(false);
                break;
            case 'twopart':
                setSingleJoke(false);
                setTwoPartJoke(true);
                break;
            default:
                return;
        }
    };

    return (
        <StyledForm>
            <FormFieldString
                id="name"
                type="text"
                inputRef={inputRef}
                disabled={loading}
                updateValue={setKeyword}
                value={keyword}
            >
                Enter searchword for absolute jokes
            </FormFieldString>
            <Checkbox
                disabled={false}
                id={1}
                labelText={'Single Line joke'}
                onChanged={checkboxOnChanged}
                value={'single'}
                checked={singleJoke}
            />
            <Checkbox
                disabled={false}
                id={1}
                labelText={'Two part joke'}
                onChanged={checkboxOnChanged}
                value={'twopart'}
                checked={twoPartJoke}
            />

            <Button
                onClickEvent={clickHandler}
                type="submit"
                mode="default"
                disabled={loading}
            >
                {loading ? 'Loading' : 'Submit'}
            </Button>
        </StyledForm>
    );
}

export default Form;
