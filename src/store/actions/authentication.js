import { baseUrl } from "../../config";
export const SET_USER = "SET_USER"

export const setUser = (username) => ({ type: SET_USER, username })

export const login = (username, password) => async(dispatch) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password}),
    });

    if (response.ok) {
        console.log('Success');
        dispatch(setUser(username));
    }
}
