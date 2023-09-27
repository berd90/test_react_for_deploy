import React from 'react'
import {NavLink} from "react-router-dom";
import main_css from "./PageSecond.module.css"

export default function PageSecond() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>Second page</h1>
                <div><NavLink to="/" >Main page!</NavLink></div>
                <div><NavLink to="/404" >PageNotFound</NavLink></div>
            </div>
        </>
    )
}