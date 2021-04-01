import * as React from 'react'
import { style } from 'typestyle'
import { useRootStore } from '../store'

const headerClass = style({
    fontFamily: 'sans-serif',
})

export const App: React.FC = () => {
    const { dummyStore: { foo }} = useRootStore()
    console.log(foo)
    
    return (
        <h1 className={headerClass}>Hello, typescript!</h1>
    )
}