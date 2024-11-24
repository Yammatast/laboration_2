import { LabelStyle } from "./FormFieldString.styles";

function FormFieldString({
    id,
    children,
    type,
    disabled,
    updateValue,
    value,
    inputRef,
}) {
    const handleChange = (e) => {
        updateValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <LabelStyle className="label-text" htmlFor={id}>
                {children}
            </LabelStyle>
            <input
                id={id}
                value={value}
                ref={inputRef}
                type={type}
                disabled={disabled}
                onChange={handleChange}
            />
        </>
    );
}

export default FormFieldString;
