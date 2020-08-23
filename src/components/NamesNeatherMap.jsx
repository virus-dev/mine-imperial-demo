import React from 'react'

function NamesNeatherMap({props, scale}) {
    return (
        <div className="nameNeatherMap" style={{left: props.markerHitbox.xFinish + 7, top: props.markerHitbox.yStart, fontSize: 14 * scale}}>
            {props.markerInfo.point.name}
        </div>
    )
}

export default NamesNeatherMap
