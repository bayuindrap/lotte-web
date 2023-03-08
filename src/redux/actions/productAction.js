import axios from "axios";
import { API_URL } from "../../helper";

export const productAction = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${API_URL}`)
            dispatch({
                type: "GET_PRODUCT",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}