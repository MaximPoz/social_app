import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


export const withSuspense = (Component) => { //передали в ХОК компоненту

    return (props) => { // компоненту обернули и вернули обратно  в withSuspense
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    }
}