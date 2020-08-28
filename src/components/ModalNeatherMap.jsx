import React from 'react'

const ModalNeatherMap = (props) => {
    const markerHitbox = props.marker[0]
    const markerInfo = props.marker[1].point
    return (
        <div className="modalNeatherMap" style={{left: markerHitbox.xFinish + 5, top: markerHitbox.yStart}}>
            <div className="modalNeatherMap__title">{markerInfo.name}</div>
            <div className="modalNeatherMap__description">{markerInfo.description}</div>
            <div className="modalNeatherMap__cords">x:{markerInfo.x} y:{markerInfo.y}</div>
        </div>
    )
}

export default ModalNeatherMap
