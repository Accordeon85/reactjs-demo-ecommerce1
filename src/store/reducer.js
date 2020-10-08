import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './action'
import data from '../articles-data'

export const initialState = {
  basket: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_BASKET: {
      const articles = Object.values(data)
      const article = articles.find(a => a.id === action.id)
      if (!state.basket.includes(article)) {
        localStorage.setItem(article.id, article.name)
        return {
          ...state,
          basket: [...state.basket, article]
        }
      }
      return {
        state
      }

    }
    case REMOVE_FROM_BASKET: {
      const articles = Object.values(data)
      const article = articles.find(a => a.id === action.id)
      localStorage.removeItem(article.id)
      return {
        ...state,
        basket: [...state.basket.filter(a => a.id !== action.id)]
      }
    }
    default:
      return state
    }
}

export default reducer