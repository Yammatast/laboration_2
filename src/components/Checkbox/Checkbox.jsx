function Checkbox({ disabled, value, onChanged, id, labelText, checked }) {
    return (
        <>
            <input
                type="checkbox"
                disabled={disabled}
                value={value}
                onChange={onChanged}
                name={id}
                checked={checked}
            />
            <label id={id} htmlFor={id}>
                {labelText}
            </label>
        </>
    );
}

export default Checkbox;
