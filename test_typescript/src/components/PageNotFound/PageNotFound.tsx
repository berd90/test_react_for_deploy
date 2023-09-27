import React from 'react'
import {NavLink} from "react-router-dom";
import main_css from "./PageNotFound.module.css";

export default function PageNotFound() {
    return(
        <>
            <div className={main_css.main_area}>
                <h1>PageNotFound</h1>
                <div><NavLink to="/" >Main page!</NavLink></div>
                <div><NavLink to="/second" >PageSecond</NavLink></div>
            </div>
        </>
    )
}