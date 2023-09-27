
import React from 'react'
import {BrowserRouter, Route, Routes, Navigate, NavLink} from "react-router-dom";


export default function PagesRouting () {
    return (
        <Routes>
            <Route path='/' element={ <PageIndex /> }/>
            <Route path='/second' element={ <PageSecond />}/>
            <Route path='/404' element={ <PageNotFound />}/>
            <Route path="*" element={ <Navigate to="/404" />}/>
        </Routes>

    )
}