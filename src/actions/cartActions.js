import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {

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

}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type : CART_REMOVE_ITEM,
        payload : id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}