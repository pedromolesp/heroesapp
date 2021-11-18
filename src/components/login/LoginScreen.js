import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types'
export const LoginScreen = () => {
    const navigate = useNavigate();

    //Con useContext puedo llamar a los datos definidos en el provider de heroesApp
    const { dispatch } = useContext(AuthContext);
    const handleClick = () => {
        const action = {
            type: types.login,
            payload: { name: 'Pedro' }
        }
        // const reducer = authReducer({
        //     name: props.user, logged: props.user.logged

        // }, action);
        dispatch(action);
    }
    return (
        <div>
            <h1>Login </h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    )
}
