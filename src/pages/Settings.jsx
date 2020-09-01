import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './../redux/actions/setUser'

function Settings() {
    const [adminCheckbox, setAdminCheckbox] = React.useState(false);
    const state = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    if (state === 'user' && adminCheckbox === true) {setAdminCheckbox(false)} 
    else if (state === 'admin' && adminCheckbox === false) {setAdminCheckbox(true)}

    const setUserAvtion = state === 'user' 
        ? 'admin'
        : 'user'

    return (
        <div className='settingsPage'>
            <div className="container page">
                    <h2>Админ</h2>
                    <div className="formGroup line">
                        <label htmlFor="settings" className="label-text">Быть админом</label>
                        <input id="settings" type="checkbox" className="input-checkbox" checked={adminCheckbox} onChange={() => dispatch(setUser(setUserAvtion))}/>
                    </div>
                    <p>Сайт использует localStorage</p>
            </div>
        </div>
    )
}

export default Settings
