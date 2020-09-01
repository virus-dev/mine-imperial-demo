import React from 'react'
import { ModalNeatherMap, NamesNeatherMap } from './../components/index'
import { connect } from 'react-redux'
import { branchsOnNeaterMapModeration } from './../redux/actions/branchsOnNeaterMapModeration'
import { addBranch } from './../redux/actions/addBranch'
import { deliteOneBranchOnModeration } from './../redux/actions/addBranchOnModeration'
import { Link } from 'react-router-dom'

class MapModeration extends React.Component {
    constructor(props) {
        super(props);
        this.NeatherMap = React.createRef();
        this.state = {
            modalNeatherMapIsOpen: false,
            isRender: false,
        }
     }

     componentDidMount() {
        this.ctx = this.NeatherMap.current.getContext('2d');
        if (this.props.branchs.length !== 0) {
            this.onMarkerView = {
                x: this.props.branchs[0].x,
                z: this.props.branchs[0].y
            }
        } else {
            this.onMarkerView = {
                x: 0,
                z: 0
            }
        }
        this.mouseDown = false;
        this.startDragOffset = {};
        this.pointRadius = 5;
        this.scale = 1.0;
        this.scaleMultiplier = 0.9;
        this.translatePos = {
            x: this.NeatherMap.current.width / 2 - this.onMarkerView.x,
            y: this.NeatherMap.current.height / 2 - this.onMarkerView.z
        };
        this.startTranslatePos = {
            x: this.NeatherMap.current.width / 2,
            y: this.NeatherMap.current.height / 2
        };
        this.firstRender = true;
        this.draw(this.scale, this.translatePos);
        this.pointModal()
     }

     componentDidUpdate() {
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
     }

     finishLooking = () => {
        this.mouseDown = false;
     }

     buttonFunction = (type) => {
        this.newBranchsModeration = [...this.props.branchsModeration]
        for (let i = 0; i < this.newBranchsModeration.length; i++) {
            if (this.newBranchsModeration[i] === this.props.branchs[0]) {
                this.newBranchsModeration.splice(i, 1)
            }
        }
        this.props.dispatch(deliteOneBranchOnModeration(this.newBranchsModeration))
        if (type === 'add') {this.props.dispatch(addBranch(this.props.branchs[0]))}
     }

     wheel = (evt) => {
        if (evt.deltaY > 0) {
            this.scale *= this.scaleMultiplier
        } else {
            this.scale /= this.scaleMultiplier
        }
        if (this.scale > 2) { this.scale = 2 }
        if (this.scale < 0.5) { this.scale = 0.5 }
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

     renderMainTunnels = () => {
        this.maxCordMainTunnel = 2000;

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, this.maxCordMainTunnel);
        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = '10';
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -this.maxCordMainTunnel);
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = '10';
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.maxCordMainTunnel, 0);
        this.ctx.strokeStyle = 'yellow'
        this.ctx.lineWidth = '10';
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(-this.maxCordMainTunnel, 0);
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = '10';
        this.ctx.stroke();
     }

     draw = (scale, translatePos) => {
        this.ctx.clearRect(0, 0, this.NeatherMap.current.width, this.NeatherMap.current.height);
        this.ctx.save();
        this.ctx.translate(translatePos.x, translatePos.y);
        this.ctx.scale(scale, scale);

        this.renderMainTunnels()

        this.points = [];

        this.props.branchs.map(line => {
            this.ctx.beginPath();

            if (line.tunnel && line.branch !== 'two') {

                if (line.branch === 'red' || line.branch === 'blue') {
                    this.ctx.moveTo(0, line.y);
                    this.ctx.lineTo(line.x, line.y);
                } else if (line.branch === 'green' || line.branch === 'yellow') {
                    this.ctx.moveTo(line.x, 0);
                    this.ctx.lineTo(line.x, line.y);
                }
    
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

                this.ctx.lineWidth = '8';
                this.ctx.stroke();
            }

            if (line.branch === 'two') {
                this.ctx.beginPath();
                this.ctx.moveTo(0, line.y);
                this.ctx.lineTo(line.x, line.y);
                if (line.y < 0) {
                    this.ctx.strokeStyle = 'blue'
                } else {
                    this.ctx.strokeStyle = 'red'    
                }
                this.ctx.lineWidth = '10';
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(line.x, 0);
                this.ctx.lineTo(line.x, line.y);
                if (line.x < 0) {
                    this.ctx.strokeStyle = 'green'
                } else {
                    this.ctx.strokeStyle = 'yellow'    
                }
                this.ctx.lineWidth = '10';
                this.ctx.stroke();
            }
    
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
                <div className="mapModeration__buttons">
                    <Link to='moderation' className="btn btn-confirm shadow" onClick={() => this.buttonFunction('add')}>Одобрить</Link>
                    <Link to='moderation' className="btn btn-close shadow" onClick={() => this.buttonFunction('delite')}>Отклонить</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        branchs: state.branchsOnNeaterMapModeration,
        branchsModeration: state.branchsOnModeration,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBranch: action => dispatch(addBranch(action)),
        deliteOneBranchOnModeration: action => dispatch(deliteOneBranchOnModeration(action)),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapModeration)
