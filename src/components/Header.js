import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Header( props){
    debugger
    const history = useHistory()
    return(
        <div className={'header-container'}>
            <h1>Lambda Eats</h1>
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/pizza')}>Form</button>
        </div>
    )
}