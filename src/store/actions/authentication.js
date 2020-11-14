import { baseUrl } from "../../config";
export const SET_USER = "SET_USER"

export const setUser = (username) => ({ type: SET_USER, username })

export const login = (username, password) => async(dispatch) => {
    const response = await fetch(`${baseUrl}`, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password}),
    });

    if (response.ok) {
        const {authenticated, username} = await response.json()
        console.log(username);
        dispatch(setUser(username));
    }
}
