import axios from 'axios';
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {

    try {
        const {data} = await axios.get(`http://localhost:5001/api/products/${id}`)

       
        dispatch({
            type : CART_ADD_ITEM,
            payload : {
                _id : data._id,
                name : data.name,
                image : data.image,
                price : data.price,
                quantity : qty
            }
        })

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
        
    } catch (error) {

        console.log(error)            
    }

}
