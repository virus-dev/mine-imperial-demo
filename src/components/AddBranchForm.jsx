import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    addBranchTitle, 
    addBranchDescription, 
    addBranchX, 
    addBranchY, 
    addBranchHasTunnel,
    addBranchHasTwoTunnelDisabled,
    addBranchHasTwoTunnel,
    addBranchColor,
} from './../redux/actions/addBranchForm'

function AddBranchForm() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.addBranchForm)
    const [branchVisible, setBranchVisible] = React.useState([
        {text: 'Желтая', type: 'yellow'},
        {text: 'Синяя', type: 'blue'},
    ]);

    const textCheck = (e, type) => {
        const numbersSymvols = ['+','-','0','1','2','3','4','5','6','7','8','9'];
        const maxCord = 2000;
        switch (type) {
            case 'TITLE':
                const banSymvols = ['?', '%', '$', ';']
                outer: for (let i = 0; i < banSymvols.length; i++) {
                    if (e.target.value.includes(banSymvols[i])) {
                        e.target.value = e.target.value.replace(/[?%$;]/, '');
                        break outer;
                    }
                }
                dispatch(addBranchTitle(e.target.value))
                break;
            case 'DESCRIPTION':
                if (e.target.value.includes('%')) {
                    e.target.value = e.target.value.replace('%', '')
                }
                dispatch(addBranchDescription(e.target.value))
                break;
            case 'X_CORD':
                outer: for (let i = 0; i < numbersSymvols.length; i++) {
                    if (!e.target.value.includes(numbersSymvols[i])) {
                        if (e.target.value === '') {e.target.value = '0'}
                        if (e.target.value[1] !== undefined) {
                            if (e.target.value[0] === '0' && e.target.value[1] !== '0') {e.target.value = e.target.value[1]}
                        }
                        if (e.target.value[0] === '0' && e.target.value[1] === '0') {e.target.value = '0'}
                        if (e.target.value[0] === '-' && e.target.value[1] === '0') {e.target.value = '-'}
                        e.target.value = e.target.value[0] + e.target.value.slice(1).replace(/\D+/g, '')
                        e.target.value = e.target.value.replace(/(?!-)[^0-9]/g, '');
                        if (e.target.value > maxCord) {e.target.value = maxCord}
                        if (e.target.value < -maxCord) {e.target.value = -maxCord}
                        break outer;
                    }
                }
                if (e.target.value >= 0) {
                    setBranchVisible([
                        {text: 'Желтая', type: 'yellow'}, 
                        branchVisible[1]
                    ])
                } else {
                    setBranchVisible([
                        {text: 'Зеленая', type: 'green'}, 
                        branchVisible[1]
                    ])
                }
                dispatch(addBranchX(e.target.value))
                break;
            case 'Y_CORD':
                outer: for (let i = 0; i < numbersSymvols.length; i++) {
                    if (!e.target.value.includes(numbersSymvols[i])) {
                        if (e.target.value === '') {e.target.value = '0'}
                        if (e.target.value[1] !== undefined) {
                            if (e.target.value[0] === '0' && e.target.value[1] !== '0') {e.target.value = e.target.value[1]}
                        }
                        if (e.target.value[0] === '0' && e.target.value[1] === '0') {e.target.value = '0'}
                        if (e.target.value[0] === '-' && e.target.value[1] === '0') {e.target.value = '-'}
                        e.target.value = e.target.value[0] + e.target.value.slice(1).replace(/\D+/g, '')
                        e.target.value = e.target.value.replace(/(?!-)[^0-9]/g, '');
                        if (e.target.value > maxCord) {e.target.value = maxCord}
                        if (e.target.value < -maxCord) {e.target.value = -maxCord}
                        break outer;
                    }
                }
                if (e.target.value >= 0) {
                    setBranchVisible([
                        branchVisible[0],
                        {text: 'Синяя', type: 'blue'}
                    ])
                } else {
                    setBranchVisible([
                        branchVisible[0],
                        {text: 'Красная', type: 'red'}
                    ])
                }
                dispatch(addBranchY(e.target.value))
                break;
            default:
                break;
        }
    }

    const checkboxCheck = (type) => {
        if (type === 'HAS_TUNNEL') {
            dispatch(addBranchHasTunnel(!state.hasTunnel))
            console.log(!state.hasTunnel === false)
            if (!state.hasTunnel === false) {
                dispatch(addBranchHasTwoTunnel(false))
                dispatch(addBranchHasTwoTunnelDisabled(true))
            } else {
                dispatch(addBranchHasTwoTunnelDisabled(false))
            }
        }
        else if (type === 'HAS_TWO_TUNNEL') {
            if (!state.hasTwoTunnel) {
                dispatch(addBranchColor([branchVisible[0].type, branchVisible[1].type]))
            } else {
                dispatch(addBranchColor([]))
            }
            dispatch(addBranchHasTwoTunnel(!state.hasTwoTunnel))
        }
    }

    const selectCheck = (type) => {
        console.log(type)
    }

    let buttons;
    buttons = branchVisible.map((btn, index) => {
        return (
        <div className="select__item">
            <span 
                className={state.branchColor.includes(btn.type) ? btn.type : ''}
                onClick={() => dispatch(addBranchColor([btn.type]))}
                key={index}>
                    {btn.text}
                </span>
        </div> 
        )
    })

    return (
        <div>
            <div className="formGroup">
                <label htmlFor="">Название</label>
                <input type="text" className="input" value={state.title} onChange={function(e){textCheck(e, 'TITLE')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">Описание</label>
                <textarea type="text" className="textarea" value={state.description} onChange={function(e){textCheck(e, 'DESCRIPTION')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">X:</label>
                <input type="text" className="input" value={state.x} onChange={function(e){textCheck(e, 'X_CORD')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">Z:</label>
                <input type="text" className="input" value={state.y} onChange={function(e){textCheck(e, 'Y_CORD')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">Есть туннель?</label>
                <input type="checkbox" className="checkbox" checked={state.hasTunnel} onChange={function(){checkboxCheck('HAS_TUNNEL')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">Построено 2 Ветки</label>
                <input type="checkbox" className="checkbox" disabled={state.hasTwoTunnelDisabled} checked={state.hasTwoTunnel} onChange={function(){checkboxCheck('HAS_TWO_TUNNEL')}}/>
            </div>
            <div className="formGroup">
                <label htmlFor="">Ветка</label>
                <div className={state.hasTunnel === true ? 'select__castom' : 'select__castom select__castom--disabled'}>
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default AddBranchForm