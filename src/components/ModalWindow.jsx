import React from 'react'

function ModalWindow(props) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    {props.title}
                </div>
                <div className="modal-content">
                    {props.body}
                </div>
                <div className="modal-footer">
                    {props.btnClose}
                    {props.btnConfirm}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow
