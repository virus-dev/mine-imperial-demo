import React from 'react'

const ModalNeatherMap = (props) => {
    const markerHitbox = props.marker[0]
    const markerInfo = props.marker[1].point
    return (
        <div className="modalNeatherMap" style={{left: markerHitbox.xFinish + 5, top: markerHitbox.yStart}}>
            <h2 className="modalNeatherMap__title">{markerInfo.name}</h2>
            <div className="modalNeatherMap__description">{markerInfo.description}</div>
            <div className="modalNeatherMap__cords">
                <div>X: <span>{markerInfo.x}</span></div>
                <div>Z: <span>{markerInfo.y}</span></div>
            </div>
        </div>
    )
}

export default ModalNeatherMap
