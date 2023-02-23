import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Main.css';

const Main = () => {
    return (
        <div className="mainDiv">
            <nav className="main__nav">
                <NavLink to={'/quotes/all'}>All</NavLink>
                <NavLink to={'/quotes/star_wars'}>Star Wars</NavLink>
                <NavLink to={'/quotes/famous_people'}>Famous people</NavLink>
                <NavLink to={'/quotes/saying'}>Saying</NavLink>
                <NavLink to={'/quotes/humour'}>Humour</NavLink>
                <NavLink to={'/quotes/motivational'}>Motivational</NavLink>
            </nav>
            <main className="quoteDiv">
                <Outlet/>
            </main>
        </div>
    )
}

export default Main