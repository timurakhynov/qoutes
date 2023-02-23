import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <header className="Layout__header">
                <nav className="layout__nav">
                    <NavLink to={'/quotes/all'}>Quotes</NavLink>
                    <NavLink to={'/submit'}>Submit new quote</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout