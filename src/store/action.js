export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

export const addToBasket = (id) => {
  return dispatch => {
    dispatch({ type: ADD_TO_BASKET, id })
  }
}

export const removeFromBasket = (id) => {
  return dispatch => {
    dispatch({ type: REMOVE_FROM_BASKET, id })
  }
}