import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <header>header</header>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;