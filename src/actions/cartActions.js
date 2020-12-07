import axios from 'axios';
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id) => async dispatch => {

    try {
        const {data} = await axios.get(`http://localhost:5001/api/products/${id}`)

        localStorage.setItem('cart', data)
        
        dispatch({
            type : CART_ADD_ITEM,
            payload : data
        })
    
    } catch (error) {

        console.log(error)            
    }

}
