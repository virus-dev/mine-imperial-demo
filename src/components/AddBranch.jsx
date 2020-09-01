import React from 'react'
import { ModalWindow } from './index'
import { AddBranchForm } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { addBranchOnModeration } from './../redux/actions/addBranchOnModeration'
import { addBranchEmpty } from './../redux/actions/addBranchForm'

function AddBranch() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.addBranchForm)

    const [visibleModal, setVisibleModal] = React.useState(false);

    const validateCheck = () => {
        if (
            state.title !== ''
            && state.description !== ''
            && state.x !== '0'
            && state.y !== '0'
            && (
                state.hasTunnel === true && state.branchColor.length !== 0
                ||
                state.hasTunnel === false && state.branchColor.length === 0
            )
        ) {
            let color = state.branchColor.length > 1 ? 'two' : state.branchColor[0] ;
            dispatch(addBranchOnModeration({
                name: state.title,
                description: state.description,
                branch: color, 
                type: 'portal', 
                tunnel: state.hasTunnel, 
                x: +state.x, 
                y: +state.y
            }))
            dispatch(addBranchEmpty())
            setVisibleModal(false)
        }
    }

    return (
        <>
            <button onClick={() => setVisibleModal(true)} className="btn btn-addBranch">
                Добавить маркер
            </button>
            {visibleModal && <ModalWindow 
                title={'Добавить маркер'} 
                body={<AddBranchForm />} 
                btnConfirm={
                    <button className="btn btn-confirm" onClick={validateCheck}>Добавить</button>
                }
                btnClose={
                    <button onClick={() => setVisibleModal(false)} className="btn btn-close">Закрыть</button>
                }
            />}
        </>
    )
}

export default AddBranch
