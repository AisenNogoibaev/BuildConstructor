import React, {lazy, Suspense} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FullSpinner from "../components/Spinners/FullSpinner";

const Routes = () => {
    return (
        <Suspense fallback={<FullSpinner/>}>

        </Suspense>
    );
};

export default Routes;