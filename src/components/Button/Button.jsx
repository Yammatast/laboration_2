import { StyledButton } from './Button.styles';

function Button({ children, disabled, onClickEvent, type, mode }) {
    return (
        <StyledButton
            className="cool-button"
            type={type}
            mode={mode}
            disabled={disabled}
            onClick={onClickEvent}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
