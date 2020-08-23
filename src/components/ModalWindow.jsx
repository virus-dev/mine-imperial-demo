import React from 'react'

function ModalWindow(props) {
    console.log(props.props)
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    Добавить маркер
                </div>
                <div className="modal-content">
                    {props.props}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-danger">Закрыть</button>
                    <button className="btn btn-confirm">Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow
