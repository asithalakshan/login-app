import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRouter = ({ component: Component, ...rest}) => {

    const auth = localStorage.getItem('isLogin')

        return (
            <Route
                {...rest}
                render = {(props) => {
                    if(auth === 'true'){
                        return <Component {...props} />
                    }

                    if(auth === 'false'){
                        return (
                            <Redirect to={{ path: '/'}} />
                        )
                    }
                }}
            />
        )
}

export default ProtectedRouter;

