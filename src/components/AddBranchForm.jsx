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
                        {text: 'Красная', type: 'red'}
                    ])
                } else {
                    setBranchVisible([
                        branchVisible[0],
                        {text: 'Синяя', type: 'blue'}
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

    let buttons;
    buttons = branchVisible.map((btn, index) => {
        return (
        <div className="select__item" key={`${btn.text}${index}`}>
            <span 
                className={state.branchColor.includes(btn.type) ? btn.type : ''}
                onClick={() => dispatch(addBranchColor([btn.type]))}>
                    {btn.text}
                </span>
        </div> 
        )
    })

    const AddBranchForm__ = 'AddBranchForm__'

    return (
        <div className="AddBranchForm">
            <div className="formGroup column">
                <label htmlFor={`${AddBranchForm__}input`} className="label-text">Название</label>
                <input id={`${AddBranchForm__}input`} type="text" maxlength='25' className="input-text" value={state.title} onChange={function(e){textCheck(e, 'TITLE')}}/>
            </div>
            <div className="formGroup column">
                <label htmlFor={`${AddBranchForm__}description`} className="label-text">Описание</label>
                <textarea id={`${AddBranchForm__}description`} maxlength='250' type="text" className="textarea" value={state.description} onChange={function(e){textCheck(e, 'DESCRIPTION')}}/>
            </div>
            <div className="flex">
                <div className="formGroup line">
                    <label htmlFor={`${AddBranchForm__}x`} className="label-text">X:</label>
                    <input id={`${AddBranchForm__}x`} type="text" className="input-text" value={state.x} onChange={function(e){textCheck(e, 'X_CORD')}}/>
                </div>
                <div className="formGroup line">
                    <label htmlFor={`${AddBranchForm__}z`} className="label-text">Z:</label>
                    <input id={`${AddBranchForm__}z`} type="text" className="input-text" value={state.y} onChange={function(e){textCheck(e, 'Y_CORD')}}/>
                </div>
            </div>
            <div className="flex">
                <div className="formGroup line">
                    <label htmlFor={`${AddBranchForm__}hasTunnel`} className="label-checkbox">Есть туннель?</label>
                    <input id={`${AddBranchForm__}hasTunnel`} type="checkbox" className="input-checkbox" checked={state.hasTunnel} onChange={function(){checkboxCheck('HAS_TUNNEL')}}/>
                </div>
                <div className="formGroup line">
                    <label htmlFor={`${AddBranchForm__}hasTwoTunnel`} className="label-checkbox">Построено 2 Ветки</label>
                    <input id={`${AddBranchForm__}hasTwoTunnel`} type="checkbox" className="input-checkbox" disabled={state.hasTwoTunnelDisabled} checked={state.hasTwoTunnel} onChange={function(){checkboxCheck('HAS_TWO_TUNNEL')}}/>
                </div>
            </div>
            <div className="formGroup column">
                <label className="label-checkbox">Ветка</label>
                <div className={state.hasTunnel === true ? 'select__castom' : 'select__castom select__castom--disabled'}>
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default AddBranchForm