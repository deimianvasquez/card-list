import React from 'react'
import Menu from './Menu.jsx'

const Layout =({children})=>{
    return(
        <>
            <Menu />
            {children}
            <footer>Hola desde el pie</footer>
        </>
    )
}

export default Layout