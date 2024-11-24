import ReturnButton from './ReturnButton';

function SuccessView({ setSuccess }) {
    const handleOnClick = (e) => {
        e.preventDefault();
        setSuccess(false);
    };

    return (
        <div className="return-view">
            <h1>Form submitted successfully. :&#41;</h1>
            <ReturnButton onClickEvent={handleOnClick}>
                Return to Form!
            </ReturnButton>
        </div>
    );
}

export default SuccessView;
