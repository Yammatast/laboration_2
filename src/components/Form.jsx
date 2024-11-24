import { useState, useEffect, useRef } from 'react';
import FormFieldString from './FormFieldString';
import Button from './Button';

function Form({ setSuccess }) {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (isSubmitting) {
            const timer = setTimeout(() => {
                setSubmitting(false);
                setSuccess(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitting, setSuccess]);

    const clickHandler = (e) => {
        e.preventDefault();
        setSubmitting(true);
    };

    return (
        <form className="wow-form">
            <FormFieldString
                id="name"
                type="text"
                inputRef={inputRef}
                disabled={isSubmitting}
                updateValue={setNameValue}
                value={nameValue}
            >
                Name
            </FormFieldString>
            <FormFieldString
                id="age"
                type="number"
                disabled={isSubmitting}
                updateValue={setAgeValue}
                value={ageValue}
            >
                Age
            </FormFieldString>
            <Button
                onClickEvent={clickHandler}
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Loading" : "Submit"}
            </Button>
        </form>
    );
}

export default Form;
