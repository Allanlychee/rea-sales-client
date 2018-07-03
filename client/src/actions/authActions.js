import axios from 'axios';
import setAuthToken from './setAuthToken'
import { GET_ERRORS } from './types'
import { SET_CURRENT_USER } from './types'
import jwt_decode from 'jwt-decode'


export const loginUser = userData => dispatch => {
    axios
        .post("/routes/users/Login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('JwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        )
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
} 