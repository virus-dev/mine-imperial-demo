import React from 'react'

class NeatherMap extends React.Component {
    constructor(props) {
        super(props);
        this.NeatherMap = React.createRef();
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
            { name: 'Райск', branch: 'false', type: 'portal', tunnel: 'false', xStart: -200, zStart: -200, x: -200, y: -200 },
            { name: 'Хаб', branch: 'all', type: 'hab', xStart: 0, zStart: 0, x: 0, y: 0 },
        ]

        this.ctx = this.NeatherMap.current.getContext('2d');
        this.mouseDown = false;
        this.startDragOffset = {};
        this.scale = 1.0;
        this.scaleMultiplier = 0.9;
        this.translatePos = {
            x: this.NeatherMap.current.width / 2,
            y: this.NeatherMap.current.height / 2
        };

        this.draw(this.scale, this.translatePos);
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
        this.draw(this.scale, this.translatePos);
     }

     draw = (scale, translatePos) => {
        this.ctx.clearRect(0, 0, this.NeatherMap.current.width, this.NeatherMap.current.height);
        this.ctx.save();
        this.ctx.translate(translatePos.x, translatePos.y);
        this.ctx.scale(scale, scale);

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
                this.ctx.arc(line.x, line.y, 10, 0, 2 * 3.14)
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
            <canvas 
                height={document.body.clientHeight}
                width={document.body.clientWidth}
                ref={this.NeatherMap} 
                onMouseDown={this.startLooking}
                onMouseMove={this.looking}
                onMouseUp={this.finishLooking}
                onMouseOver={this.finishLooking}
                onWheel={this.wheel}
            />
        )
    }
}

export default NeatherMap
