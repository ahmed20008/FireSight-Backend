import React from 'react';
import '../assets/css/AuthLayout.css';

function AuthLayout(WrappedComponent) {
    return function AuthLayoutWrapper(props) {
        return (
            <>
                <div className="container">
                    <div className="py-5">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </>
        );
    };
}

export default AuthLayout;
