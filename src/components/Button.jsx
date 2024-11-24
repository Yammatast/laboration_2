function Button({ children, disabled, onClickEvent, type }) {
    return (
        <button
            className="cool-button"
            type={type}
            disabled={disabled}
            onClick={onClickEvent}
        >
            {children}
        </button>
    );
}

export default Button;
