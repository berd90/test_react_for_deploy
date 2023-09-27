
import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import PageIndex from "../PageIndex/PageIndex";
import PageSecond from "../PageSecond/PageSecond";
import PageNotFound from "../PageNotFound/PageNotFound";


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