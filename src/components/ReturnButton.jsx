function ReturnButton({ children, onClickEvent }) {
    return (
        <button className="return-button" onClick={onClickEvent}>
            {children}
        </button>
    );
}

export default ReturnButton;
