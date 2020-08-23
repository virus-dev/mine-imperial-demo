import React from 'react'
import { ModalWindow } from './index'
import { AddBranchForm } from './index'

function AddBranch() {
    return (
        <>
            <button className="btn btn-addBranch">
                Добавить маркер
            </button>
            <ModalWindow props={<AddBranchForm />} />
        </>
    )
}

export default AddBranch
