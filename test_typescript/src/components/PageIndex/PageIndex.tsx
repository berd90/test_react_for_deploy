import React from 'react'
import main_css from "./PageIndex.module.css"
import {NavLink} from "react-router-dom";

export default function PageIndex() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>Main page!</h1>
                <div><NavLink to="/second" >PageSecond</NavLink></div>
                <div><NavLink to="/404" >PageNotFound</NavLink></div>
            </div>
        </>
    )
}