import React      from 'react'
import App        from './App'
import store      from '../store'
import {Provider} from 'react-redux'
import                 '../assets/style.css'

export default function Root() {
    return (
        <Provider store = { store }>
            <App />
        </Provider>
    )
}
