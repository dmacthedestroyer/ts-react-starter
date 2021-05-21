import * as React from 'react'
import { style } from 'typestyle'
import './styles.scss'

// SCSS .exampleClass defined in ./app.scss

// CSS in JS class made with Typestyle
const headerClass = style({
    fontFamily: 'sans-serif',
})

export const App: React.FC = () => {
    return (<>
        <h1 className={headerClass}>Hello, typescript!</h1>
        <div className={'example'} />
    </>)
}