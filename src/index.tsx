import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './component'
import { RootStore, RootStoreProvider } from './store'

ReactDOM.render(
    <RootStoreProvider value={new RootStore()}>
        <App />
    </RootStoreProvider>,
    document.getElementById('app')
)