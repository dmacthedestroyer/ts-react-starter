import * as React from 'react'
import { style } from 'typestyle'

const headerClass = style({
    fontFamily: 'sans-serif',
})

export const App: React.FC = () => {
    return (
        <h1 className={headerClass}>Hello, typescript!</h1>
    )
}