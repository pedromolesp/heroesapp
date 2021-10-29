import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleClick = () => {
        history.replace('/');
    }
    return (
        <div>
            <h1>Login </h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    )
}
