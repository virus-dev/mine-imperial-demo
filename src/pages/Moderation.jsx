import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { branchsOnNeaterMapModeration } from './../redux/actions/branchsOnNeaterMapModeration'

function Moderation() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const mapModerationGenerate = branch => {
        const payload = [branch, ...state.branchs]
        dispatch(branchsOnNeaterMapModeration(payload))
    }

    return (
        <div className='moderationPage'>
            <div className="container page">
                    <h2>Модерация маркеров</h2>
                    {
                        state.branchsOnModeration.map((item, index) => {
                            return <div key={`${item.description}` + index} className="moderationBranch__box">
                                    <div className="moderationBranch__item">
                                        <div className="moderationBranch__name">
                                            {item.name}
                                        </div>
                                        <div className="moderationBranch__description">
                                            {item.description}
                                        </div>
                                        <div className="moderationBranch__tunnel">
                                            {console.log(item.tunnel)}
                                            Туннель: {item.tunnel ? 'Есть' : 'Нету'}
                                        </div>
                                        <div className="moderationBranch__x">
                                            X: {item.x}
                                        </div>
                                        <div className="moderationBranch__z">
                                            Z: {item.y}
                                        </div>
                                        <Link className="btn moderationBranch__btn" to="map-moderation" onClick={() => mapModerationGenerate(item)}>
                                            Проверить
                                        </Link>
                                    </div>
                                </div>
                        })
                    }
            </div>
        </div>
    )
}

export default Moderation
