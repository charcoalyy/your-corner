import React from 'react';

const ConfirmAction = ({action, setModal, confirmAction}) => {

    const handleCancel = () => {
        setModal(false);
    }

    const handleContinue = () => {
        confirmAction(true);
        setModal(false);
    }

    return(
        <div className="modal-background">
            <div className="confirmation-modal">
                <h4>{ action } Are you sure?</h4>
                <div className="confirmation-modal-options">
                    <button onClick={handleCancel}>No, cancel</button>
                    <button onClick={handleContinue}>Yes, continue</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmAction;