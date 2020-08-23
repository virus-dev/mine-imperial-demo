import React from 'react'
import { ModalNeatherMap, NamesNeatherMap, AddBranch } from './index'

class NeatherMap extends React.Component {
    constructor(props) {
        super(props);
        this.NeatherMap = React.createRef();
        this.state = {
            modalNeatherMapIsOpen: false,
            isRender: false
        }
     }

     componentDidMount() {
        this.initialState = [
            { name: 'Синяя ветка', branch: 'blue', type: 'mainTunnel', xStart: 0, zStart: 0, x: 0, y: -1000 },
            { name: 'Желтая ветка', branch: 'yellow', type: 'mainTunnel', xStart: 0, zStart: 0, x: 1000, y: 0 },
            { name: 'Красная ветка', branch: 'red', type: 'mainTunnel', xStart: 0, zStart: 0, x: 0, y: 1000 },
            { name: 'Зеленая ветка', branch: 'green', type: 'mainTunnel', xStart: 0, zStart: 0, x: -1000, y: 0 },
            { name: 'Райск', branch: 'red', type: 'portal', tunnel: 'true', xStart: 0, zStart: 194, x: 21, y: 194 },
            { name: 'Главный эндер портал', branch: 'yellow', type: 'onRed', tunnel: 'true', xStart: 121, zStart: 0, x: 121, y: 146 },
            { name: 'Главный эндер портал', branch: 'red', type: 'end', tunnel: 'true', xStart: 0, zStart: 146, x: 121, y: 146 },
            { name: 'Крепость', branch: 'false', type: 'portal', tunnel: 'false', xStart: -200, zStart: -200, x: -200, y: -200 },
            { name: 'Хаб', branch: 'all', type: 'hab', xStart: 0, zStart: 0, x: 0, y: 0 },
        ]

        this.ctx = this.NeatherMap.current.getContext('2d');
        this.mouseDown = false;
        this.startDragOffset = {};
        this.pointRadius = 10;
        this.scale = 1.0;
        this.scaleMultiplier = 0.9;
        this.translatePos = {
            x: this.NeatherMap.current.width / 2,
            y: this.NeatherMap.current.height / 2
        };
        this.startTranslatePos = {
            x: this.NeatherMap.current.width / 2,
            y: this.NeatherMap.current.height / 2
        };
        this.firstRender = true;
        this.draw(this.scale, this.translatePos);
        this.pointModal()
     }

     startLooking = (evt) => {
        this.mouseDown = true;
        this.startDragOffset.x = evt.clientX - this.translatePos.x;
        this.startDragOffset.y = evt.clientY - this.translatePos.y;
     }

     looking = (evt) => {
        if (this.mouseDown) {
            this.translatePos.x = evt.clientX - this.startDragOffset.x;
            this.translatePos.y = evt.clientY - this.startDragOffset.y;
            this.draw(this.scale, this.translatePos);
        }
        if (this.markers !== undefined) {
            this.mouseOnMarker = false;
            this.markers.map(({markerHitbox, markerInfo}, index) => {
                if (evt.pageX > markerHitbox.xStart &&
                    evt.pageX < markerHitbox.xFinish &&
                    evt.pageY > markerHitbox.yStart &&
                    evt.pageY < markerHitbox.yFinish 
                    ) {
                        this.NeatherMap.current.style = 'cursor: pointer;'
                        this.mouseOnMarker = true
                        this.markerForModal = [markerHitbox, markerInfo]
                        this.setState({modalNeatherMapIsOpen: true})
                    }
                if (!this.mouseOnMarker) {
                    this.NeatherMap.current.style = 'cursor: default;'
                    this.setState({modalNeatherMapIsOpen: false})
                }
            })
        }
        this.pointModal()
        this.setState({isRender: !this.state.isRender})
     }

     finishLooking = () => {
        this.mouseDown = false;
     }

     wheel = (evt) => {
        if (evt.deltaY > 0) {
            this.scale *= this.scaleMultiplier
        } else {
            this.scale /= this.scaleMultiplier
        }
        if (this.scale > 2) { this.scale = 2 }
        if (this.scale < 0.7) { this.scale = 0.7 }
        this.pointModal()
        this.draw(this.scale, this.translatePos);
        this.setState({modalNeatherMapIsOpen: false})
     }

     pointModal = () => {
        this.markers = []
        this.points.map(({point}) => {
            this.markers.push({
                markerHitbox: {
                    xStart: this.translatePos.x + (point.x * this.scale) - this.pointRadius,
                    xFinish: this.translatePos.x + (point.x * this.scale) + this.pointRadius,
                    yStart: this.translatePos.y + (point.y * this.scale) - this.pointRadius,
                    yFinish: this.translatePos.y + (point.y * this.scale) + this.pointRadius,
                },
                markerInfo: {point}
            })
        })
        if (this.firstRender) {
            this.setState({isRender: !this.state.isRender})
            this.firstRender = false;
        }
     }

     draw = (scale, translatePos) => {
        this.ctx.clearRect(0, 0, this.NeatherMap.current.width, this.NeatherMap.current.height);
        this.ctx.save();
        this.ctx.translate(translatePos.x, translatePos.y);
        this.ctx.scale(scale, scale);

        this.points = [];

        this.initialState.map(line => {
            this.ctx.beginPath();
    
            if (line.tunnel || line.type === 'mainTunnel') {
                this.ctx.moveTo(line.xStart, line.zStart);
                this.ctx.lineTo(line.x, line.y);
    
                switch (line.branch) {
                    case 'blue':
                        this.ctx.strokeStyle = 'blue'
                        break;
                    case 'yellow':
                        this.ctx.strokeStyle = 'yellow'
                        break;
                    case 'red':
                        this.ctx.strokeStyle = 'red'
                        break;
                    case 'green':
                        this.ctx.strokeStyle = 'green'
                        break;
                    default:
                        break;
                }
            }
            this.ctx.lineWidth = '10';
            this.ctx.stroke();
    
            if (line.type === 'portal' || line.type === 'end') {
                this.ctx.beginPath();
                this.points.push({point: line})
                this.ctx.arc(line.x, line.y, this.pointRadius, 0, 2 * 3.14)
                this.ctx.lineWidth = '1';
                this.ctx.fillStyle = 'purple'
                this.ctx.strokeStyle = 'black';
                this.ctx.stroke();
                this.ctx.fill();
            }
    
            if (line.type === 'hab') {
                this.ctx.beginPath();
                this.ctx.arc(line.x, -line.y, 25, 0, 2 * 3.14)
                this.ctx.lineWidth = '1';
                this.ctx.fillStyle = 'white';
                this.ctx.strokeStyle = 'black';
                this.ctx.stroke();
                this.ctx.fill();
            }
        })
        this.ctx.restore();
     }
    
    render() {
        return (
            <div style={{position: "relative", overflow: "hidden"}}>
                <canvas 
                height={document.body.clientHeight}
                width={document.body.clientWidth}
                ref={this.NeatherMap} 
                onMouseDown={this.startLooking}
                onMouseMove={this.looking}
                onMouseUp={this.finishLooking}
                onMouseOver={this.finishLooking}
                onWheel={this.wheel}
                onClick={this.pointModal}
                />
                {
                    this.markers === undefined 
                    ?
                    ''
                    :
                    this.markers.map((marker, index) => <NamesNeatherMap props={marker} scale={this.scale} key={index}/>)
                }
                {this.state.modalNeatherMapIsOpen && <ModalNeatherMap marker={this.markerForModal} />}
                {/* <AddBranch /> */}
            </div>
        )
    }
}

export default NeatherMap
